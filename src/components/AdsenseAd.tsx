"use client";

import { useEffect } from "react";

export default function AdsenseAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4604348771845321"
      data-ad-slot="7916382256"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
