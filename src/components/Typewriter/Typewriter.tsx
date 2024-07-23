"use client";

import Typical from "react-typical";

export default function Typewriter({ steps }: { steps: (string | number)[] }) {
  return <Typical steps={steps} loop={Infinity} wrapper="div" />;
}
