"use client"
import React from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <div className="min-h-screen w-full">
      <InlineWidget 
        url="https://calendly.com/knightcasimir/30min"
        styles={{
          height: '700px',
          minWidth: '320px',
        }}
      />
    </div>
  );
}