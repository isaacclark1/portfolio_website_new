import ImageViewer from "./image-viewer";
import { Project as ProjectType } from "./projects";

type ProjectProps = { project: ProjectType };

export default function Project({ project }: ProjectProps) {
  return (
    <article className="flex">
      <div className="flex-1 p-10 flex flex-col gap-5 justify-center">
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p>{project.description}</p>

        <h4 className="text-lg font-semibold">Technologies</h4>
        <div className="flex gap-5 flex-wrap">
          {project.technologyIcons.map((Icon, i) => (
            <Icon key={i} />
          ))}
        </div>
      </div>

      <ImageViewer images={project.images} />
    </article>
  );
}
