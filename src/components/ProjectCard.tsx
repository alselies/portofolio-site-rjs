// src/components/ProjectCard.tsx
import React from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, imageUrl, githubUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={githubUrl} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
