import { LogoMark } from "./Icons";

export function Brand({ size = 30, href = "#top" }: { size?: number; href?: string }) {
  return (
    <a className="brand" href={href} aria-label="Azanchi — home">
      <LogoMark size={size} />
      <span className="brand__word">Azanchi</span>
    </a>
  );
}
