import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/eko-konnect-logo.png";
import { primaryNav, contact, type NavNode } from "@/lib/site-nav";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 6"
      aria-hidden="true"
      className={`h-[6px] w-[10px] shrink-0 ${className}`}
    >
      <path
        d="M1 1l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

function SubMenu({ items, nested = false }: { items: NavNode[]; nested?: boolean }) {
  return (
    <ul
      className={
        nested
          ? "invisible absolute left-full top-0 -mt-2 w-64 translate-x-1 border border-border bg-card py-2 opacity-0 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.45)] transition-all duration-150 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100"
          : "invisible absolute left-0 top-full z-50 w-72 translate-y-1 border border-border bg-card py-2 opacity-0 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.5)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      }
    >
      {items.map((item) => (
        <li key={item.to} className="group/sub relative">
          <Link
            to={item.to}
            className="flex items-center justify-between gap-3 px-5 py-2.5 text-[0.9rem] leading-snug text-foreground transition-colors hover:bg-brand-tint hover:text-brand"
            activeProps={{ className: "text-brand" }}
          >
            <span>{item.label}</span>
            {item.children ? <Chevron className="-rotate-90" /> : null}
          </Link>
          {item.children ? <SubMenu items={item.children} nested /> : null}
        </li>
      ))}
    </ul>
  );
}

function MobileNode({ node, depth = 0 }: { node: NavNode; depth?: number }) {
  return (
    <li>
      <Link
        to={node.to}
        className="block border-b border-border py-3 text-[0.95rem] text-foreground"
        style={{ paddingLeft: `${depth * 1}rem` }}
        activeProps={{ className: "text-brand" }}
      >
        {node.label}
      </Link>
      {node.children ? (
        <ul>
          {node.children.map((child) => (
            <MobileNode key={child.to} node={child} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="hidden bg-brand-deep text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2 text-[0.78rem] tracking-wide">
          <p>{contact.address}</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-gold">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-gold">
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-stretch">
              {primaryNav.map((node) => (
                <li key={node.to} className="group relative">
                  <Link
                    to={node.to}
                    className="flex items-center gap-2 border-b-2 border-transparent px-4 py-6 text-[0.92rem] font-medium tracking-wide text-foreground transition-colors group-hover:border-gold group-hover:text-brand"
                    activeProps={{ className: "border-brand text-brand" }}
                  >
                    <span>{node.label}</span>
                    {node.children ? <Chevron /> : null}
                  </Link>
                  {node.children ? <SubMenu items={node.children} /> : null}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="py-5 text-sm font-medium tracking-wide text-brand lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>

          <Link to="/" className="shrink-0 py-4" aria-label="Eko-Konnect home">
            <img src={logo} alt="Eko-Konnect" width={321} height={123} className="h-11 w-auto" />
          </Link>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile"
          className="max-h-[70vh] overflow-y-auto border-b border-border bg-background px-6 pb-6 lg:hidden"
        >
          <ul>
            {primaryNav.map((node) => (
              <MobileNode key={node.to} node={node} />
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
