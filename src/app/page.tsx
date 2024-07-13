import { Email } from "@/components/Button/Email";
import { GitHub } from "@/components/Button/GitHub";
import { LinkedIn } from "@/components/Button/LinkedIn";
import { Resume } from "@/components/Button/Resume";
import { Card } from "@/components/Card/Card";
import { CardBody } from "@/components/Card/CardBody";
import { Magic } from "@/components/Magic/Magic";
import { MagicStar } from "@/components/Magic/MagicStar";
import { Progress } from "@/components/Progress";
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
import { HOne } from "@/components/Motion/HOne";
import { HTwo } from "@/components/Motion/HTwo";
import { HThree } from "@/components/Motion/HThree";
import { ShimmerText } from "@/components/ShimmerText/ShimmerText";

import InstalockImg from "../../public/screenshot/instalock.midhat.io.png";
import PortfolioImg from "../../public/screenshot/midhat.io.png";
import PencilImg from "../../public/screenshot/pencil.synergy-prep.com.png";
import TodoImg from "../../public/screenshot/todo.midhat.io.png";

export default function Home() {
  return (
    <>
      <section className="h-dvh w-dvh">
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
              delay: 0.6,
              duration: 0.8,
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
          <ShimmerText
            text=" I am a rising junior at Hunter College studying computer science. I
            am passionate about software development, and my recent ventures
            have been into web development. I am currently looking for
            internship opportunities!"
            className="text-sm w-1/2 text-gray-400 text-center"
            delay={0.7}
            speed="veryfast"
          />
          <br />
          {/* TODO - Could use Framer to animate buttons */}
          <div>
            <Resume />
          </div>
          <div className="space-x-4">
            <LinkedIn url={"/linkedin"} name={"/in/tahmidahmed-"} />
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
          src={PencilImg}
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
          src={InstalockImg}
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
          src={TodoImg}
          description="A todo app integrated with Discord"
          languages={["typescript", "next", "supabase", "vercel", "discord"]}
        />
        <Card
          href="https://github.com/0pengu/midhat.io"
          title="Portfolio"
          type="clickable"
          src={PortfolioImg}
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
