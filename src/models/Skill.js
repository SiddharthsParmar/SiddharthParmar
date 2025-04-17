// models/Skill.js
import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  title: String,
  image: String,
}, { timestamps: true });

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
