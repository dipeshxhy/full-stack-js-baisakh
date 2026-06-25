import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { homeMedia, pricingPlans } from '../content';

export default function PricingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Pricing"
        title="Choose a plan that matches your posting needs"
        description="The pricing cards preserve the template's original values and presentation, just with better reuse."
        image={homeMedia.bannerImage}
        actions={
          <a className="button" href="/contact">
            Talk to sales
          </a>
        }
      />

      <section className="app-shell section-block">
        <SectionHeading
          title="Find a price plan"
          description="The middle tier is still highlighted, but the whole block now lives in a reusable React page."
        />
        <div className="grid-3">
          {pricingPlans.map((plan) => (
            <article
              className={`price-card ${plan.featured ? 'price-card--featured' : ''}`}
              key={plan.name}
            >
              <span className="badge">{plan.name}</span>
              <div className="price-card__price">
                <span>$</span>
                <strong>{plan.price}</strong>
                <span>/month</span>
              </div>
              <p>{plan.note}</p>
              <a className="button-outline card-action" href="/contact">
                Read more
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
