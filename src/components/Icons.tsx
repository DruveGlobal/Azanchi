import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 18, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function Replay(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 5.5v5h5M4.4 10.3a8 8 0 1 1 .8 6.2" />
    </Icon>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" />
    </Icon>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4.5v14M6.5 13l5.5 5.5L17.5 13" />
    </Icon>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 9.5l6 6 6-6" />
    </Icon>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.5 6l6 6-6 6" />
    </Icon>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.5 6l-6 6 6 6" />
    </Icon>
  );
}

export function Check(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
    </Icon>
  );
}

export function X(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
    </Icon>
  );
}

export function Menu(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function Sun(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3.8" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </Icon>
  );
}

export function Moon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2Z" />
    </Icon>
  );
}

export function Play(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 5.5l10 6.5-10 6.5v-13Z" />
    </Icon>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5l1.75 4.9 4.9 1.75-4.9 1.75L12 16.8l-1.75-4.9-4.9-1.75 4.9-1.75L12 3.5Z" />
      <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </Icon>
  );
}

export function Mic(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5" />
    </Icon>
  );
}

export function Wave(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 12h1.5M8 7v10M12 3.5v17M16 8v8M19.5 12H21" />
    </Icon>
  );
}

export function Search(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </Icon>
  );
}

export function Slash(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.5 4.5l-5 15" />
    </Icon>
  );
}

export function Copy(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2.2" />
      <path d="M15.5 8.5v-2a2.2 2.2 0 0 0-2.2-2.2H5.7A2.2 2.2 0 0 0 3.5 6.5v7.6a2.2 2.2 0 0 0 2.2 2.2h2" />
    </Icon>
  );
}

export function Mail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
      <path d="M3.5 7.2l8.5 6 8.5-6" />
    </Icon>
  );
}

export function Lock(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.4" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
    </Icon>
  );
}

export function Shield(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2.8l7.5 3v5.4c0 4.4-3 7.6-7.5 9.2-4.5-1.6-7.5-4.8-7.5-9.2V5.8L12 2.8Z" />
      <path d="M8.8 11.8l2.2 2.2 4.2-4.4" />
    </Icon>
  );
}

export function Download(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5v11M7.5 10.5L12 15l4.5-4.5M4.5 19.5h15" />
    </Icon>
  );
}

export function Globe(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 12h17.6M12 3a15.5 15.5 0 0 1 0 18 15.5 15.5 0 0 1 0-18Z" />
    </Icon>
  );
}

export function Users(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 19.5a6 6 0 0 1 12 0M15.5 5.2a3.2 3.2 0 0 1 0 5.9M17.2 14.5a5.7 5.7 0 0 1 3.8 5" />
    </Icon>
  );
}

export function Video(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.8" y="5.5" width="12.4" height="13" rx="2.4" />
      <path d="M15.2 10.2l5.6-3.2v10l-5.6-3.2" />
    </Icon>
  );
}

export function Calendar(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.4" />
      <path d="M8 3v4M16 3v4M3.5 10.5h17" />
    </Icon>
  );
}

export function Card(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.6" />
      <path d="M2.5 9.5h19M6 14.5h3" />
    </Icon>
  );
}

export function Phone(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.6" />
      <path d="M10.5 18.5h3" />
    </Icon>
  );
}

export function Bank(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 9.5L12 4.5l8.5 5" />
      <path d="M5.5 9.5v8M18.5 9.5v8M9.5 9.5v8M14.5 9.5v8M3.5 19.5h17" />
    </Icon>
  );
}

export function Stop(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function ListIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 6.5h12M8 12h12M8 17.5h8" />
      <circle cx="4.2" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="4.2" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="4.2" cy="17.5" r="1" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function TranscriptIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 6h16M4 11h10M4 16h14M4 21h6" />
    </Icon>
  );
}

export function CheckSquare(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M7.5 12.2l3 3 6-6.4" />
    </Icon>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 8h6M16 8h4M4 16h4M14 16h6" />
      <circle cx="13" cy="8" r="2.4" />
      <circle cx="10" cy="16" r="2.4" />
    </Icon>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </Icon>
  );
}

export function NotesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 3.5h9l4 4v13H6a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 6 3.5Z" />
      <path d="M15 3.5v4h4M8.5 12h7M8.5 16h5" />
    </Icon>
  );
}

export function Clock(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </Icon>
  );
}

export function Zap(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 2.5L4.5 13.5H11l-1 8L19.5 10H13l1-7.5Z" />
    </Icon>
  );
}

export function Key(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="8" cy="8" r="4.5" />
      <path d="M11.2 11.2L21 21M17 17l2-2M14 14l2-2" />
    </Icon>
  );
}

export function NoBot(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3.5V7M8.5 12.5v1.5M15.5 12.5v1.5M2.5 2.5l19 19" />
    </Icon>
  );
}

export function AppleLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.36 12.72c-.02-2.02 1.65-2.99 1.73-3.04-.94-1.38-2.41-1.57-2.93-1.59-1.25-.13-2.44.73-3.07.73-.63 0-1.61-.71-2.65-.69-1.36.02-2.62.79-3.32 2.01-1.42 2.46-.36 6.1 1.02 8.1.68.98 1.48 2.08 2.54 2.04 1.02-.04 1.4-.66 2.63-.66 1.23 0 1.57.66 2.65.64 1.09-.02 1.79-1 2.46-1.99.77-1.13 1.09-2.23 1.11-2.29-.02-.01-2.13-.82-2.15-3.26ZM14.4 6.6c.56-.68.94-1.62.84-2.56-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.86 2.48.91.07 1.83-.46 2.39-1.14Z" />
    </svg>
  );
}

export function WindowsLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.4l8.1-1.1v7.2H3V5.4Zm9.1-1.2L21 3v8.5h-8.9V4.2ZM3 12.6h8.1v7.2L3 18.6v-6Zm9.1 0H21V21l-8.9-1.2v-7.2Z" />
    </svg>
  );
}

export function LogoMark({ size = 32, title = "Azanchi" }: { size?: number; title?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      role="img"
      aria-label={title}
      style={{ flex: "none" }}
    >
      <rect width="96" height="96" rx="22" fill="var(--mark-bg, var(--accent))" />
      <g fill="var(--mark-fg, oklch(98.5% 0.008 95))">
        <rect x="20" y="42" width="8" height="12" rx="4" />
        <rect x="32" y="28" width="8" height="40" rx="4" />
        <rect x="44" y="44" width="8" height="8" rx="4" />
        <rect x="56" y="28" width="8" height="40" rx="4" />
        <rect x="68" y="42" width="8" height="12" rx="4" />
      </g>
    </svg>
  );
}
