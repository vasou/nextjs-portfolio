import Link from "next/link";
import { ReactNode } from "react";

interface ProjectsProps {
  children: ReactNode;
  externalLink: string;
  projectName: string;
}

export default function ProjectCard({
  children,
  externalLink,
  projectName,
}: ProjectsProps) {
  return (
    <div className="project-card">
      <div className="project-card-head-wrap">
        <Link href={externalLink} className="project-link" target="_blank">
          <h2 className="page-sub-heading small remove-padding">
            {projectName}
          </h2>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8H12.6667V12.6667ZM9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2H9.33333Z" />
          </svg>
        </Link>
      </div>
      <>{children}</>
    </div>
  );
}