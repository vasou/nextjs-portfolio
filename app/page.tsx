import Head from "next/head";
import Link from "next/link";
import Connect from "./components/Connect";
import ExperienceCard from "./components/ExperienceCard";
import CaseStudyCard from "./components/CaseStudyCard";
import caseStudyList from "./data/caseStudyList";
import experienceList from "./data/experienceList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vasu Narayanasamy",
  description:
    "Experienced UX/UI designer. I craft outstanding and inclusive digital journeys for online platforms.",
};

export default function Home() {
  return (
    <>
      <div className="h-[51.5px]"></div>
      <div className="content-wrap">
        <div className="col-span-2">
          <article className="content">
            <section>
              <h2 className="page-section-heading">{`I’m`}</h2>
              <p className="pb-2">
                John doe, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vel eius, doloribus maxime incidunt architecto doloremque
                accusamus veniam nulla, quasi tempora est id labore amet odit
                autem laborum mollitia voluptas quae? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rerum, alias omnis architecto fuga
                itaque esse ipsa eius placeat incidunt eveniet sapiente tempore,
                suscipit hic labore officiis unde quibusdam. Facere, est?
              </p>
              <div className="mb-6">
                <Link href={"/about-me"} className="link-page">
                  Read about me
                  <span></span>
                </Link>
              </div>
              <div className="h-16"></div>
              <h2 className="page-section-heading">Experience</h2>
              {experienceList.slice(0, 1).map((item, i) => (
                <ExperienceCard
                  key={i}
                  year={item.year}
                  role={item.role}
                  companyName={item.companyName}
                  experience={true}
                >
                  <p className="pb-3">{item.content}</p>
                  <div className="skill-wrap">
                    {item.tags.map((tags, t) => (
                      <span className="skill-tags" key={t}>
                        <p>{tags}</p>
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href={"/experience"} className="link-page">
                      Read more about my experience
                      <span></span>
                    </Link>
                  </div>
                </ExperienceCard>
              ))}
              <div className="h-16"></div>
              <h2 className="page-section-heading">Case studies</h2>
              {caseStudyList.map((item, i) => (
                <CaseStudyCard
                  key={i}
                  name={item.name}
                  link={item.link}
                  image={item.image}
                >
                  <p className="pb-3 reset-link">{item.content}</p>
                  <div className="skill-wrap">
                    {item.tags.map((tags, t) => (
                      <span className="skill-tags" key={t}>
                        <p>{tags}</p>
                      </span>
                    ))}
                  </div>
                </CaseStudyCard>
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
