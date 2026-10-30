import { useState } from "react";
import type { ComponentType, CSSProperties } from "react";
import { AppleLogo, Check, Download, LogoMark, WindowsLogo } from "./Icons";
import { DOWNLOADS, type DownloadId } from "../data/downloads";

type OS = "mac" | "windows" | "other";

type Build = {
  id: DownloadId;
  os: Exclude<OS, "other">;
  icon: ComponentType<{ size?: number }>;
  label: string;
  detail: string;
  format: string;
  href: string;
};

const BUILDS: Build[] = [
  {
    id: "mac-arm64",
    os: "mac",
    icon: AppleLogo,
    label: "macOS · Apple silicon",
    detail: "M1, M2, M3 or M4 · macOS 14+",
    format: "DMG",
    href: DOWNLOADS.macArm64,
  },
  {
    id: "mac-intel",
    os: "mac",
    icon: AppleLogo,
    label: "macOS · Intel",
    detail: "Intel Mac · macOS 14+",
    format: "DMG",
    href: DOWNLOADS.macIntel,
  },
  {
    id: "windows",
    os: "windows",
    icon: WindowsLogo,
    label: "Windows",
    detail: "Windows 10 or 11 · 64-bit",
    format: "EXE",
    href: DOWNLOADS.windows,
  },
];

function detectOS(): OS {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "windows";
  if (/Macintosh|Mac OS X/i.test(ua)) return "mac";
  return "other";
}

export function DownloadSection() {
  const [os] = useState<OS>(detectOS);

  const windowsBuild = BUILDS.find((build) => build.os === "windows")!;
  const macBuilds = BUILDS.filter((build) => build.os === "mac");
  const builds = os === "windows" ? [windowsBuild, ...macBuilds] : [...macBuilds, windowsBuild];

  const hint =
    os === "mac"
      ? "You’re on a Mac — choose the build that matches your chip."
      : os === "windows"
        ? "You’re on Windows — the 64-bit installer is first."
        : "Choose the build that matches your machine.";

  return (
    <section className="download" id="download">
      <div className="download__aura" aria-hidden="true" />
      <div className="download__rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container download__inner">
        <div className="download__copy" data-reveal>
          <span className="download__eyebrow">
            <LogoMark size={17} /> Get Azanchi
          </span>
          <h2 className="serif balance">
            The meeting ends.
            <br />
            The work is already done.
          </h2>
          <p>
            Azanchi runs on your Mac or Windows machine, inside the calls you already have. Pick your
            build below — free plan, 120 minutes a month, no card.
          </p>
          <div className="download__points">
            <span>
              <Check size={12} /> Free plan · 120 minutes a month
            </span>
            <span>
              <Check size={12} /> No bot joins the call
            </span>
            <span>
              <Check size={12} /> Your notes export as Markdown
            </span>
          </div>
        </div>

        <div
          className="download__card"
          data-reveal
          style={{ "--reveal-delay": "110ms" } as CSSProperties}
        >
          <div className="download__card-head">
            <h3>Download Azanchi</h3>
            <span className="chip chip--accent">Free plan</span>
          </div>
          <p className="download__card-sub">
            Choose the build for this machine. Sign in with Google when it opens.
          </p>

          <p className="download__hint">
            <span className="download__hint-dot" aria-hidden="true" />
            {hint}
          </p>

          <div className="download__options">
            {builds.map((build) => {
              const Icon = build.icon;
              const current = os !== "other" && build.os === os;
              return (
                <a
                  key={build.id}
                  className={`dl${current ? " is-current" : ""}`}
                  href={build.href}
                  download
                  rel="noopener"
                  aria-label={`Download Azanchi for ${build.label.replace(" · ", " ")}, ${build.format}`}
                >
                  <span className="dl__icon">
                    <Icon size={18} />
                  </span>
                  <span className="dl__text">
                    <b>{build.label}</b>
                    <span>{build.detail}</span>
                  </span>
                  <span className="dl__format mono">{build.format}</span>
                  <span className="dl__arrow">
                    <Download size={15} />
                  </span>
                </a>
              );
            })}
          </div>

          <p className="download__already">
            Version {DOWNLOADS.version} · Free plan, 120 minutes a month. Already using Azanchi?
            Sign in from the app.
          </p>

          <div className="download__rail">
            <span>VERSION {DOWNLOADS.version}</span>
            <span>macOS 14+ · Windows 10+</span>
            <span>SIGN IN WITH GOOGLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
