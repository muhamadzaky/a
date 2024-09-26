import axios from "axios";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

interface EmploymentType {
  location_type: string;
  status: string;
  start: string;
  end: string;
};

interface ExperiencesInterface {
  id: 0,
  file: string,
  name: string,
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

      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Experiences
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-10 sm:grid-cols-3 lg:gap-16">
          {experienceDatas.filter((dt:ExperiencesInterface) => dt.show).map((item:ExperiencesInterface) => (
            <Card key={item.id}>
              <article className="p-6 text-center flex flex-col items-center justify-center">
                <div className="flex items-center justify-center" style={{ width: 200, height: 200 }}>
                  <img src={`/assets/company/${item.file}`} className="grayscale brightness-[2.5]" alt="" loading="lazy" style={{ width: '100%' }} />
                </div>
                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">{item.name}</h2>
              </article>
            </Card>
          ))}
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800 my-10" />

        <div className={`grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-${educationDatas.length > 1 ? '2' : '1'} lg:gap-16 place-items-center`}>
          {educationDatas.map((item:EducationInterface) => (
            <Card key={item.id}>
              <article className="p-6 text-center">
                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">{item.name}</h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {`${item.major ? `${item.major} | ` : ''}${item.year}`}
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