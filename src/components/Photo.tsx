import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { photos, type PhotoName } from "@/lib/site";

/**
 * A photography slot. Until the real photograph is in place the slot renders a
 * labelled placeholder naming the file to drop in and what it should show, so
 * the layout can be finished before the photography is. Registry: site.ts.
 *
 * Fills its container, so the parent must be `relative` with a set aspect.
 */
export default function Photo({
  name,
  sizes,
  priority = false,
  className = "",
  placeholderClassName = "",
}: {
  name: PhotoName;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Extra classes for the placeholder only, e.g. to clear an overlapping card. */
  placeholderClassName?: string;
}) {
  const photo = photos[name];

  if (!photo.ready) {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-petrol/25 bg-petrol-pale p-6 text-center ${className} ${placeholderClassName}`}
      >
        <ImageIcon className="h-7 w-7 text-petrol/50" aria-hidden="true" />
        <p className="max-w-xs text-sm font-medium text-petrol">
          {photo.brief}
        </p>
        <p className="font-mono text-xs text-petrol/60">
          {photo.src} · {photo.shape}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}

/** Whether a slot has a real photograph yet, for layouts that adapt. */
export function hasPhoto(name: PhotoName) {
  return photos[name].ready;
}
