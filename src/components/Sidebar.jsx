import { profile } from "../data";
import avatar from "../images/avatar.png";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const sections = [
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
];

export default function Sidebar({ active }) {
  const { name, title, links } = profile;

  return (
    <aside className="sidebar">
      <img className="avatar" src={avatar} alt={name} />
      <h1 className="name">{name}</h1>
      <p className="title">{title}</p>

      <nav className="nav">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? "active" : undefined}>
            {s.label}
          </a>
        ))}
      </nav>

      <div className="socials">
        <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={`mailto:${links.email}`} aria-label="Email">
          <MailIcon />
        </a>
      </div>
    </aside>
  );
}
