import { FC } from "react";
import { ImageType } from "./image-viewer";
import Project from "./project";
import ReactIcon from "./technology-icons/react-icon";

export type Project = {
  name: string;
  description: string;
  images: [ImageType, ...ImageType[]];
  technologyIcons: FC[];
};

const PROJECTS = [
  {
    name: "Barbershop Booking Application & Website",
    description:
      "I am currently working with a barbering business to develop a full-stack mobile booking application using React Native and Firebase.",
    images: [
      {
        src: "/project-images/jabs/home.PNG",
        alt: "Home Screen",
      },
      { src: "/project-images/jabs/home2.PNG", alt: "Home Screen 2" },
    ],
    technologyIcons: [ReactIcon],
  },
] as const satisfies Project[];

export default function Projects() {
  return (
    <div id="projects" className="p-2.5 flex flex-col gap-10">
      {(() => {
        return PROJECTS.map((p, i) => <Project key={i} project={p} />);
      })()}
    </div>
  );
}
