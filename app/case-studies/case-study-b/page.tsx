import GoBack from "@/app/components/GoBack";
import { Metadata } from "next";
import Image from "next/image";
import ImagePlaceHolder from "../../../public/image-placeholder.jpg";
import FlowImage from "../../../public/overview-flow.svg";

export const metadata: Metadata = {
  title: "Case studies - B",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati iure repudiandae veniam accusamus! Dolores doloremque officia est ex neque, expedita adipisci facere eum dicta nihil dolorem, ut autem suscipit aspernatur.",
};

const pageDetails = [
  {
    name: "Case studies - B",
    link: "https://www.website.com/",
    tags: [
      "User research",
      "User stories",
      "Acceptance Criteria",
      "User flow",
      "UI designs",
    ],
  },
];

export default function CaseStudyB() {
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
                Our client, based in Liverpool, Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est nulla dolor esse laborum
                aliquid rerum earum molestias natus atque, ducimus, eius qui
                laboriosam non dolorum iure architecto eveniet voluptatum
                voluptates
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">The Approach</h2>
              <p className="description">
                To address this multifaceted challenge, Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Est nulla dolor esse laborum
                aliquid rerum earum molestias natus atque, ducimus, eius qui
                laboriosam non dolorum iure architecto eveniet voluptatum
                voluptates
              </p>
              <ul className="clear-list">
                <li>Role A - Children</li>
                <li>Role B - Child’s Parent</li>
                <li>Role C - Doctors</li>
                <li>Role D - Doctors with additional powers</li>
                <li>Role E - Portal administrator</li>
              </ul>
              <p className="description">{`In navigating this project, I followed: User Research -> User Flow -> User Stories & Acceptance Criteria -> UI Design`}</p>
              <div className="userflow-wrap overflow-visible max_md:overflow-x-auto">
                <Image
                  src={FlowImage}
                  alt="Presenting an overview of the inception of my design journey in this project through a visually engaging flow chart."
                  className="mb-4"
                ></Image>
              </div>
              <p className="description">
                Subsequently, extensive bi-weekly meetings with the client lorem
                ipsum dolor sit amet consectetur adipisicing elit. Est nulla
                dolor esse laborum aliquid rerum earum molestias natus atque,
                ducimus, eius qui laboriosam non dolorum iure architecto eveniet
                voluptatum voluptates
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">User Flow</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nulla dolor esse laborum aliquid rerum earum molestias natus
                atque, ducimus, eius qui laboriosam non dolorum iure architecto
                eveniet voluptatum voluptates
              </p>
              <ul className="clear-list dotted-list">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Est nulla dolor esse laborum aliquid rerum earum molestias
                  natus atque, ducimus, eius qui laboriosam non dolorum iure
                  architecto eveniet voluptatum voluptates
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Est nulla dolor esse laborum aliquid rerum earum molestias
                  natus atque, ducimus, eius qui laboriosam non dolorum iure
                  architecto eveniet voluptatum voluptates
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </li>
                <li>
                  Est nulla dolor esse laborum aliquid rerum earum molestias
                  natus atque, ducimus, eius qui laboriosam non dolorum iure
                  architecto eveniet voluptatum voluptates
                </li>
              </ul>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">
                User Stories and Acceptance Criteria
              </h2>
              <p className="description">
                Outlined below are a few examples of user stories and acceptance
                criteria, providing a tangible understanding of the
                functionalities and expectations.
              </p>
              <div className="casestudy-grid-cards-wrap">
                <div className="card">
                  <h3 className="page-sub-heading">User story 1.1</h3>
                  <p className="description">
                    Est nulla dolor esse laborum aliquid rerum earum molestias
                    natus atque, ducimus, eius qui laboriosam non dolorum iure
                    architecto eveniet voluptatum voluptates
                  </p>
                </div>
                <div className="card">
                  <h3 className="page-sub-heading">Acceptance criteria</h3>
                  <ul className="clear-list numbered-list">
                    <li>Ducimus, eius qui laboriosam non dolorum iure</li>
                    <li>
                      Est nulla dolor esse laborum aliquid rerum earum molestias
                      natus atque
                    </li>
                    <li>Laborum aliquid rerum earum molestias natus atque</li>
                    <li>Ducimus, eius qui laboriosam non dolorum iure</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="page-sub-heading">User story 1.2</h3>
                  <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Totam voluptatum ex consequuntur adipisci iure aliquam modi
                    qui labore ipsam, amet suscipit sit, nam aperiam temporibus!
                    Ratione aspernatur possimus vel quam!
                  </p>
                </div>
                <div className="card">
                  <h3 className="page-sub-heading">Acceptance criteria</h3>
                  <ul className="clear-list numbered-list">
                    <li>Ducimus, eius qui laboriosam non dolorum iure</li>
                    <li>
                      Est nulla dolor esse laborum aliquid rerum earum molestias
                      natus atque
                    </li>
                    <li>Laborum aliquid rerum earum molestias natus atque</li>
                    <li>Ducimus, eius qui laboriosam non dolorum iure</li>
                    <li>
                      Est nulla dolor esse laborum aliquid rerum earum molestias
                      natus atque
                    </li>
                    <li>Laborum aliquid rerum earum molestias natus atque</li>
                  </ul>
                </div>
              </div>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">User Flow Screenshots</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                consectetur fugit. Totam voluptatum accusantium laborum dolores
                culpa? Laboriosam blanditiis rem voluptatum? Vitae optio
                sapiente culpa harum doloremque sit molestiae soluta.
              </p>
              <div className="userflow-wrap">
                <Image
                  src={ImagePlaceHolder}
                  alt="Health management system creating events userflow"
                ></Image>
              </div>
              <p className="image-support-text">
                You can easily navigate by scrolling either horizontally from
                left to right or vertically from top to bottom.
              </p>
              <div className="userflow-wrap h-[400px]">
                <Image
                  src={ImagePlaceHolder}
                  alt="Health management system resource settings"
                ></Image>
              </div>
              <p className="image-support-text">
                You can easily navigate by scrolling either horizontally from
                left to right or vertically from top to bottom.
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Visual design journey</h2>
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
                  Few words about above image as image caption.
                </p>
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
                <p className="image-support-text">
                  Few words about above image as image caption.
                </p>
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
                <p className="image-support-text">
                  Few words about above image as image caption.
                </p>
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
                <p className="image-support-text">
                  Few words about above image as image caption.
                </p>
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
                <p className="image-support-text">
                  Few words about above image as image caption.
                </p>
              </div>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Solutions</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, repellendus! Numquam, quisquam mollitia deserunt
                quos culpa velit dolorem illum qui quas architecto hic. Animi
                vero possimus numquam mollitia, obcaecati molestiae.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
