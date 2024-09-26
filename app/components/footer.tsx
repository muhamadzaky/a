import dayjs from "dayjs";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-xs flex items-center">
      © {dayjs().year()} • Made with &nbsp;<Heart size="16" />&nbsp; by Muhamad Zaky;
    </footer>
  );
};

export default Footer;