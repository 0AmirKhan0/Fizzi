"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      sliceZone={(props) => (
        <div className="max-h-[900px]">
          <SliceZone {...props} components={components} />
        </div>
      )}
      background=""
      zIndex={10}
    />
  );
}
