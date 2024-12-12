"use client";

import { useState } from "react";

export default function Hello() {
  const [text] = useState("Hello world from client $10000000");

  return <div className="text-lg font-bold">{text}</div>;
}
