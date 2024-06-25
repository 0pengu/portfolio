import { Email } from "@/app/components/Button/Email";
import { GitHub } from "@/app/components/Button/GitHub";
import { LinkedIn } from "@/app/components/Button/LinkedIn";
import { Resume } from "@/app/components/Button/Resume";
import { Card } from "@/app/components/Card/Card";
import { CardBody } from "@/app/components/Card/CardBody";
import { Magic } from "@/app/components/Magic/Magic";
import { MagicStar } from "@/app/components/Magic/MagicStar";
import { Progress } from "@/app/components/Progress";
import { useEffect } from "react";
import { BiCalendar, BiMouse } from "react-icons/bi";
import { CgCalendar } from "react-icons/cg";
import { FaMouse } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { GiSprint } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { RiMickeyFill } from "react-icons/ri";
import { SiRiotgames } from "react-icons/si";
import { TbHandFinger } from "react-icons/tb";
// TODO - Add images to the cards instead of icons
import { motion } from "framer-motion";
import { HOne } from "@/app/components/Motion/HOne";
import { HTwo } from "@/app/components/Motion/HTwo";
import { HThree } from "@/app/components/Motion/HThree";

export default function Home() {
  return (
    <>
      <section className="h-screen w-screen">
        <div className="title-body relative flex flex-col items-center justify-center h-full">
          <HOne
            className="shadow-lg text-3xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Hi, I'm <Magic name={"Tahmid Ahmed"} />
          </HOne>
          <HTwo
            className="text-xl md:text-2xl lg:text-4xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            Fullstack Developer
          </HTwo>
          <br />
          <HThree
            className="text-sm w-1/2 text-gray-400 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            I am a rising junior at Hunter College studying computer science. I
            am passionate about software development, and my recent ventures
            have been into web development. I am currently looking for
            internship opportunities!
          </HThree>
          <br />
          {/* TODO - Could use Framer to animate buttons */}
          <div>
            <Resume />
          </div>
          <div className="space-x-4">
            <LinkedIn url={"/linkedin"} name={"Tahmid Ahmed"} />
            <GitHub url={"https://github.com/0pengu"} name={"0pengu"} />
            <Email url={"mailto:tahmid@midhat.io"} email={"tahmid@midhat.io"} />
          </div>
        </div>
      </section>
      <div className="text-center text-2xl p-2">Projects</div>
      <CardBody>
        <Card
          href="https://pencil.synergy-prep.com"
          title="PENCIL"
          type="clickable"
          icon={<FaPencil size={"50"} />}
          description="An educational assistant powered by AI"
          languages={[
            "typescript",
            "react",
            "vite",
            "python",
            "flask",
            "postgres",
            "redis",
            "rq",
            "caddy",
            "docker",
            "discord",
          ]}
        />
        <Card
          href="https://instalock.midhat.io"
          title="Instalock"
          type="clickable"
          icon={<SiRiotgames size={"50"} />}
          description="A companion webapp for hit FPS game Valorant"
          languages={[
            "typescript",
            "react",
            "vite",
            "python",
            "flask",
            "postgres",
            "redis",
            "vercel",
          ]}
        />
        <Card
          href="https://todo.midhat.io"
          title="custom:latex"
          type="clickable"
          icon={<BiCalendar size={"50"} />}
          description="A todo app integrated with Discord"
          languages={["typescript", "next", "supabase", "vercel", "discord"]}
        />
        <Card
          title="Portfolio"
          type="unclickable"
          icon={<ImProfile size={"50"} />}
          description="Portfolio website to showcase my projects"
          languages={["typescript", "next", "tailwind", "vercel"]}
        />
        <Card
          title="Mouseketool"
          type="unclickable"
          icon={<RiMickeyFill size={"50"} />}
          description="A graphical program that uses Twilio to send parents student reports"
          languages={["python", "twilio", "sqlite"]}
        />
        <Card
          title="Quick!"
          type="unclickable"
          icon={<GiSprint size={"50"} />}
          description="A graphical program that sends notifications about Valorant matches"
          languages={["python", "twilio"]}
        />
      </CardBody>
    </>
  );
}
