import { ReactNode } from "react";

interface ExpCardProps {
  experience: boolean;
  year?: string;
  role?: string;
  companyName?: string;
  children?: ReactNode;
  tags?: ReactNode;
  degree?: string;
  place?: string;
}

export default function ExperienceCard({
  experience,
  year,
  role,
  companyName,
  children,
  tags,

  degree,
  place,
}: ExpCardProps) {
  return (
    <div className={`exp-card ${!experience ? "edu" : ""}`}>
      <div className="w-[160px] flex-shrink-0">
        <p className="year">{year}</p>
      </div>
      {experience && (
        <>
          <div className="exp-blk-content">
            <h2 className="page-sub-heading small">
              <span>{role}</span>
              {companyName && (
                <>
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2" r="2" fill="#E2E8F0" />
                  </svg>
                  <span>{companyName}</span>
                </>
              )}
            </h2>
            <>{children}</>
          </div>
        </>
      )}
      {!experience && (
        <>
          <div className="edu-blk-content">
            <h2 className="page-sub-heading small">{degree}</h2>
            <p>{place}</p>
          </div>
        </>
      )}
    </div>
  );
}
