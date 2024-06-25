"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type HThreeProps = ComponentProps<typeof motion.h3>;

export function HThree(props: HThreeProps) {
  return <motion.h3 {...props}>{props.children}</motion.h3>;
}
