import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Optional: Dynamic metadata
  return {
    title: `Project | ${params.id}`,
  };
}

export default function WorkDetail({ params }: Props) {
  const staticWorkData = [
    {
      _id: "1",
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects.",
      image: "/images/portfolio.png",
      category: "web Apps",
      deploymentLink: "https://portfolio.example.com",
      video: "/videos/portfolio.mp4",
    },
    {
      _id: "2",
      title: "E-Commerce Platform",
      description: "A full-stack MERN e-commerce application.",
      image: "/images/ecommerce.png",
      category: "web Apps",
      deploymentLink: "https://ecommerce.example.com",
      video: "/videos/deefakevideo.mp4",
    },
    {
      _id: "3",
      title: "Deepfake Detector",
      description: "A machine learning model to detect deepfake images.",
      image: "/images/",
      category: "ai ml",
      deploymentLink: "https://deepfake.example.com",
      video: "/videos/deepfake.mp4",
    },
    {
      _id: "4",
      title: "Chatbot Assistant",
      description: "An AI-powered chatbot built using NLP models.",
      image: "/images/chatbot.png",
      category: "ai ml",
      deploymentLink: "https://chatbot.example.com",
      video: "/videos/chatbot.mp4",
    },
  ];

  const work = staticWorkData.find((item) => item._id === params.id);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 max-w-3xl mx-auto bg-white">
      <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
      <p className="text-gray-600 mb-2">Category: {work.category}</p>

      <img
        src={work.image}
        alt={work.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <video
        src={work.video}
        controls
        muted
        playsInline
        className="w-full rounded-lg mb-6 shadow-md"
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>

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
