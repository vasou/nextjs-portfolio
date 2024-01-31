import GoBack from "@/app/components/GoBack";
import { Metadata } from "next";
import Image from "next/image";
import ImagePlaceHolder from "../../../public/image-placeholder.jpg";

export const metadata: Metadata = {
  title: "Case studies - A",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati iure repudiandae veniam accusamus! Dolores doloremque officia est ex neque, expedita adipisci facere eum dicta nihil dolorem, ut autem suscipit aspernatur.",
};

const pageDetails = [
  {
    name: "Case studies - A",
    link: "https://www.website.com/",
    tags: [
      "User research",
      "Interview",
      "User persona",
      "User flow",
      "User stories",
      "Acceptance Criteria",
    ],
  },
];

const RoleAImagesList = [
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
  {
    image: ImagePlaceHolder,
    altContent: "Here is a image placeholder description",
  },
];

const RoleBImagesList = [
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

const RoleCImagesList = [
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
  {
    image: ImagePlaceHolder,
    altContent: "Here is a image placeholder description",
  },
];

export default function CaseStudyA() {
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
                eveniet voluptatum voluptates?
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">The Challenge</h2>
              <p className="description">
                Despite having visited the client in US, lorem ipsum dolor sit
                amet consectetur adipisicing elit. Est nulla dolor esse laborum
                aliquid rerum earum molestias natus atque, ducimus, eius qui
                laboriosam non dolorum iure architecto eveniet voluptatum
                voluptates?
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">The Approach</h2>
              <p className="description">
                I initiated conversations with our team, lorem ipsum dolor sit
                amet consectetur adipisicing elit. Est nulla dolor esse laborum
                aliquid rerum earum molestias natus atque, ducimus, eius qui
                laboriosam non dolorum iure architecto eveniet voluptatum
                voluptates?
              </p>
              <p className="description">
                Subsequently, extensive bi-weekly meetings with the client lorem
                ipsum dolor sit amet consectetur adipisicing elit. Est nulla
                dolor esse laborum aliquid rerum earum molestias natus atque,
                ducimus, eius qui laboriosam non dolorum iure architecto eveniet
                voluptatum voluptates?
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">The Research Journey</h2>
              <h3 className="page-sub-heading">Personas</h3>
              <div className="casestudy-grid-cards-wrap">
                <div className="card">
                  <h3 className="page-sub-heading">User A</h3>
                  <ul className="clear-list dotted-list">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Experience: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Characteristics: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Needs/Goals: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="page-sub-heading">User B</h3>
                  <ul className="clear-list dotted-list">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Experience: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Characteristics: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Needs/Goals: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="page-sub-heading">User C</h3>
                  <ul className="clear-list dotted-list">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Experience: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Characteristics: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Needs/Goals: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="page-sub-heading">User D</h3>
                  <ul className="clear-list dotted-list">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Experience: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Characteristics: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                    <li>
                      Needs/Goals: Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Problems identified</h2>
              <ul className="clear-list numbered-list">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus odio numquam omnis, quia laborum voluptatum
                  consectetur suscipit magnam
                </li>
                <li>
                  Ducimus odio numquam omnis, quia laborum voluptatum
                  consectetur suscipit magnam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus odio numquam omnis, quia laborum voluptatum
                  consectetur suscipit magnam
                </li>
                <li>
                  Ducimus odio numquam omnis, quia laborum voluptatum
                  consectetur suscipit magnam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus odio numquam omnis, quia laborum voluptatum
                  consectetur suscipit magnam
                </li>
                <li>
                  Ducimus odio numquam omnis, quia laborum voluptatum
                  consectetur suscipit magnam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus odio numquam omnis, quia laborum voluptatum
                  consectetur suscipit magnam
                </li>
                <li>
                  Ducimus odio numquam omnis, quia laborum voluptatum
                  consectetur suscipit magnam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </li>
              </ul>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">Role Finalisation</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi ea numquam ad ducimus temporibus sapiente, doloremque
                velit voluptatibus illum iste, officiis aperiam? Enim natus
                veniam est fugiat nostrum laboriosam sequi!
              </p>
            </section>
            {/* New section */}
            <section className="casestudy-section">
              <h2 className="page-section-heading">User Flows</h2>
              <h3 className="page-sub-heading">Role A</h3>
              <div>
                {RoleAImagesList.map((item, i) => (
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
              </div>
              <h3 className="page-sub-heading">Role B</h3>
              <div>
                {RoleBImagesList.map((item, i) => (
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
              </div>
              <h3 className="page-sub-heading">Role C</h3>
              <div>
                {RoleCImagesList.map((item, i) => (
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
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
