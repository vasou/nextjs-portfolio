import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-blk">
        <div className="max_sm:text-center">
          <p className="pb-2 max_sm:pb-1">
            I built this website with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="footer-link"
            >
              NextJs
              <span></span>
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="footer-link"
            >
              TailwindCSS
              <span></span>
            </a>
            .
          </p>
          <p>©2023 - 2024. All rights reserved.</p>
        </div>
        <div className="text-right max_sm:text-center">
          <p className="pb-2 max_sm:pb-1">To know more about my projects</p>
          <Link href={"#connect"} className="link-page">
            Get in touch
            <span></span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
