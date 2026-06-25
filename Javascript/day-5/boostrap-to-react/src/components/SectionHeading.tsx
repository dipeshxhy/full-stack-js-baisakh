import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="section-title">{title}</h2>
        <p>{description}</p>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
