"use client";

import { ReactElement } from "react";
import { IconType } from "react-icons";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { FaDocker, FaPython, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiCaddy,
  SiFlask,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiSqlite,
  SiSupabase,
  SiTwilio,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import { CgExternal } from "react-icons/cg";
import Image, { StaticImageData } from "next/image";

export function Card({
  href,
  src,
  icon,
  title,
  type,
  description,
  languages,
  alt,
}: {
  href?: string | undefined;
  icon?: ReactElement<IconType>;
  src?: string | StaticImageData;
  title: "custom:latex" | string;
  type: "clickable" | "unclickable";
  description: string;
  alt?: string;
  languages: (
    | "python"
    | "react"
    | "next"
    | "typescript"
    | "flask"
    | "vite"
    | "vercel"
    | "docker"
    | "caddy"
    | "rq"
    | "redis"
    | "postgres"
    | "supabase"
    | "discord"
    | "twilio"
    | "sqlite"
    | "tailwind"
  )[];
}) {
  return type === "unclickable" ? (
    <div
      className="card"
      style={{
        position: "relative",
        cursor: "not-allowed",
        backgroundImage: "../../public/screenshot/todo.midhat.io.png",
      }}
    >
      <div className="card-content">
        {/* {type === "clickable" && <CgExternal size={"15"} />} */}
        {src ? (
          <Image
            src={src}
            alt={alt ? alt : typeof src === "string" ? src : title}
            className="card-image rounded-md"
          />
        ) : (
          <div className="card-image">{icon}</div>
        )}
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              {title === "custom:latex" ? (
                <>
                  {"{Todo}"}
                  <Latex>$^2$</Latex>
                </>
              ) : (
                <h3>{title}</h3>
              )}
            </div>
            <div className="text-xs text-gray-400 text-center">
              {description}
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-end mt-1 space-x-2 z-50">
          {languages &&
            languages.map((language) => {
              switch (language) {
                case "python":
                  return <FaPython key={language} />;
                  break;
                case "react":
                  return <FaReact key={language} />;
                  break;
                case "typescript":
                  return <BiLogoTypescript key={language} />;
                  break;
                case "flask":
                  return <SiFlask key={language} />;
                  break;
                case "vite":
                  return <SiVite key={language} />;
                  break;
                case "vercel":
                  return <SiVercel key={language} />;
                  break;
                case "caddy":
                  return <SiCaddy key={language} />;
                  break;
                case "postgres":
                  return <SiPostgresql key={language} />;
                  break;
                case "docker":
                  return <FaDocker key={language} />;
                  break;
                case "redis":
                  return <SiRedis key={language} />;
                  break;
                case "rq":
                  return <SiRabbitmq key={language} />;
                  break;
                case "next":
                  return <RiNextjsFill key={language} />;
                  break;
                case "supabase":
                  return <SiSupabase key={language} />;
                  break;
                case "discord":
                  return <BsDiscord key={language} />;
                case "twilio":
                  return <SiTwilio key={language} />;
                case "sqlite":
                  return <SiSqlite key={language} />;
                case "tailwind":
                  return <RiTailwindCssFill key={language} />;
                default:
                  return null;
              }
            })}
        </div>
      </div>
    </div>
  ) : (
    <a
      className="card"
      href={href ?? undefined}
      style={{
        position: "relative",
        cursor: "pointer",
        backgroundImage: "../../public/screenshot/todo.midhat.io.png",
      }}
    >
      <div className="card-content">
        {/* {type === "clickable" && <CgExternal size={"15"} />} */}
        {src ? (
          <Image
            src={src}
            alt={alt ? alt : typeof src === "string" ? src : title}
            className="card-image rounded-md"
          />
        ) : (
          <div className="card-image">{icon}</div>
        )}
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              {title === "custom:latex" ? (
                <>
                  {"{Todo}"}
                  <Latex>$^2$</Latex>
                </>
              ) : (
                <h3>{title}</h3>
              )}
            </div>
            <div className="text-xs text-gray-400 text-center">
              {description}
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-end mt-1 space-x-2 z-50">
          {languages &&
            languages.map((language) => {
              switch (language) {
                case "python":
                  return <FaPython key={language} />;
                  break;
                case "react":
                  return <FaReact key={language} />;
                  break;
                case "typescript":
                  return <BiLogoTypescript key={language} />;
                  break;
                case "flask":
                  return <SiFlask key={language} />;
                  break;
                case "vite":
                  return <SiVite key={language} />;
                  break;
                case "vercel":
                  return <SiVercel key={language} />;
                  break;
                case "caddy":
                  return <SiCaddy key={language} />;
                  break;
                case "postgres":
                  return <SiPostgresql key={language} />;
                  break;
                case "docker":
                  return <FaDocker key={language} />;
                  break;
                case "redis":
                  return <SiRedis key={language} />;
                  break;
                case "rq":
                  return <SiRabbitmq key={language} />;
                  break;
                case "next":
                  return <RiNextjsFill key={language} />;
                  break;
                case "supabase":
                  return <SiSupabase key={language} />;
                  break;
                case "discord":
                  return <BsDiscord key={language} />;
                case "twilio":
                  return <SiTwilio key={language} />;
                case "sqlite":
                  return <SiSqlite key={language} />;
                case "tailwind":
                  return <RiTailwindCssFill key={language} />;
                default:
                  return null;
              }
            })}
        </div>
      </div>
    </a>
  );
}
