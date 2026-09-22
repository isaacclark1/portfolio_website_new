import Nav from "./nav";

export default function Introduction() {
  return (
    <div className="p-10 flex flex-col gap-5 justify-center flex-1">
      <h1 className="text-5xl">
        Hi, my name is <strong className="font-semibold">Isaac</strong>.
      </h1>
      <p>
        I am a software developer based in Haywards Heath, West Sussex, with a
        first-class honours degree in Computing & IT from the Open University. I
        have an interest in all areas of software development, with most of my
        experience in web development.
      </p>

      <Nav />
    </div>
  );
}
