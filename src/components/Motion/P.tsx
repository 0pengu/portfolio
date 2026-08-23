"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type PProps = ComponentProps<typeof motion.p>;

export function P(props: PProps) {
  return <motion.p {...props}>{props.children}</motion.p>;
}
