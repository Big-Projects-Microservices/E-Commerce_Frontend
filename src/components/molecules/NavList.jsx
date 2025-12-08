import { Heading, Link } from "../atoms";

export default function NavList({ title, links, className = "" }) {
  return (
    <div className={`mb-5 ${className}`}>
      <Heading text={title} />
      <ul className="list-none p-0 m-0">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <Link text={link.text} url={link.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
