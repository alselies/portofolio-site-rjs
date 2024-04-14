// src/pages/Portfolio.tsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: 'https://via.placeholder.com/300',
      githubUrl: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: 'https://via.placeholder.com/300',
      githubUrl: 'https://github.com/example/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
