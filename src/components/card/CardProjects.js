import Helper from '@utils/Helper';
import { RiBuilding2Line } from 'react-icons/ri';

const CardProjects = ({ data, onClick }) => {
  return (
    <div className="d-flex flex-column card-item cursor-pointer" onClick={onClick}>
      <div className="image-wrapper">
        {data?.file ? (
          <img src={`/assets/images/projects/${data?.file}`} alt={data?.name} />
        ) : (
          <RiBuilding2Line />
        )}
      </div>
      <div className="d-flex flex-column">
        <span>{Helper.decreaseString(data?.name, 60)}</span>
        <span>{data?.company}</span>
      </div>
    </div>
  );
};

export default CardProjects;
