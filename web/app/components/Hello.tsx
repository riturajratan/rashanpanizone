"use client";

import { useState } from "react";

export default function Hello() {
  const [text] = useState("Hello world");

  return <div className="text-lg font-bold">{text}</div>;
}
