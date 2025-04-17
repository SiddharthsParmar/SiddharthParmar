import dbConnect from '@/lib/mongodb';
import Work from '@/models/Work';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const { category } = req.query;
    const query = category ? { category } : {};
    const workItems = await Work.find(query).sort({ createdAt: -1 });
    return res.status(200).json(workItems);
  }

  if (req.method === 'POST') {
    // POST handler
const { title, description, image,  deploymentLink, category } = req.body;
// Save these to DB

// PUT handler (similar)

    if (!title || !image || !category) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const newWork = await Work.create({ title, description, image, deploymentLink, category });
    return res.status(201).json(newWork);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
