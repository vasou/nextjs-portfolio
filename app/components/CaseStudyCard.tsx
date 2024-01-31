import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CaseStudyProps {
  image?: any;
  name?: string;
  link: string;
  children?: ReactNode;
  tags?: ReactNode;
}

export default function CaseStudyCard({
  image,
  name,
  link,
  children,
  tags,
}: CaseStudyProps) {
  return (
    <div className="exp-card no-underline">
      <div className="w-[160px] flex-shrink-0">
        <div className="casestudy-thumb-img-wrap">
          <Image src={image} alt={`${name}`}></Image>
        </div>
      </div>
      <div className="exp-blk-content">
        <h2 className="page-sub-heading small">{name}</h2>
        <>{children}</>
        <div className="h-3"></div>
        <Link href={link} className="link-page">
          View case study
          <span></span>
        </Link>
      </div>
    </div>
  );
}
