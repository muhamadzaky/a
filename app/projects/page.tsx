import React from 'react';
// import { Article } from "./article";
import ProjectList from '../components/shared/project-page/ProjectList';
import axios from 'axios';

const ProjectsPage = async () => {
  const response = await axios.get(`${process.env.NEXT_API_URL}projects`);
  const responseData = response.data;

  return (
    <div className="px-6 py-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 lg:py-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projects</h2>
        <p className="mt-4 text-zinc-400">
          Some of the projects are from work and some are on my own time.
        </p>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      <ProjectList data={responseData} />
    </div>
  );
};

export default ProjectsPage;
