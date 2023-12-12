"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("Click a button ....");
  const handleClick = (msg: string) => {
    setMsg(msg);
  };

  return (
    <div>
      <h1>{msg}</h1>
      <button
        value=" Button 1"
        data-testid="button-1"
        onClick={() => handleClick("Button 1")}
      >
        Submit
      </button>
      <button
        value=" Button 2"
        data-testid="button-2"
        onClick={() => handleClick("Button 2")}
      >
        Cancel
      </button>
    </div>
  );
}
