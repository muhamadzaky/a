"use client"

import React, { useEffect, useState } from "react";
import { ProjectProps } from "./ProjectList";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProjectDetail: React.FC = () => {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState<ProjectProps>({
    id: null,
    company: "",
    name: "",
    start: "",
    end: "",
    tech: "",
    description: "",
    task: "",
    jobdesk: "",
    file: "",
    link: "",
    confidential: false,
    featured: false,
  });
  const [imgError, setImgError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_API_URL}projects`);
      const responseData = response.data;
      const filteredData = responseData.filter((dt: ProjectProps) => dt.id === +id);

      console.log('📘 -> ', responseData, filteredData, id);
      setData(filteredData[0]);
    } catch (e) {
      console.log('📕 -> ', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
            {data.name}
          </h1>
          <p className="mt-2 text-xs leading-8 text-zinc-300">
            {data.company}
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            {data.description}
          </p>
        </div>
      </div>

      <div className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        {data.link && <Link href={data.link || '#'} rel="noopener noreferer" target="_blank">
          <img 
            src={`/assets/images/${data.id}.png`}
            className={`rounded-md border border-zinc-200${imgError ? ' hidden' : ''}`}
            alt={data.name || ""}
            loading="lazy"
            onError={() => setImgError(true)}
            onLoad={() => setImgError(false)}
          />
        </Link>}

        {data.link && 
          <Link 
            href={data.link || '#'} 
            rel="noopener noreferer" 
            target="_blank" 
            className="flex justify-center items-center text-zinc-300 no-underline"
          >
            {data.name} &rarr;
          </Link>
        }
      </div>
    </div>
  );
};

export default ProjectDetail;