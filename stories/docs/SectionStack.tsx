import {PropsWithChildren} from "react";

export interface SectionStackProps {
  gap?: number | string;
  direction?: string;

}

export function SectionStack({gap, direction, children}: PropsWithChildren<SectionStackProps>) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'end' }}>{children}</div>
  )
}