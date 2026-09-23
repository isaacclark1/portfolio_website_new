import Image from "next/image";
import landingImage from "@/public/landing.jpg";

export default function LandingImage() {
  return (
    <div className="flex-1 relative min-h-75 aspect-video">
      <Image
        src={landingImage}
        alt="Isaac Clark"
        className="object-cover"
        loading="eager"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        preload
      />
    </div>
  );
}
