'use client';

import { EmploymentType, ExperiencesInterface } from "@/app/experiences/page";
import { Card } from "../card";
import Modal from "../modal";
import { useState } from "react";
import { DateRange, calculateDuration } from "@/utils/Helper/calculateDuration";
import dayjs from "dayjs";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  data: ExperiencesInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const [hasModal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!hasModal);
  };

  const renderDate = () => {
    const { start, end } = data;
    return !end ? "On Going" : `${dayjs(start).format("DD MMM YYYY")} - ${dayjs(end).format("DD MMM YYYY")}`;
  };

  console.log('data -> ', data);

  const dateRange: DateRange = {
    start: data?.start || null,
    end: data?.end || null,
  };

  return (
    <>
      <Card>
        <article className="flex flex-col justify-between w-full h-full p-4 md:p-8">
          <div className="flex flex-col">
            <div>
              <img src={`/assets/company/${data?.file}`} className="grayscale brightness-[5] min-h-min mb-2 hidden" alt="" loading="lazy" width={50} />
              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                {data?.name || "-"}
              </h2>
            </div>
            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
              {data?.description || "-"}
            </p>
          </div>

          <p className="cursor-pointer text-zinc-200 hover:text-zinc-50 lg:block" onClick={modalToggle}>
            Read more <span aria-hidden="true">&rarr;</span>
          </p>
        </article>
      </Card>

      <Modal isOpen={hasModal} onClose={modalToggle} title="Details" hasFooter={false}>
        <div>
          <label className="text-sm">Name</label>
          <Link href={data.link} target="_blank" rel="noopener noreferrer">
            <h1 className="text-base leading-relaxed font-semibold flex items-center gap-2">
              {data.name}<ExternalLink size={20} style={{ paddingBottom: 2 }} />
            </h1>
          </Link>
        </div>

        <div>
          <label className="text-sm">Description</label>
          <p className="text-base leading-relaxed font-semibold">
            {data.description}
          </p>
        </div>

        <div>
          <label className="text-sm">Role</label>
          <p className="text-base leading-relaxed font-semibold">
            {data.position.toString().replaceAll(',', ', ')}
          </p>
        </div>

        <div>
          <label className="text-sm">Employment Info</label>
          <p className="text-base leading-relaxed font-semibold mb-2">
            {calculateDuration(dateRange)}
            &nbsp;
            <sub>{renderDate()}</sub>
          </p>

          <div className="bg-zinc-900 p-4 rounded-xl w-fit">
            <ul className="employment__type">
              {data.employment_type.map((item:EmploymentType) => (
                <li className="text-sm leading-relaxed">
                  {item.status} ・ {item.location_type} ・ {calculateDuration({ start: item.start, end: item.end })}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExperienceCard;
