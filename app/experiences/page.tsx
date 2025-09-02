import axios from 'axios';
import ExperienceCard from '../components/shared/experience-page/ExperienceCard';
import { Card } from '../components';
import _ from 'lodash';

const ExperiencesPage = async () => {
  const experiences = await axios.get(`${process.env.NEXT_API_URL}experiences`);
  const educations = await axios.get(`${process.env.NEXT_API_URL}educations`);

  const experienceDatas = _.filter(experiences.data, (dt: Model.Experience) => dt.show);
  const educationDatas = _.filter(_.reverse(educations.data), (dt: Model.Education) => dt.show);

  return (
    <div className="px-6 py-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 lg:py-32">
      {/* Header */}
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Experiences</h2>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        {_.map(experienceDatas, (item: Model.Experience) => (
          <ExperienceCard key={item.id || item.name} data={item} />
        ))}
      </div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        {_.map(educationDatas, (item: Model.Education) => (
          <Card key={item.id}>
            <article className="flex flex-col w-full h-full p-4 md:p-8">
              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                {item?.name || '-'}
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {`${item.major ? `${item.major} ・ ` : ''}${item.year}`}
              </p>
            </article>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;
