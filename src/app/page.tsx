import { Email } from "@/app/components/Button/Email";
import { GitHub } from "@/app/components/Button/GitHub";
import { LinkedIn } from "@/app/components/Button/LinkedIn";
import { Magic } from "@/app/components/Magic";
import { MagicStar } from "@/app/components/MagicStar";

export default function Home() {
  return (
    <section className="h-screen w-screen">
      <div className="title-body relative flex flex-col items-center justify-center h-full ">
        <h1 className="shadow-lg text-8xl">
          Hi, I'm <Magic name={"Tahmid Ahmed"} />
        </h1>
        <h2 className="text-4xl">Fullstack Developer</h2>
        <div className="space-x-4">
          <LinkedIn url={"https://midhat.io/linkedin"} />
          <GitHub url={"https://github.com/0pengu"} />
          <Email url={"mailto:tahmid@midhat.io"} />
        </div>
      </div>
    </section>
  );
}
