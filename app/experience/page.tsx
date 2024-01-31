import Connect from "../components/Connect";
import ExperienceCard from "../components/ExperienceCard";
import GoBack from "../components/GoBack";
import experienceList from "../data/experienceList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vasu - Experience",
  description:
    "My journey in the realms of Design, Augmented Reality (AR), Virtual Reality (VR), and Development.",
};

export default function Experience() {
  return (
    <>
      <GoBack />
      <div className="content-wrap">
        <div className="col-span-2">
          <article className="content">
            <section>
              {/* Experience 1 */}
              {experienceList.map((item, i) => (
                <ExperienceCard
                  key={i}
                  year={item.year}
                  role={item.role}
                  companyName={item.companyName}
                  experience={true}
                >
                  <p className="pb-3">{item.content}</p>
                  {item.content2 && <p className="pb-3">{item.content2}</p>}
                  <div className="skill-wrap">
                    {item.tags.map((tags, t) => (
                      <span className="skill-tags" key={t}>
                        <p>{tags}</p>
                      </span>
                    ))}
                  </div>
                </ExperienceCard>
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
