import React from 'react'

interface HairFollicleIconProps {
  className?: string
  strokeWidth?: number
}

export function HairFollicleIcon({ className = "h-5 w-5", strokeWidth = 1.5 }: HairFollicleIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Folículo capilar - representação estilizada */}
      <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.3" />
      <path d="M12 11v8" />
      <path d="M9 14l3-3 3 3" />
      <path d="M8 6l2-2 2 2" />
      <path d="M16 6l2-2 2 2" />
      <path d="M6 8l-2 2 2 2" />
      <path d="M18 8l2 2-2 2" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  )
}
