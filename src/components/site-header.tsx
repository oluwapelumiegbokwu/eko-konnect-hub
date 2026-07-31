import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/eko-konnect-logo.png";
import { primaryNav, contact, type NavNode } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 6"
      aria-hidden="true"
      className={`h-[6px] w-[10px] shrink-0 transition-transform duration-150 ${className}`}
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

function DesktopNavItem({ node, depth = 0 }: { node: NavNode; depth?: number }) {
  // Hover-intent and click-intent are tracked separately (visible = either one is true).
  // Toggling a single boolean on click breaks mouse users too: moving the pointer onto the
  // chevron fires onMouseEnter before the click lands, so a naive toggle would immediately
  // re-close a menu that hover had just opened. Touch devices skip hover entirely and rely
  // solely on clickOpen.
  const [hoverOpen, setHoverOpen] = useState(false);
  const [clickOpen, setClickOpen] = useState(false);
  const open = hoverOpen || clickOpen;
  const itemRef = useRef<HTMLLIElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hasChildren = Boolean(node.children?.length);

  const closeAll = () => {
    setHoverOpen(false);
    setClickOpen(false);
  };

  // Close on tap/click outside so the flyout doesn't stay stuck open on touch devices.
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openOnHover = () => {
    clearTimeout(closeTimer.current);
    setHoverOpen(true);
  };
  // Only clears hover-intent: a menu opened by click/tap must stay open until the user
  // explicitly closes it (click again, Escape, outside click, or navigating away).
  const closeHoverSoon = () => {
    closeTimer.current = setTimeout(() => setHoverOpen(false), 120);
  };

  return (
    <li
      ref={itemRef}
      className={cn("group relative", depth > 0 && "w-full")}
      onMouseEnter={hasChildren ? openOnHover : undefined}
      onMouseLeave={hasChildren ? closeHoverSoon : undefined}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          closeAll();
          toggleRef.current?.focus();
        }
      }}
    >
      <div className={cn("flex items-stretch", depth > 0 && "justify-between")}>
        <Link
          to={node.to}
          className={
            depth === 0
              ? "flex items-center gap-2 border-b-2 border-transparent px-4 py-6 text-[0.92rem] font-medium tracking-wide text-foreground transition-colors group-hover:border-gold group-hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
              : "flex-1 px-5 py-2.5 text-[0.9rem] leading-snug text-foreground transition-colors hover:bg-brand-tint hover:text-brand focus-visible:relative focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
          }
          activeProps={{ className: depth === 0 ? "border-brand text-brand" : "text-brand" }}
          onClick={closeAll}
        >
          {node.label}
        </Link>
        {hasChildren ? (
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-haspopup="true"
            aria-label={`${open ? "Close" : "Open"} ${node.label} submenu`}
            onClick={(event) => {
              event.stopPropagation();
              clearTimeout(closeTimer.current);
              setClickOpen((value) => !value);
            }}
            className={cn(
              "flex min-w-[2.5rem] items-center justify-center text-foreground transition-colors hover:text-brand focus-visible:relative focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand",
              depth === 0 &&
                "border-b-2 border-transparent group-hover:border-gold group-hover:text-brand",
            )}
          >
            <Chevron className={depth === 0 ? (open ? "rotate-180" : "") : "-rotate-90"} />
          </button>
        ) : null}
      </div>
      {hasChildren ? (
        <ul
          aria-label={`${node.label} submenu`}
          className={cn(
            "absolute z-50 border border-border bg-card py-2 transition-all duration-150",
            depth === 0
              ? "left-0 top-full w-72 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.5)]"
              : "left-full top-0 -mt-2 w-64 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.45)]",
            depth === 0
              ? open
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-1 opacity-0"
              : open
                ? "visible translate-x-0 opacity-100"
                : "invisible translate-x-1 opacity-0",
          )}
        >
          {node.children!.map((child) => (
            <DesktopNavItem key={child.to} node={child} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function MobileNode({ node, depth = 0 }: { node: NavNode; depth?: number }) {
  return (
    <li>
      <Link
        to={node.to}
        className="block border-b border-border py-3 text-[0.95rem] text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
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
          <Link
            to="/"
            className="shrink-0 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label="Eko-Konnect home"
          >
            <img src={logo} alt="Eko-Konnect" width={321} height={123} className="h-11 w-auto" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-stretch">
              {primaryNav.map((node) => (
                <DesktopNavItem key={node.to} node={node} />
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="py-5 text-sm font-medium tracking-wide text-brand lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
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
