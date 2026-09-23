import { FC } from "react";
import { ImageType } from "./image-viewer";
import Project from "./project";
import ReactIcon from "./technology-icons/react-icon";
import NextIcon from "./technology-icons/next-icon";
import FirebaseIcon from "./technology-icons/firebase-icon";
import TSIcon from "./technology-icons/ts-icon";
import JestIcon from "./technology-icons/jest-icon";
import NodeIcon from "./technology-icons/node-icon";

export type Project = {
  name: string;
  description: string;
  images: [ImageType, ...ImageType[]];
  technologyIcons: FC[];
};

const PROJECTS = [
  {
    name: "Barbershop Booking Application & Website",
    description:
      "I am currently working with a barbering business to develop a full-stack mobile booking application using Expo, React Native and Firebase.",
    images: [
      {
        src: "/project-images/jabs/home.PNG",
        alt: "Home Screen",
      },
      { src: "/project-images/jabs/home2.PNG", alt: "Home Screen 2" },
      {
        src: "/project-images/jabs/appointments.PNG",
        alt: "Appointments Screen",
      },
      {
        src: "/project-images/jabs/multi-apps.PNG",
        alt: "Appointments Screen - Multiple Appointments",
      },
      {
        src: "/project-images/jabs/book-app1.PNG",
        alt: "Book Appointment Screen - Select Service",
      },
      {
        src: "/project-images/jabs/book-app2.png",
        alt: "Book Appointment Screen - Select Date",
      },
      {
        src: "/project-images/jabs/book-app3.PNG",
        alt: "Book Appointment Screen - Select Barber",
      },
      {
        src: "/project-images/jabs/book-app4.PNG",
        alt: "Book Appointment Screen - Select Time",
      },
      {
        src: "/project-images/jabs/book-app5.PNG",
        alt: "Book Appointment Screen - Confirm Appointment",
      },
      {
        src: "/project-images/jabs/app-request-rec.PNG",
        alt: "Book Appointment Screen - Request Received",
      },
      {
        src: "/project-images/jabs/profile.PNG",
        alt: "Profile Screen",
      },
      {
        src: "/project-images/jabs/multi-schedule.PNG",
        alt: "Admin Schedule Screen - Multiple Schedules",
      },
      {
        src: "/project-images/jabs/multi-schedule2.PNG",
        alt: "Admin Schedule Screen - Multiple Schedules 2",
      },
      {
        src: "/project-images/jabs/single-schedule.PNG",
        alt: "Admin Schedule Screen - Single Schedule",
      },
      {
        src: "/project-images/jabs/barber-view-schedules.PNG",
        alt: "Admin Schedule Screen - Manage Schedules",
      },
      {
        src: "/project-images/jabs/admin-app.PNG",
        alt: "Admin Appointment View Screen",
      },
      {
        src: "/project-images/jabs/admin-pending.PNG",
        alt: "Admin Pending Appointments Screen",
      },
      {
        src: "/project-images/jabs/create-user-app.PNG",
        alt: "Admin Create Appointment Screen",
      },
      {
        src: "/project-images/jabs/create-break.PNG",
        alt: "Admin Create Break Screen",
      },
      {
        src: "/project-images/jabs/services.PNG",
        alt: "Admin Services Screen",
      },
      {
        src: "/project-images/jabs/users.PNG",
        alt: "Admin Users Screen",
      },
      {
        src: "/project-images/jabs/email-service.PNG",
        alt: "Admin Email Service Screen",
      },
      {
        src: "/project-images/jabs/email-job.PNG",
        alt: "Admin Email Job Screen - Details",
      },
      {
        src: "/project-images/jabs/email-job-recipients.PNG",
        alt: "Admin Email Job Screen - Recipients",
      },
    ],
    technologyIcons: [
      TSIcon,
      ReactIcon,
      NextIcon,
      FirebaseIcon,
      NodeIcon,
      JestIcon,
    ],
  },
] as const satisfies Project[];

export default function Projects() {
  return (
    <div id="projects" className="p-2.5 flex flex-col gap-10">
      {(() => {
        return PROJECTS.map((p, i) => <Project key={i} project={p} />);
      })()}
    </div>
  );
}
