/**
 * Desktop build locations.
 *
 * The defaults are same-origin so the page works when the installers are placed
 * in `public/downloads/` and shipped with the site. For a CDN or GitHub
 * Releases, either set VITE_DOWNLOAD_BASE_URL or override each file URL in
 * `.env` — see README.md and .env.example.
 */
const env = import.meta.env as Record<string, string | undefined>;

const version = env.VITE_APP_VERSION?.trim() || "0.1.0";
const defaultBase = `${import.meta.env.BASE_URL.replace(/\/+$/, "")}/downloads`;
const base = (env.VITE_DOWNLOAD_BASE_URL?.trim() || defaultBase).replace(/\/+$/, "");

const asset = (name: string) => `${base}/${name}`;

export const DOWNLOADS = {
  version,
  macArm64:
    env.VITE_DOWNLOAD_MAC_ARM64?.trim() || asset(`Azanchi-${version}-macos-arm64.dmg`),
  macIntel:
    env.VITE_DOWNLOAD_MAC_INTEL?.trim() || asset(`Azanchi-${version}-macos-x64.dmg`),
  windows:
    env.VITE_DOWNLOAD_WINDOWS?.trim() || asset(`Azanchi-${version}-windows-x64.exe`),
} as const;

export type DownloadId = "mac-arm64" | "mac-intel" | "windows";
