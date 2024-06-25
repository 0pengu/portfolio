"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type HOneProps = ComponentProps<typeof motion.h1>;

export function HOne(props: HOneProps) {
  return <motion.h1 {...props}>{props.children}</motion.h1>;
}
