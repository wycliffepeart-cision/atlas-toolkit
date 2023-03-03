import { PropsWithChildren } from 'react';
import { SectionProps } from './Section';

export interface SectionPageProps {}

export function SectionPage({ title, description, children }: PropsWithChildren<SectionPageProps & SectionProps>) {
  return (
    <>
      <h1 style={{ border: '0', fontSize: '36px' }}>{title}</h1>
      <p>{description}</p>
      <br />
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>{children}</div>
    </>
  );
}