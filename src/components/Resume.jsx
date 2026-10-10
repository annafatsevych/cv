import { experience, timelineStart } from "../data";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-heading">Resume</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline-entry">
            <span className="timeline-year">{job.year}</span>
            <article className="card">
              <h3>{job.company}</h3>
              <p className="stack">{job.stack}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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
