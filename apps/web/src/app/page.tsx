"use client";

import { Metadata } from "next";
import { Button, Card } from "ui";
import { test } from "common";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>Hello</h1>
      <button className="rounded-md bg-blue-600 p-1 shadow-lg" onClick={test}>
        click me to test
      </button>
    </div>
  );
}
