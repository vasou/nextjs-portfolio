import Link from "next/link";
import Connect from "../components/Connect";
import GoBack from "../components/GoBack";
import ExperienceCard from "../components/ExperienceCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vasu",
  description:
    "I find joy in experimenting with my personal web development projects, crafting design solutions, and bringing them to life through programming languages that remain somewhat mysterious to the uninitiated.",
};

export default function AboutVasu() {
  return (
    <>
      <GoBack />
      <div className="content-wrap">
        <div className="col-span-2">
          <article className="content">
            <section>
              <h2 className="page-section-heading">{`I'm`}</h2>
              <p className="pb-2">
                John doe, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vel eius, doloribus maxime incidunt architecto doloremque
                accusamus veniam nulla, quasi tempora est id labore amet odit
                autem laborum mollitia voluptas quae?
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                eius, doloribus maxime incidunt architecto doloremque accusamus
                veniam nulla
              </p>
              <div className="mb-6">
                <Link href={"/experience"} className="link-page">
                  Read about my experience
                  <span></span>
                </Link>
              </div>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illo excepturi molestias numquam culpa tempore laboriosam ut
                suscipit vero ad, maiores totam tenetur inventore voluptatem
                aperiam, magnam qui repellendus neque.
              </p>
              <p className="pb-2">
                In my spare time, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nisi illo excepturi molestias numquam culpa
                tempore laboriosam ut suscipit vero ad, maiores totam tenetur
                inventore voluptatem aperiam, magnam qui repellendus neque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illo excepturi molestias numquam culpa tempore laboriosam ut
                suscipit vero ad, maiores totam tenetur inventore voluptatem
                aperiam, magnam qui repellendus neque.
              </p>
              <div className="mb-6">
                <Link href={"/projects"} className="link-page">
                  List of my projects
                  <span></span>
                </Link>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illo excepturi molestias numquam culpa tempore laboriosam ut
                suscipit vero ad, maiores totam tenetur inventore voluptatem
                aperiam, magnam qui repellendus neque.
              </p>
            </section>
            <div className=" h-16"></div>
            <section>
              <h2 className="page-section-heading">Skills</h2>
              <div className="skills-rows">
                <div>
                  <h3 className="page-sub-heading">Design</h3>
                  <ul className="skills-list">
                    <li>Visual design</li>
                    <li>User-Centric design</li>
                    <li>User research</li>
                    <li>User journey & flow</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Design systems</li>
                    <li>WCAG accessibility</li>
                  </ul>
                </div>
                <div>
                  <h3 className="page-sub-heading">Tools</h3>
                  <ul className="skills-list">
                    <li>Figma</li>
                    <li>Adobe Xd</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe After Effects</li>
                    <li>Adobe Premiere Pro</li>
                  </ul>
                </div>
                <div>
                  <h3 className="page-sub-heading">Development</h3>
                  <ul className="skills-list">
                    <li>ReactJs</li>
                    <li>NextJs</li>
                    <li>TailwindCSS</li>
                    <li>Internationalisation</li>
                    <li>WCAG accessibility</li>
                    <li>AR & VR apps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="page-sub-heading">Others</h3>
                  <ul className="skills-list">
                    <li>WordPress</li>
                    <li>Webflow</li>
                    <li>Motion Graphics</li>
                    <li>Unity 3D</li>
                    <li>3D modelling</li>
                    <li>Photography</li>
                  </ul>
                </div>
              </div>
            </section>
            <div className="h-16"></div>
            <section>
              <h2 className="page-section-heading">Education</h2>
              <ExperienceCard
                year="2000 - 2003"
                experience={false}
                degree="Bachelor of Science in Computer Science, Stanford University"
                place="Stanford, California"
              />
              <ExperienceCard
                year="2003 - 2008"
                experience={false}
                degree="Master of Business Administration, Harvard Business School"
                place="Boston, Massachusetts"
              />
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
