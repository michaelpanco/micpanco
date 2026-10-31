"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Lightbox from "yet-another-react-lightbox";
import { Counter } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

export default function ProjectScreenshotGallery({
  screens,
  heading,
  description,
  projectName,
  eyebrow = "Mobile interface showcase",
  variant = "mobile",
}) {
  const trackRef = useRef(null);
  const headingId = useId();
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);

  const updateNavigation = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanGoBack(track.scrollLeft > 4);
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateNavigation();
    window.addEventListener("resize", updateNavigation);
    return () => window.removeEventListener("resize", updateNavigation);
  }, [updateNavigation]);

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".tomori-screen-card");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 18;
    track.scrollBy({ left: direction * ((card?.offsetWidth || track.clientWidth) + gap), behavior: "smooth" });
  };

  return (
    <section className="tomori-gallery-section" aria-labelledby={headingId}>
      <div className="site-shell">
        <div className="tomori-gallery-heading">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h2 id={headingId}>{heading}</h2>
            <p>{description}</p>
          </div>
          <div className="tomori-gallery-controls" aria-label={`${projectName} gallery navigation`}>
            <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label={`View previous ${projectName} screens`}>
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label={`View next ${projectName} screens`}>
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`tomori-gallery-track ${variant === "desktop" ? "project-gallery-desktop" : ""}`} ref={trackRef} onScroll={updateNavigation}>
          {screens.map((screen, index) => (
            <button
              className="tomori-screen-card"
              type="button"
              key={screen.src}
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open ${screen.title} screenshot ${index + 1} of ${screens.length}`}
            >
              <span className="tomori-screen-frame">
                <Image
                  src={screen.src}
                  alt={`${screen.title} — ${screen.description}`}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 700px) 82vw, (max-width: 920px) 38vw, 260px"
                  priority={index < 4}
                />
              </span>
              <span className="tomori-screen-caption">
                <strong>{screen.title}</strong>
                <small>{String(index + 1).padStart(2, "0")} / {screens.length}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={screens.map(({ src, title, width, height }) => ({ src, alt: `${title} screen`, width, height }))}
        plugins={[Counter]}
        counter={{ separator: " of " }}
        carousel={{ finite: true, imageFit: "contain" }}
        controller={{ closeOnBackdropClick: true }}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        styles={{ container: { backgroundColor: "rgba(8, 20, 29, 0.94)" } }}
      />
    </section>
  );
}
