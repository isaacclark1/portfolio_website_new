"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

export type ImageType = {
  src: string;
  alt: string;
};

type ImageViewerProps = {
  images: [ImageType, ...ImageType[]];
};

export default function ImageViewer({ images }: ImageViewerProps) {
  const numImages = useMemo(() => images.length, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = useMemo(
    () => images[currentIndex],
    [images, currentIndex],
  );

  const handleLeftClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numImages) % numImages);
  }, [numImages]);

  const handleRightClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
  }, [numImages]);

  return (
    <div className="flex-1 flex flex-col items-center gap-2.5">
      <div className="relative min-h-160 w-full">
        <button
          type="button"
          onClick={handleLeftClick}
          className="absolute left-0 h-full w-20 flex items-center justify-center hover:cursor-pointer z-10"
        >
          <ChevronLeftIcon size="10rem" />
        </button>
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          loading="lazy"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <button
          type="button"
          onClick={handleRightClick}
          className="absolute right-0 h-full w-20 flex items-center justify-center hover:cursor-pointer z-10"
        >
          <ChevronRightIcon size="10rem" />
        </button>
      </div>

      <span className="block text-sm font-semibold">
        {currentIndex + 1} / {numImages}
      </span>
    </div>
  );
}
