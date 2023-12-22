import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTelegramLine,
  RiLinkedinLine,
  RiTwitterXLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.youtube.com/@asadullohe"} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine size={24} />
      </Link>
      <Link href={"https://www.instagram.com/asadullohe_"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine size={24} />
      </Link>
      <Link href={"https://www.facebook.com/asadullo.husanboyev"} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine size={24} />
      </Link>
      <Link href={"https://t.me/asadullohe"} className="hover:text-accent transition-all duration-300">
        <RiTelegramLine size={24} />
      </Link>
      <Link href={"https://www.linkedin.com/in/asadullohe"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine size={24} />
      </Link>
      <Link href={"https://twitter.com/asadullohe"} className="hover:text-accent transition-all duration-300">
        <RiTwitterXLine size={24} />
      </Link>
    </div>
  );
};

export default Socials;
