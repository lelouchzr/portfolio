type ProjectIconProps = React.ComponentProps<"svg">

function ProjectIcon({ children, ...props }: ProjectIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export function SentinelProjectIcon(props: ProjectIconProps) {
  return (
    <ProjectIcon {...props}>
      <path d="m12 3 8 3v6c0 4-3.5 7-8 9-4.5-2-8-5-8-9V6Z" />
      <path d="m8 9 3 3-3 3m5 0h3" />
    </ProjectIcon>
  )
}

export function FrameclueProjectIcon(props: ProjectIconProps) {
  return (
    <ProjectIcon {...props}>
      <path d="M20 10V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5" />
      <path d="m9 7 5 4-5 4Z" />
      <circle cx="17" cy="17" r="3" />
      <path d="m19.2 19.2 2.3 2.3" />
    </ProjectIcon>
  )
}

export function NanotekspiceProjectIcon(props: ProjectIconProps) {
  return (
    <ProjectIcon {...props}>
      <rect x="7" y="4" width="10" height="16" rx="2" />
      <path d="M4 8h3m-3 4h3m-3 4h3m10-8h3m-3 4h3m-3 4h3" />
      <path d="M10 9h1a3 3 0 0 1 0 6h-1Zm-3 1h3m-3 4h3m4-2h3" />
    </ProjectIcon>
  )
}

export function RaytracerProjectIcon(props: ProjectIconProps) {
  return (
    <ProjectIcon {...props}>
      <path d="m11 3 10 18H2Z" />
      <path d="M2 10h5l15 5m-7-3 7-3m-6 7 6 5" />
    </ProjectIcon>
  )
}

export function ArcadeProjectIcon(props: ProjectIconProps) {
  return (
    <ProjectIcon {...props}>
      <circle cx="9" cy="5" r="3" />
      <path d="M9 8v7m-3 0h6" />
      <rect x="3" y="15" width="18" height="6" rx="2" />
      <path d="M16 18h.01m2.5 0h.01" />
    </ProjectIcon>
  )
}

export function OrielProjectIcon(props: ProjectIconProps) {
  return (
    <ProjectIcon {...props}>
      <path d="M8 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-4M8 21h8m-4-3v3" />
      <rect x="11" y="3" width="10" height="7" rx="1.5" />
      <path d="M14 6.5h4M6 14h5" />
    </ProjectIcon>
  )
}

export function HandwritingProjectIcon(props: ProjectIconProps) {
  return (
    <ProjectIcon {...props}>
      <path d="M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m13-5v4a1 1 0 0 1-1 1h-4" />
      <path d="m7.5 16 3.7-8h1.6l3.7 8M9 13h6" />
    </ProjectIcon>
  )
}

export function MnistCalculatorProjectIcon(props: ProjectIconProps) {
  return (
    <ProjectIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 8.5c0-2 4-2 4 0 0 1.5-4 2-4 4h4m4-5h3m-1.5-1.5v3M7 17h4m-2-2v4m6-3h3m-3 3h3" />
    </ProjectIcon>
  )
}
