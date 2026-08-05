import datasphirLogo from "@/assets/partners/datasphir.png";
import orcidLogo from "@/assets/partners/orcid.png";
import dataciteLogo from "@/assets/partners/datacite.png";
import wacrenLogo from "@/assets/partners/wacren.png";

const partners = [
  { name: "Datasphir", logo: datasphirLogo },
  { name: "ORCID", logo: orcidLogo },
  { name: "DataCite", logo: dataciteLogo },
  { name: "WACREN", logo: wacrenLogo },
];

// Repeated many times over so the strip always fills the viewport width (even
// ultra-wide screens) with no gap, then duplicated once more so the looped
// animation (translateX 0 -> -50%) has no seam or blank stretch.
const REPEAT_COUNT = 8;
const repeated = Array.from({ length: REPEAT_COUNT }, () => partners).flat();
const track = [...repeated, ...repeated];

export function PartnersStrip() {
  return (
    <section className="border-b border-border bg-brand-tint py-12">
      <p className="eyebrow text-center">Our Partners</p>
      <div className="relative mt-6 overflow-hidden">
        <div
          className="animate-partners-marquee flex w-max items-center gap-16"
          style={{ animationDuration: `${REPEAT_COUNT * 8}s` }}
        >
          {track.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex shrink-0 items-center gap-3">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
