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
}: {
  href?: string | undefined;
  icon?: ReactElement<IconType>;
  src?: string | StaticImageData;
  title: "custom:latex" | string;
  type: "clickable" | "unclickable";
  description: string;
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
  return (
    <a
      className="card"
      href={href ?? undefined}
      style={{
        position: "relative",
        cursor: type === "clickable" ? "pointer" : "not-allowed",
      }}
    >
      <div className="card-content">
        {/* {type === "clickable" && <CgExternal size={"15"} />} */}
        {src ? (
          <Image
            src={src}
            alt={typeof src === "string" ? src : title}
            className="card-image rounded-md "
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
        <div className="flex gap-1 justify-end mt-1 space-x-2 z-50 overflow-auto">
          {languages &&
            languages.map((language) => {
              switch (language) {
                case "python":
                  return <FaPython />;
                  break;
                case "react":
                  return <FaReact />;
                  break;
                case "typescript":
                  return <BiLogoTypescript />;
                  break;
                case "flask":
                  return <SiFlask />;
                  break;
                case "vite":
                  return <SiVite />;
                  break;
                case "vercel":
                  return <SiVercel />;
                  break;
                case "caddy":
                  return <SiCaddy />;
                  break;
                case "postgres":
                  return <SiPostgresql />;
                  break;
                case "docker":
                  return <FaDocker />;
                  break;
                case "redis":
                  return <SiRedis />;
                  break;
                case "rq":
                  return <SiRabbitmq />;
                  break;
                case "next":
                  return <RiNextjsFill />;
                  break;
                case "supabase":
                  return <SiSupabase />;
                  break;
                case "discord":
                  return <BsDiscord />;
                case "twilio":
                  return <SiTwilio />;
                case "sqlite":
                  return <SiSqlite />;
                case "tailwind":
                  return <RiTailwindCssFill />;
                default:
                  return null;
              }
            })}
        </div>
      </div>
    </a>
  );
}
