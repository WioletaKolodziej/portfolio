import React from "react";
import { FaGithub, FaBehance, FaLinkedin } from "react-icons/fa";

interface HeaderTileProps {
  title: string;
  subtitle: string;
}

const HeaderTile: React.FC<HeaderTileProps> = ({ title, subtitle }) => {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-semibold text-center">{title}</h1>
      <h2 className="text-2xl mt-2 font-light opacity-90 text-center">{subtitle}</h2>

      <div className="flex gap-6 mt-6 text-3xl justify-center">
        <a href="https://github.com/WioletaKolodziej" target="_blank"><FaGithub /></a>
        <a href="https://www.behance.net/uikolo" target="_blank"><FaBehance /></a>
        <a href="https://www.linkedin.com/in/wioleta-ko%C5%82odziej-%C5%BCmudzka-113113195/" target="_blank"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default HeaderTile;
