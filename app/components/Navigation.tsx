import Link from "next/link";
import NavLink from "./NavLink";

const NavLinks = {};

interface NavigationProps {
  showProfileName?: boolean;
}

export default function Navigation({ showProfileName }: NavigationProps) {
  return (
    <div className="nav-wrap">
      <div className="profile">
        {!showProfileName && (
          <>
            <h1 className="name">John Doe</h1>
            <h2 className="designation">Experienced UX/UI Designer</h2>
            <p className="description">
              I craft outstanding and inclusive digital journeys for online
              platforms.
            </p>
          </>
        )}
      </div>
      <div>
        <ul className="nav-list">
          <li>
            <NavLink href={"/"} name="Home" />
          </li>
          <li>
            <NavLink href={"/about-me"} name="About me" />
          </li>
          <li>
            <NavLink href={"/experience"} name="Experience" />
          </li>
          <li>
            <NavLink href={"/case-studies"} name="Case studies" />
          </li>
          <li>
            <NavLink href={"/projects"} name="Projects" />
          </li>
        </ul>
      </div>
    </div>
  );
}
