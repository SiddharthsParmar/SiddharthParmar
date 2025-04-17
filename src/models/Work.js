// models/Work.ts
import mongoose from 'mongoose';

const WorkSchema = new mongoose.Schema({
  title: String,
  description: String,
  detailedDescription: String,
  image: String,
  video: String,
  deploymentLink: String,
  category: String, // "web Apps", "mobile Apps", "ai ml"
}, { timestamps: true });

export default mongoose.models.Work || mongoose.model('Work', WorkSchema);
