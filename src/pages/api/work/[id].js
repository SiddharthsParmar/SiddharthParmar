import dbConnect from '@/lib/mongodb';
import Work from '@/models/Work';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'GET') {
    const work = await Work.findById(id);
    if (!work) return res.status(404).json({ message: 'Not found' });
    return res.status(200).json(work);
  }

  if (req.method === 'PUT') {
    const updated = await Work.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updated);
  }

  if (req.method === 'DELETE') {
    await Work.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Deleted successfully' });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
