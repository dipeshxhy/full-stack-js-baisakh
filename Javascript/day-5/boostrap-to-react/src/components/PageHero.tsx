import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  actions?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, image, actions }: PageHeroProps) {
  return (
    <section className="page-hero app-shell">
      <div className="page-hero__inner">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? <div className="page-actions">{actions}</div> : null}
        </div>

        <div className="page-hero__image">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
}
