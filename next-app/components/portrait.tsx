import Image from "next/image";
import portrait from "@/public/isaac-clark.jpg";

export default function Portrait() {
  return (
    <div className="flex-1 relative min-h-75 aspect-video">
      <Image
        src={portrait}
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
