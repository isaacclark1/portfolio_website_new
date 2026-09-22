import Introduction from "@/components/introduction";
import LandingImage from "@/components/landing-image";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-2.5">
      <section className="flex min-h-screen">
        <Introduction />
        <LandingImage />
      </section>

      <section>
        <div className="p-10">
          <h2 className="text-3xl">Projects</h2>
        </div>

        <Projects />
      </section>
    </main>
  );
}
