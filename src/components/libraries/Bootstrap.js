"use client";

import { useEffect } from "react";

export default function BootstrapClinet() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  });
  return null;
}
