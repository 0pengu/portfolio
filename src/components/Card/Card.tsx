"use client";

import { cn } from "@/lib/utils";
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
import Image, { StaticImageData } from "next/image";

interface CardProps {
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
}

export function Card({
  href,
  src,
  icon,
  title,
  type,
  description,
  alt,
  languages,
}: CardProps) {
  return (
    <div className={cn("group h-72 w-56 [perspective:1000px]")}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          "group-hover:[transform:rotateY(180deg)]"
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          {type === "unclickable" ? (
            <div
              className="card"
              style={{
                position: "relative",
                cursor: "not-allowed",
              }}
            >
              <div className="card-content">
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
                        case "react":
                          return <FaReact key={language} />;
                        case "typescript":
                          return <BiLogoTypescript key={language} />;
                        case "flask":
                          return <SiFlask key={language} />;
                        case "vite":
                          return <SiVite key={language} />;
                        case "vercel":
                          return <SiVercel key={language} />;
                        case "caddy":
                          return <SiCaddy key={language} />;
                        case "postgres":
                          return <SiPostgresql key={language} />;
                        case "docker":
                          return <FaDocker key={language} />;
                        case "redis":
                          return <SiRedis key={language} />;
                        case "rq":
                          return <SiRabbitmq key={language} />;
                        case "next":
                          return <RiNextjsFill key={language} />;
                        case "supabase":
                          return <SiSupabase key={language} />;
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
                        case "react":
                          return <FaReact key={language} />;
                        case "typescript":
                          return <BiLogoTypescript key={language} />;
                        case "flask":
                          return <SiFlask key={language} />;
                        case "vite":
                          return <SiVite key={language} />;
                        case "vercel":
                          return <SiVercel key={language} />;
                        case "caddy":
                          return <SiCaddy key={language} />;
                        case "postgres":
                          return <SiPostgresql key={language} />;
                        case "docker":
                          return <FaDocker key={language} />;
                        case "redis":
                          return <SiRedis key={language} />;
                        case "rq":
                          return <SiRabbitmq key={language} />;
                        case "next":
                          return <RiNextjsFill key={language} />;
                        case "supabase":
                          return <SiSupabase key={language} />;
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
          )}
        </div>

        {/* Back */}
        <div className="absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]"></div>
      </div>
    </div>
  );
}
