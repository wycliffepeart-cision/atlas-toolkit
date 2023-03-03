import { PropsWithChildren } from 'react';

export interface SectionProps {
  title?: string;
  description?: string;
}

export function Section({ title, description, children }: PropsWithChildren<SectionProps>) {
  return (
    <div className='example-section'>
      <atlas-typography variant="h2">
          {title}
      </atlas-typography>
      <p>{description}</p>
      {children}
    </div>
  );
}