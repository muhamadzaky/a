import { DateRange, calculateDuration } from "@/utils/Helper/calculateDuration";
import { Card } from "../card";
import { ProjectProps } from "./ProjectList"
import Link from "next/link";

type Props = {
  data?: ProjectProps,
  hasReadMore: boolean
};

const ProjectCard: React.FC<Props> = ({ data, hasReadMore }) => {
  const dateRange: DateRange = { 
    start: data?.start || null,
    end: data?.end || null 
  };

  return (
    <Card>
      <article className="flex flex-col justify-between w-full h-full p-4 md:p-8">
        <div>
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-zinc-100">
              {data?.start ? (
                <time dateTime={new Date(data?.start).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                  }).format(new Date(data.start))}
                </time>
              ) : (
                <span>SOON</span>
              )}
            </div>
            <span className="text-zinc-500 text-xs flex items-center gap-1">
              {calculateDuration(dateRange)}
            </span>
          </div>

          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
          >
            {data?.name || "-"}
          </h2>
          <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
            {data?.description || "-"}
          </p>
        </div>
        
        {hasReadMore && (
          <Link 
            href={`/projects/${data?.id || '#'}`} 
            // target="_blank" 
            // rel="noopener noreferer"
          >
            <p className="text-zinc-200 hover:text-zinc-50 lg:block">
              Read more <span aria-hidden="true">&rarr;</span>
            </p>
          </Link>
        )}
{/*         
        {hasReadMore && <a href={data?.link || '#'} target="_blank" rel="noopener noreferer">
          <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
            Read more <span aria-hidden="true">&rarr;</span>
          </p>
        </a>} */}
      </article>
    </Card>
  )
};

export default ProjectCard;