import { PropsWithChildren } from 'react';

export interface SectionProps {
  title?: string;
  description?: string;
}

export function Section({ title, description, children }: PropsWithChildren<SectionProps>) {
  return (
    <div className='example-section'>
      <h2 style={{ border: '0' }}>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}