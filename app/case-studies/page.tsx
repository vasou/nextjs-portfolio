import CaseStudyCard from "../components/CaseStudyCard";
import Connect from "../components/Connect";
import GoBack from "../components/GoBack";
import caseStudyList from "../data/caseStudyList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, dignissimos veritatis fuga facilis deleniti perspiciatis consequuntur nobis, non ex mollitia, praesentium voluptatibus. Esse, recusandae rem quasi ducimus nisi cum.",
};

export default function CaseStudies() {
  return (
    <>
      <GoBack />
      <div className="content-wrap">
        <div className="col-span-2">
          <article className="content">
            <section>
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
