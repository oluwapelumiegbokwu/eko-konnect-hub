const partners = ["Datasphir", "ORCID", "DataCite", "WACREN"];

// Duplicated so the track can loop seamlessly at the halfway point.
const track = [...partners, ...partners];

export function PartnersStrip() {
  return (
    <section className="border-b border-border bg-brand-tint py-12">
      <p className="eyebrow text-center">Our Partners</p>
      <div className="relative mt-6 overflow-hidden">
        <div className="animate-partners-marquee flex w-max items-center gap-16">
          {track.map((partner, index) => (
            <div key={`${partner}-${index}`} className="flex shrink-0 items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-brand text-sm font-bold text-primary-foreground">
                {partner.charAt(0)}
              </span>
              <span className="whitespace-nowrap text-lg font-semibold text-brand-deep/80">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
