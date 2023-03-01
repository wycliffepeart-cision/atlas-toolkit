import {PropsWithChildren} from "react";

interface SectionPreviewProps {
  shouldCenter?: boolean
}

export function SectionPreview({children, shouldCenter}: PropsWithChildren<SectionPreviewProps>) {
  return (
    <div
      style={{
        gap: '1rem',
        padding: '2rem',
        display: 'flex',
        borderRadius: '6px',
        alignItems: 'center',
        justifyContent: shouldCenter ? 'center' : "unset",
        border: '1px solid #e3e7eb',
      }}
    >
      {children}
    </div>
  )
}