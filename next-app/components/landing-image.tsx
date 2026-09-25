import Image from "next/image";
import landingImage from "@/public/landing.jpg";

export default function LandingImage() {
  return (
    <div className="flex-1 relative min-h-75 aspect-video">
      <Image
        src={landingImage}
        alt="Isaac Clark"
        className="object-cover h-full"
        loading="eager"
        preload
        width={4032}
        height={3024}
      />
    </div>
  );
}
