import { Link } from "@tanstack/react-router";
import { contact, primaryNav } from "@/lib/site-nav";

const serviceLinks = primaryNav.find((n) => n.to === "/services")?.children ?? [];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-4 border-gold bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg text-primary-foreground">Eko-Konnect</h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            A cluster of the Nigerian Research and Education Network, connecting institutions
            across Lagos and beyond to trusted digital research infrastructure.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-gold">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            {serviceLinks.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="transition-colors hover:text-gold">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-gold">Network</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li>
              <Link to="/about" className="transition-colors hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/about/board-of-trustees" className="transition-colors hover:text-gold">
                Board of Trustees
              </Link>
            </li>
            <li>
              <Link to="/news" className="transition-colors hover:text-gold">
                News
              </Link>
            </li>
            <li>
              <Link to="/events" className="transition-colors hover:text-gold">
                Events
              </Link>
            </li>
            <li>
              <Link to="/community" className="transition-colors hover:text-gold">
                Community
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-gold">Contact</h3>
          <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-primary-foreground/75">
            <p>{contact.address}</p>
            <p>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-gold">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Eko-Konnect Research and Education Initiative.</p>
          <p>A cluster of the Nigerian Research and Education Network (NgREN).</p>
        </div>
      </div>
    </footer>
  );
}
