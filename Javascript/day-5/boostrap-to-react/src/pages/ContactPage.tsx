import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { contactCards, homeMedia } from '../content';

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Talk to the team"
        description="The contact page keeps the form-first flow from the template and wraps it in a reusable React layout."
        image={homeMedia.contactImage}
        actions={
          <a className="button" href="#contact-form">
            Send a message
          </a>
        }
      />

      <section className="app-shell section-block" id="contact-form">
        <SectionHeading
          title="Send a message"
          description="Replace the old jQuery map toggle with a simple, accessible React contact form and map block."
        />
        <div className="contact-layout">
          <form className="contact-card contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <div className="contact-actions">
              <button type="submit">Send</button>
              <a className="button-outline" href="#map">
                Map
              </a>
            </div>
          </form>

          <div className="grid-3" id="map">
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

        <div className="map-card" style={{ marginTop: '1rem' }}>
          <iframe
            title="Prefix map"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
