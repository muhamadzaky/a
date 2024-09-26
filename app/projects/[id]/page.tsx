import React from "react";
import { Navigation } from "@/app/components/nav";
import ProjectDetail from "@/app/components/project-page/ProjectDetail";

const ProjectbyId: React.FC = () => {
  

  return (
    <div className="relative pb-16">
      <Navigation />
      <ProjectDetail />
    </div>
  )
};

export default ProjectbyId;