"use client";

import { ForecastProvider } from "./context/ForecastContext";
import  Link  from "next/link";

export default function ClientLayout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/forecast">Chart</Link>
      </nav>
      <main>
        <ForecastProvider>{children}</ForecastProvider>
      </main>
    </div>
  );
}
