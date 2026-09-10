import Introduction from "@/components/introduction";
import Portrait from "@/components/portrait";

export default function Home() {
  return (
    <main className="flex flex-col gap-2.5">
      <section className="flex min-h-screen">
        <Introduction />
        <Portrait />
      </section>

      <section>
        <h2>Projects</h2>
      </section>
    </main>
  );
}
