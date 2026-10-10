import { experience, timelineStart } from "../data";

const Points = ({ points }) => (
  <ul>
    {points.map((point) => (
      <li key={point}>{point}</li>
    ))}
  </ul>
);

export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-heading">Resume</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline-entry">
            <span className="timeline-year">{job.year}</span>
            <article className="card">
              {job.role && <p className="role">{job.role}</p>}
              <h3>{job.company}</h3>
              <p className="stack">{job.stack}</p>
              {job.points && <Points points={job.points} />}
              {job.groups
                ?.filter((group) => group.points.length > 0)
                .map((group) => (
                  <div key={group.heading} className="group">
                    <h4>{group.heading}</h4>
                    <Points points={group.points} />
                  </div>
                ))}
            </article>
          </li>
        ))}
        <li className="timeline-entry">
          <span className="timeline-year">{timelineStart}</span>
        </li>
      </ol>
    </section>
  );
}
