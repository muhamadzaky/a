import axios from "axios";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import ExperienceCard from "../components/experience-page/ExperienceCard";

export interface EmploymentType {
  location: string;
  location_type: string;
  status: string;
  start: string;
  end: string;
};

export interface ExperiencesInterface {
  id: 0,
  file: string,
  name: string,
  description: string,
  position: string[],
  start: string,
  end: string,
  link: string,
  show: boolean,
  employment_type: EmploymentType[]
};

interface EducationInterface {
  id: number;
  name: string;
  year: string;
  major?: string | null;
  link: string;
  show: boolean;
};

const ExperiencesPage = async () => {
  const experiences = await axios.get(`${process.env.NEXT_API_URL}experiences`);
  const educations = await axios.get(`${process.env.NEXT_API_URL}educations`);
  const experienceDatas = experiences.data.filter((dt:ExperiencesInterface) => dt.show);
  const educationDatas = educations.data.filter((dt:EducationInterface) => dt.show);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experiences
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 ">
          {experienceDatas.map((item:ExperiencesInterface) => (
            <ExperienceCard data={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {educationDatas.map((item:EducationInterface) => (
            <Card key={item.id}>
              <article className="flex flex-col w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {item?.name || "-"}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {`${item.major ? `${item.major} ・ ` : ''}${item.year}`}
                </p>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperiencesPage;