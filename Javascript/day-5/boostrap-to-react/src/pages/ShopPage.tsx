import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { homeMedia, shopProducts } from '../content';

export default function ShopPage() {
  return (
    <div>
      <PageHero
        eyebrow="Shop"
        title="Browse listings in a more structured layout"
        description="The old carousel now becomes a clean product gallery that is simpler to scan and maintain."
        image={homeMedia.prefixImage}
        actions={
          <a className="button" href="/contact">
            Post an ad
          </a>
        }
      />

      <section className="app-shell section-block">
        <SectionHeading
          title="Premium advertisement"
          description="A gallery grid gives each item room to breathe and scales better than the original slider."
        />
        <div className="grid-3">
          {shopProducts.map((product) => (
            <article className="product-card" key={product.title}>
              <img src={product.image} alt={product.title} />
              <span className="badge" style={{ marginTop: '0.9rem' }}>
                {product.category}
              </span>
              <h3 style={{ marginTop: '0.8rem' }}>{product.title}</h3>
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
    </div>
  );
}
