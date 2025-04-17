// pages/api/skills/index.js
import dbConnect from '@/lib/mongodb';
import Skill from '@/models/Skill';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const skills = await Skill.find({});
    return res.status(200).json(skills);
  }

  if (req.method === 'POST') {
    const { title, image } = req.body;
    const newSkill = await Skill.create({ title, image });
    return res.status(201).json(newSkill);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
