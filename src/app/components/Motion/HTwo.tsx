"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type HTwoProps = ComponentProps<typeof motion.h2>;

export function HTwo(props: HTwoProps) {
  return <motion.h2 {...props}>{props.children}</motion.h2>;
}
