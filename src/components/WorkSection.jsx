"use client";
import React, { useState } from "react";
import Link from "next/link";

const WorkSection = () => {
  const workCategories = ["web Apps", "ai ml"];
  const [selectedWork, setSelectedWork] = useState("web Apps");

  // Static work data
  const staticWorkData = {
    "web Apps": [
      {
        _id: "1",
        title: "Portfolio Website",
        description: "A personal portfolio showcasing my skills and projects.with Next JS",
        image: "/images/image.png",
        gitlink:''
      },
      {
        _id: "2",
        title: "E-Commerce Platform",
        description: "A full-stack MERN e-commerce application.",
        image: "/images/ecommerce-cover.png",
      },
    ],
    "ai ml": [
      {
        _id: "3",
        title: "Deepfake Detector",
        description: "A machine learning model to detect deepfake images.",
        image: "/images/deep.png",
      },
      {
        _id: "4",
        title: "Chatbot Assistant",
        description: "An AI-powered chatbot built using NLP models.",
        image: "/images/chatbot.png",
      },
    ],
  };

  const workData = staticWorkData[selectedWork] || [];

  // Card Component
  const WorkCard = ({ project }) => (
    <div className="w-[15rem] mt-14 p-3 shadow-md rounded-xl bg-white">
      <div className="w-full h-[150px] overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="mt-3 font-semibold text-lg">{project.title}</h2>
      <h3 className="text-sm text-gray-600">{project.description}</h3>
      <div className="flex justify-end mt-5">
        <Link
          href={`/work/${project._id}`}
          // href={}
          className="px-5 py-1 rounded-2xl bg-black text-white text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-14 px-4 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center mb-6">My Work</h1>

      {/* Category Tabs */}
      <div className="flex justify-center gap-5 mb-10 flex-wrap">
        {workCategories.map((category) => (
          <h2
            key={category}
            onClick={() => setSelectedWork(category)}
            className={`cursor-pointer py-1 px-5 rounded-3xl text-sm transition-all duration-200 ${
              selectedWork === category
                ? "bg-gray-800 text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            {category}
          </h2>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {workData.length > 0 ? (
          workData.map((project) => (
            <WorkCard key={project._id} project={project} />
          ))
        ) : (
          <p className="text-gray-500">No projects available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default WorkSection;
