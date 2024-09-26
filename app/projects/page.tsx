import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
// import { Article } from "./article";
import { Eye } from "lucide-react";
import ProjectList from "../components/project-page/ProjectList";
import axios from "axios";

const ProjectsPage = async () => {
  const response = await axios.get(`${process.env.NEXT_API_URL}projects`);
  const responseData = response.data;

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <ProjectList data={responseData} />
      </div>
    </div>
  );
}

export default ProjectsPage;