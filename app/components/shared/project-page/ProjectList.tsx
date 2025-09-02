'use client';

import _ from 'lodash';
import ProjectCard from './ProjectCard';

type ProjectListProps = {
  data: Model.Project[];
};

const ProjectList = ({ data }: ProjectListProps) => {
  const featuredProjects = _.filter(data, (p): p is Model.Project => !!p.featured);
  const unfeaturedProjects = _.filter(data, (p): p is Model.Project => !p.featured);

  const top1 = _.find(featuredProjects, (p) => p.id === 12);
  const top2 = _.find(featuredProjects, (p) => p.id === 13);
  const top3 = _.find(featuredProjects, (p) => p.id === 16);

  const columns = [[], [], []] as Model.Project[][];
  _.forEach(unfeaturedProjects, (project, index) => {
    columns[index % 3].push(project);
  });

  return (
    <>
      <div className="flex flex-col space-y-6">
        <h3 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Featured</h3>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {top1 && <ProjectCard data={top1} hasReadMore={true} />}

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {_.map(_.filter([top2, top3], Boolean), (project) => (
              <ProjectCard key={project!.id} data={project!} hasReadMore={true} />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden w-full h-px md:block bg-zinc-800" />

      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
        {_.map(columns, (col, colIndex) => (
          <div key={colIndex} className="grid grid-cols-1 gap-4">
            {_.map(col, (project) => (
              <ProjectCard key={project.id} data={project} hasReadMore={true} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
