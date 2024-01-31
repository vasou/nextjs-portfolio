import GoBack from "@/app/components/GoBack";
import { Metadata } from "next";
import Image from "next/image";
import ImagePlaceHolder from "../../../public/image-placeholder.jpg";

export const metadata: Metadata = {
  title: "Case studies - C",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati iure repudiandae veniam accusamus! Dolores doloremque officia est ex neque, expedita adipisci facere eum dicta nihil dolorem, ut autem suscipit aspernatur.",
};

const pageDetails = [
  {
    name: "Case studies - C",
    link: "https://www.website.com/",
    tags: ["User research", "UI design"],
  },
];

const ProjectFlowImageList = [
  {
    image: ImagePlaceHolder,
    altContent: "Here is a image placeholder description",
  },
  {
    image: ImagePlaceHolder,
    altContent: "Here is a image placeholder description",
  },
];

const ProjectDesignImageList = [
  {
    image: ImagePlaceHolder,
    altContent: "Here is a image placeholder description",
  },
  {
    image: ImagePlaceHolder,
    altContent: "Here is a image placeholder description",
  },
  {
    image: ImagePlaceHolder,
    altContent: "Here is a image placeholder description",
  },
  {
    image: ImagePlaceHolder,
    altContent: "Here is a image placeholder description",
  },
];

export default function CaseStudyC() {
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
                voluptates?
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">The Challenge</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nulla dolor esse laborum aliquid rerum earum molestias natus
                atque, ducimus, eius qui laboriosam non dolorum iure architecto
                eveniet voluptatum voluptates?
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">The Approach</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nulla dolor esse laborum aliquid rerum earum molestias natus
                atque, ducimus, eius qui laboriosam non dolorum iure architecto
                eveniet voluptatum voluptates?
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Key Points to Address</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nulla dolor esse laborum aliquid rerum earum molestias natus
                atque, ducimus, eius qui laboriosam non dolorum iure architecto
                eveniet voluptatum voluptates? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est nulla dolor esse laborum
                aliquid rerum earum molestias natus atque, ducimus, eius qui
                laboriosam non dolorum iure architecto eveniet voluptatum
                voluptates.
              </p>
              <ul className="clear-list numbered-list">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Est nulla dolor esse laborum aliquid rerum earum molestias.
                </li>
                <li>
                  Eius qui laboriosam non dolorum iure architecto eveniet
                  voluptatum voluptates.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Est nulla dolor esse laborum aliquid rerum earum molestias.
                </li>
                <li>
                  Eius qui laboriosam non dolorum iure architecto eveniet
                  voluptatum voluptates.
                </li>
              </ul>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">
                Required questions for this case study
              </h2>
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
              <p className="description">
                The next step involves defining each question type, and below, I
                have attached a few initial designs.
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">User Flow</h2>
              {ProjectFlowImageList.map((item, i) => (
                <Image
                  key={i}
                  src={item.image}
                  alt={item.altContent}
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              ))}
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Visual Design Journey</h2>
              {ProjectDesignImageList.map((item, i) => (
                <Image
                  key={i}
                  src={item.image}
                  alt={item.altContent}
                  className="content-image"
                  loading={"lazy"}
                  width="0"
                  height="0"
                  sizes="100vw"
                ></Image>
              ))}
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Proposed Solution</h2>
              <p className="description">
                Following our plan, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fuga debitis voluptatibus molestias.
                Perspiciatis, recusandae cupiditate! Maiores qui, perspiciatis
                animi, hic quo doloremque assumenda tempora dignissimos incidunt
                velit quae neque sit.
              </p>
              <Image
                src={ImagePlaceHolder}
                alt=""
                className="content-image"
                loading={"lazy"}
                width="0"
                height="0"
                sizes="100vw"
              ></Image>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
