import React from 'react';

async function getWorkItem(id: string) {
  const res = await fetch(`http://localhost:3000/api/work/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch work data");
  console.log(res);
  
  return res.json();
}

export default async function WorkDetail({ params }: { params: { id: string } }) {
  const work = await getWorkItem(params.id);

  return (
    <div className="min-h-screen px-6 py-12 max-w-3xl mx-auto bg-white">
      <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
      <p className="text-gray-600 mb-2">Category: {work.category}</p>
      <img
        src={work.image}
        alt={work.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-6">{work.description}</p>
      <a
        href={work.deploymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Visit Project
      </a>
    </div>
  );
}
