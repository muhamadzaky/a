import { RiHeart3Line } from '@remixicon/react';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <footer className="text-xs flex items-center">
      © {dayjs().year()} • Made with &nbsp;
      <RiHeart3Line size={16} />
      &nbsp; by Muhamad Zaky;
    </footer>
  );
};

export default Footer;
