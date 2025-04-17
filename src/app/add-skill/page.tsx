'use client';
import { useEffect, useState } from 'react';

interface Work {
  _id?: string;
  title: string;
  description: string;
  image: string;
  deploymentLink: string;
  category: string;
}

export default function AddWork() {
  const [formData, setFormData] = useState<Work>({
    title: '',
    description: '',
    detailedDescription: '',
    image: '',
    video: '',
    deploymentLink: '',
    category: 'web Apps',
  });
    
  const [workList, setWorkList] = useState<Work[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('web Apps');
  const [editId, setEditId] = useState<string | null>(null);

  // Fetch work items on category change
  useEffect(() => {
    fetch(`/api/work?category=${selectedCategory}`)
      .then(res => res.json())
      .then(data => setWorkList(data));
  }, [selectedCategory]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = editId ? 'PUT' : 'POST';
    const endpoint = editId ? `/api/work/${editId}` : '/api/work';

    const res = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ title: '', description: '', image: '', deploymentLink: '', category: 'web Apps' });
      setEditId(null);
      const updated = await res.json();
      if (editId) {
        setWorkList(prev => prev.map(w => (w._id === updated._id ? updated : w)));
      } else {
        setWorkList(prev => [updated, ...prev]);
      }
    }
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/work/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setWorkList(prev => prev.filter(w => w._id !== id));
    }
  };

  const handleEdit = (work: Work) => {
    setFormData(work);
    setEditId(work._id || null);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Add Work Project</h1>

      <form onSubmit={handleSubmit} className="grid gap-4 mb-8">
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border p-2 rounded" required />
        <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 rounded" />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="border p-2 rounded" required />
        <input name="deploymentLink" placeholder="Deployment Link" value={formData.deploymentLink} onChange={handleChange} className="border p-2 rounded" />
        <select name="category" value={formData.category} onChange={handleChange} className="border p-2 rounded" required>
          <option value="web Apps">Web Apps</option>
          <option value="mobile Apps">Mobile Apps</option>
          <option value="ai ml">AI ML</option>
        </select>

        <textarea
  name="detailedDescription"
  placeholder="Detailed Description"
  value={formData.detailedDescription || ''}
  onChange={handleChange}
  className="border p-2 rounded"
/>
<input
  name="video"
  placeholder="Video URL"
  value={formData.video || ''}
  onChange={handleChange}
  className="border p-2 rounded"
/>

        <button className="bg-blue-600 text-white py-2 rounded" type="submit">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>

      <div className="mb-6 flex gap-4">
        {['web Apps', 'mobile Apps', 'ai ml'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm ${selectedCategory === cat ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {workList.map((work) => (
          <div key={work._id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{work.title}</h2>
              <p className="text-sm text-gray-600">{work.description}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(work)} className="bg-yellow-400 px-3 py-1 rounded text-sm">Edit</button>
              <button onClick={() => handleDelete(work._id!)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
