import { PropsWithChildren } from 'react';
import { SectionProps } from './Section';

export interface SectionPageProps {}

export function SectionPage({ title, description, children }: PropsWithChildren<SectionPageProps & SectionProps>) {
  return (
    <>
      <atlas-typography variant="h1">{title}</atlas-typography>
      <atlas-typography>{description}</atlas-typography>
      <br />
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>{children}</div>
    </>
  );
}