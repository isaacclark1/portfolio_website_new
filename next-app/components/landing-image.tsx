import Image from "next/image";
import landingImage from "@/public/landing.jpg";

export default function LandingImage() {
  return (
    <div className="flex-1 relative min-h-75 aspect-video">
      <Image
        src={landingImage}
        alt="Isaac Clark"
        priority
        className="object-cover"
        loading="eager"
        placeholder="blur"
        fill
      />
    </div>
  );
}
