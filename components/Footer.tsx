"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/config";
import { useLang } from "@/lib/i18n/LangProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang, dict } = useLang();

  return (
    <footer className="bg-ink text-mist">
      <div className="container-xl grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/70">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={siteConfig.social.facebook}
              aria-label={dict.footer.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-mist/20 p-2.5 transition hover:border-gold hover:text-gold"
            >
              <Facebook size={18} />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label={dict.footer.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-mist/20 p-2.5 transition hover:border-gold hover:text-gold"
            >
              <Instagram size={18} />
            </a>
            <a
              href={siteConfig.social.youtube}
              aria-label={dict.footer.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-mist/20 p-2.5 transition hover:border-gold hover:text-gold"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            {dict.footer.navTitle}
          </h3>
          <ul className="space-y-3 text-sm text-mist/80">
            {dict.footer.links.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-gold" href={`/${lang}${link.href}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            {dict.footer.legalTitle}
          </h3>
          <ul className="space-y-3 text-sm text-mist/80">
            {dict.footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-gold" href={`/${lang}${link.href}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-mist/80 hover:text-gold"
          >
            <Mail size={16} /> {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="border-t border-mist/10 py-6">
        <p className="container-xl text-center text-xs text-mist/50">
          {dict.footer.rights(year, siteConfig.name)}
        </p>
      </div>
    </footer>
  );
}
