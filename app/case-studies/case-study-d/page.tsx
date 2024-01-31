import GoBack from "@/app/components/GoBack";
import { Metadata } from "next";
import Image from "next/image";
import ImagePlaceHolder from "../../../public/image-placeholder.jpg";
import FlowImage from "../../../public/overview-flow.svg";

export const metadata: Metadata = {
  title: "Case studies - D",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati iure repudiandae veniam accusamus! Dolores doloremque officia est ex neque, expedita adipisci facere eum dicta nihil dolorem, ut autem suscipit aspernatur.",
};

const pageDetails = [
  {
    name: "Case studies - D",
    link: "https://www.website.com/",
    tags: [
      "User research",
      "Paper sketches",
      "Wireframes",
      "UI designs",
      "Development",
      "WordPress",
    ],
  },
];

export default function CaseStudyD() {
  return (
    <>
      <GoBack />
      <div className="content-wrap">
        <div className="col-span-2">
          <article className="content">
            {/* New section */}
            <section className="casestudy-section">
              <h1 className="page-heading">
                {pageDetails.map((item, i) => (
                  <span key={i}>{item.name}</span>
                ))}
              </h1>
              <div className=" h-5"></div>
              {pageDetails.map((item, i) => (
                <div className="skill-wrap max-w-[430px]" key={i}>
                  {item.tags.map((list, l) => (
                    <span className="skill-tags" key={l}>
                      <p>{list}</p>
                    </span>
                  ))}
                </div>
              ))}
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Client Overview</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nulla dolor esse laborum aliquid rerum earum molestias natus
                atque, ducimus, eius qui laboriosam non dolorum iure architecto
                eveniet voluptatum voluptates? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est nulla dolor esse laborum
                aliquid rerum earum molestias natus atque, ducimus, eius qui
                laboriosam non dolorum iure architecto eveniet voluptatum
                voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Est nulla dolor esse laborum aliquid rerum earum molestias
                natus atque, ducimus, eius qui laboriosam non dolorum iure
                architecto eveniet voluptatum voluptates
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">The Challenge</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nulla dolor esse laborum aliquid rerum earum molestias natus
                atque, ducimus, eius qui laboriosam non dolorum iure architecto
                eveniet voluptatum voluptates? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est nulla dolor esse laborum
                aliquid rerum earum molestias natus atque, ducimus, eius qui
                laboriosam non dolorum iure architecto eveniet voluptatum
                voluptates?
              </p>
              <div>
                <Image
                  src={ImagePlaceHolder}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
                <p className="image-support-text">
                  {`Just an example of I am taking notes while discussing with the client`}
                </p>
              </div>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">The Approach</h2>
              <div>
                <Image
                  src={FlowImage}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              </div>
              <p className="description">
                Est nulla dolor esse laborum aliquid rerum earum molestias natus
                atque, ducimus, eius qui laboriosam non dolorum iure architecto
                eveniet voluptatum voluptates? Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
              <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                sapiente delectus exercitationem perferendis deserunt voluptatum
                inventore ex accusantium reiciendis recusandae. Optio veniam
                dolores facere sequi, totam minus architecto eum ipsum?
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Key Sections Planned</h2>
              <ul className="clear-list numbered-list">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Visual Design Journey</h2>
              <p className="description">Starting with paper sketches</p>
              <div>
                <Image
                  src={ImagePlaceHolder}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              </div>
              <div>
                <Image
                  src={ImagePlaceHolder}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              </div>
              <div>
                <Image
                  src={ImagePlaceHolder}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              </div>
              <p className="description">
                eius mollitia quisquam excepturi recusandae unde dolorum.
                Perspiciatis, ex, vero ab odit, unde maxime architecto nemo
                nesciunt ratione aliquid mollitia sed delectus!
              </p>
              <div>
                <Image
                  src={ImagePlaceHolder}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              </div>
              <p className="description">
                Few words about above image as image caption.
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Solution</h2>
              <p className="description">
                The result is a polished website with a well-thought-out
                structure that introduces Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Suscipit magni cupiditate
                exercitationem explicabo aperiam est accusamus sequi nihil
                pariatur illum, eligendi placeat, debitis libero. Nemo eligendi
                aperiam cumque iure impedit.
              </p>
              <div>
                <Image
                  src={ImagePlaceHolder}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              </div>
              <div>
                <Image
                  src={ImagePlaceHolder}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              </div>
              <div>
                <Image
                  src={ImagePlaceHolder}
                  alt=""
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              </div>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Development</h2>
              <p className="description">
                In addition to design, Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Eos, recusandae? Aliquam esse deserunt
                accusamus numquam quidem, maiores quisquam iusto quae voluptate
                fugiat id fuga ducimus. Rerum, molestiae voluptatibus. Facere,
                check{" "}
                <a
                  href="https://vandavazdecarvalho.com/"
                  target="_blank"
                  className="link-page"
                >
                  here
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
