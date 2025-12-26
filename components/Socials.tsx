import { Item } from "@radix-ui/react-select";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const social = [
  {
    icons: <FaGithub />,
    path: "https://github.com/00Saint00",
    label: "GitHub",
  },
  {
    icons: <FaLinkedin />,
    path: "https://www.linkedin.com/in/paul-otomewo-476142188/",
    label: "LinkedIn",
  },
];

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
