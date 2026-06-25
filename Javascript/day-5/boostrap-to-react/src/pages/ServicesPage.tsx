import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { homeMedia, serviceCards } from '../content';

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Featured categories with marketplace intent"
        description="The services layout is now a composable React grid that can scale without breaking the page structure."
        image={homeMedia.contactImage}
        actions={
          <a className="button" href="/contact">
            Contact us
          </a>
        }
      />

      <section className="app-shell section-block">
        <SectionHeading
          title="Categories"
          description="These cards mirror the original icon grid, with the same content presented in a modern responsive layout."
        />
        <div className="grid-4">
          {serviceCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <div className="feature-card__icon">
                <img src={card.image} alt="" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
