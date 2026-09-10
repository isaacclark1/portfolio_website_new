import Link from "next/link";

export default function Nav() {
  const links = [
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
  ];

  return (
    <nav className="text-sm font-semibold flex gap-5">
      {links.map(({ name, href }, i) => (
        <Link key={i} href={href} className="hover:underline">
          {name}
        </Link>
      ))}
    </nav>
  );
}
