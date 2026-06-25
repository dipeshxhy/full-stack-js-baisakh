import SectionHeading from '../components/SectionHeading';
import {
  adCards,
  contactCards,
  heroBadges,
  homeMedia,
  pricingPlans,
  serviceCards,
  testimonials,
} from '../content';

export default function HomePage() {
  return (
    <div>
      <section className="hero app-shell">
        <div className="section-block">
          <span className="eyebrow">Marketplace React conversion</span>
          <h1>Sell every old thing and buy new</h1>
          <p>
            A cleaner React build of the Prefix template with reusable components, responsive
            sections, and the same marketplace feel built into a proper structure.
          </p>
          <div className="hero__actions">
            <a className="button" href="/about">
              Read more
            </a>
            <a className="button-outline" href="/shop">
              Explore products
            </a>
          </div>
          <div className="hero__meta">
            {heroBadges.map((badge) => (
              <div className="chip" key={badge.label}>
                <span>{badge.label}</span>
                <strong>{badge.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <img src={homeMedia.bannerImage} alt="Marketplace illustration" />
        </div>
      </section>

      <section className="app-shell section-block search-panel">
        <div className="grid-3">
          <input type="text" placeholder="Enter keywords" />
          <select defaultValue="">
            <option value="" disabled>
              All categories
            </option>
            <option value="automotive">Automotive</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>
              Your location
            </option>
            <option value="kathmandu">Kathmandu</option>
            <option value="lalitpur">Lalitpur</option>
          </select>
        </div>
        <div className="card-actions">
          <button className="button" type="button">
            Search now
          </button>
        </div>
      </section>

      <section className="app-shell section-block">
        <SectionHeading
          eyebrow="Ads services"
          title="Built for marketplace categories"
          description="The original Bootstrap cards now live in a reusable React grid with cleaner spacing and clearer hierarchy."
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

      <section className="app-shell section-block">
        <SectionHeading
          eyebrow="Premium advertisement"
          title="Featured listings with strong visual focus"
          description="These cards are based on the carousel items from the template, adapted into a responsive card grid."
        />
        <div className="grid-3">
          {adCards.map((item) => (
            <article className="product-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <span className="badge" style={{ marginTop: '0.9rem' }}>
                Featured
              </span>
              <h3 style={{ marginTop: '0.8rem' }}>{item.title}</h3>
              <p>{item.price}</p>
              <div className="card-actions">
                <a className="button-soft" href="/contact">
                  Chat now
                </a>
                <a className="button-outline" href="/contact">
                  Call now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="app-shell split-layout">
        <div className="section-block">
          <span className="eyebrow">About us</span>
          <h2 className="section-title">Are you ready for posting your ads?</h2>
          <p>
            This section keeps the original visual rhythm but uses semantic React components so the
            content is easier to maintain and reuse.
          </p>
          <div className="page-actions">
            <a className="button" href="/about">
              Get started
            </a>
            <a className="button-outline" href="/pricing">
              Buy now
            </a>
          </div>
        </div>

        <div className="content-image">
          <img src={homeMedia.aboutImage} alt="About section illustration" />
        </div>
      </section>

      <section className="app-shell section-block">
        <SectionHeading
          eyebrow="Pricing"
          title="Find a price plan"
          description="The three-column pricing layout is preserved, but the implementation is now reusable and fully responsive."
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

      <section className="app-shell section-block">
        <SectionHeading
          eyebrow="Customers"
          title="What our customers say"
          description="A lightweight testimonial section replaces the carousel dependency while keeping the template language intact."
        />
        <div className="grid-2">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p>{testimonial.quote}</p>
              <div className="testimonial-card__profile">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="app-shell section-block">
        <SectionHeading
          eyebrow="Contact"
          title="Stay in touch"
          description="A compact contact section keeps the same form-first flow and can easily be extended later."
        />
        <div className="contact-layout">
          <form className="contact-card contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <div className="contact-actions">
              <button type="submit">Send</button>
              <a className="button-outline" href="/contact">
                Map
              </a>
            </div>
          </form>

          <div className="grid-3">
            {contactCards.map((item) => (
              <article className="contact-card" key={item.title}>
                <div className="contact-card__icon">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
