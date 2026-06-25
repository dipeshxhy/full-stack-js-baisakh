import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { aboutHighlights, homeMedia } from '../content';

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Prefix"
        title="A marketplace template rebuilt in React"
        description="This page keeps the original about section and adds a clearer information architecture around it."
        image={homeMedia.aboutImage}
        actions={
          <>
            <a className="button" href="/contact">
              Get started
            </a>
            <a className="button-outline" href="/pricing">
              Buy now
            </a>
          </>
        }
      />

      <section className="app-shell section-block">
        <SectionHeading
          title="Why this structure works better"
          description="The original static markup has been split into reusable React surfaces so future changes stay localized."
        />
        <div className="grid-3">
          {aboutHighlights.map((item, index) => (
            <article className="feature-card" key={item}>
              <span className="badge">0{index + 1}</span>
              <h3>{item}</h3>
              <p>
                The page is now composed from shared components and data collections instead of a
                single HTML file.
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
