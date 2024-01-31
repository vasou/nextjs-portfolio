import Connect from "../components/Connect";
import GoBack from "../components/GoBack";
import ProjectCard from "../components/ProjectsCard";
import projectList from "../data/projectsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vasu - Projects",
  description:
    "Presenting a recent project that I take pride in showcasing here",
};

export default function Projects() {
  return (
    <>
      <GoBack />
      <div className="content-wrap">
        <div className="col-span-2">
          <article className="content">
            <section>
              <h2 className="page-section-heading">Other projects</h2>
              {projectList.map((item, i) => (
                <ProjectCard
                  key={i}
                  externalLink={item.link}
                  projectName={item.name}
                >
                  <div className="skill-wrap">
                    {item.tags.map((tags, k) => (
                      <div className="skill-tags" key={k}>
                        <span>{tags}</span>
                      </div>
                    ))}
                  </div>
                </ProjectCard>
              ))}
            </section>
          </article>
        </div>
        <div className="max_lg:order-first">
          <Connect />
        </div>
      </div>
    </>
  );
}
