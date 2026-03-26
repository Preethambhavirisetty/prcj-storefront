import { useState } from 'react';

export default function ImageGallery({ images = [], name = '' }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="aspect-square overflow-hidden bg-obsidian-light">
        <img
          src={images[activeIdx].src}
          alt={images[activeIdx].alt || name}
          className="w-full h-full object-cover transition-opacity duration-300"
          key={activeIdx}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-16 h-16 overflow-hidden flex-shrink-0 border-2 transition-colors ${
                idx === activeIdx ? 'border-gold' : 'border-transparent hover:border-border'
              }`}
              aria-label={`View image ${idx + 1}`}
              aria-pressed={idx === activeIdx}
            >
              <img
                src={img.src}
                alt={img.alt || `${name} image ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
