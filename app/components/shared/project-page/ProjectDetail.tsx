'use client';

import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import dayjs from 'dayjs';
import Flag from 'react-world-flags';
import { DateRange, calculateDuration } from '@/utils/Helper/calculateDuration';
import { Badge, Button, Modal, Spinner } from '../..';

const ProjectDetail: FC = () => {
  const params = useParams();
  const { id } = params;

  const [data, setData] = useState<Model.Project>({
    id: null,
    company: '',
    name: '',
    start: '',
    end: '',
    tech: [],
    description: '',
    task: '',
    jobdesk: '',
    file: '',
    link: '',
    confidential: false,
    featured: false,
    region: {
      numeric: '',
      name: '',
      alpha2: '',
      alpha3: ''
    }
  });

  const [imgError, setImgError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_API_URL}projects`);
      const responseData = response.data;
      const filteredData = responseData.filter((dt: Model.Project) => dt.id === +id);
      console.log('📘 -> ', responseData, filteredData, id);
      setData(filteredData[0]);
      setLoading(false);
    } catch (e) {
      console.log('📕 -> ', e);
      setLoading(false);
    }
  };

  const renderDate = () => {
    const { start, end } = data;
    return !end
      ? 'On Going'
      : `${dayjs(start).format('DD MMM YYYY')} - ${dayjs(end).format('DD MMM YYYY')}`;
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const dateRange: DateRange = {
    start: data?.start || null,
    end: data?.end || null
  };

  if (isLoading) {
    return (
      <div className="container mx-auto relative isolate overflow-hidden flex justify-center items-center h-dvh">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {data.name}
            </h1>
            <p className="mt-2 text-xs leading-8 text-zinc-300">{data.company}</p>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{data.description}</p>
          </div>
        </div>
        <div className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
          {data.link && (
            <Link href={data.link || '#'} rel="noopener noreferer" target="_blank">
              <img
                src={`/assets/images/${data.id}.png`}
                className={`rounded-md border border-zinc-200${imgError ? ' hidden' : ''}`}
                alt={data.name || ''}
                loading="lazy"
                onError={() => setImgError(true)}
                onLoad={() => setImgError(false)}
              />
            </Link>
          )}
          {data.link && (
            <Link
              href={data.link || '#'}
              rel="noopener noreferer"
              target="_blank"
              className="flex justify-center items-center text-zinc-300 no-underline">
              {data.name} &rarr;
            </Link>
          )}
          <div className="flex justify-center mt-5">
            <Button onClick={openModal} variant="ghost" outline>
              Details
            </Button>
          </div>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        toggle={() => setIsModalOpen(!isModalOpen)}
        title="Project Detail"
        className="text-white"
        footer={false}>
        <div className="flex flex-col gap-y-2">
          <div>
            <div className="flex justify-between items-start">
              <label className="text-sm">Name</label>
              <Flag
                code={data?.region?.alpha2 || ''}
                fallback={<span>&lt;Unknown Region&gt;</span>}
                width={20}
              />
            </div>
            <h1 className="text-base leading-relaxed font-semibold">{data.name}</h1>
          </div>
          <div>
            <label className="text-sm">Description</label>
            <p className="text-base leading-relaxed font-semibold">{data.description}</p>
          </div>
          <div>
            <label className="text-sm">Role</label>
            <p className="text-base leading-relaxed font-semibold">{data.jobdesk}</p>
          </div>
          <div>
            <label className="text-sm">Tech Stack</label>
            <div className="text-base leading-relaxed text-gray-500 flex flex-wrap gap-2 dark:text-gray-400">
              {data.tech?.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm">Duration</label>
            <p className="text-base leading-relaxed font-semibold">
              {calculateDuration(dateRange)}
              &nbsp;
              <sub>{renderDate()}</sub>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectDetail;
