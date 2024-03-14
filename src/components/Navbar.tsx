import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-navbar_color min-h-[50px] text-logo_color flex items-center justify-between p-4">
      <a href="/" className="text-xl">
        Valorant Info
      </a>
      <div className="flex gap-4">
        <a href="#" className="text-white">
          <FaGithub />
        </a>
        <a href="#" className="text-white">
          <FaDiscord />
        </a>
        <a href="#" className="text-white">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}
