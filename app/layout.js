// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import ClientLayout from "./client-layout";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold">Solar Estimator Dashboard</h1>
              <p className="text-muted-foreground">
                Get an estimate of your solar energy potential.
              </p>
            </div>
            <ClientLayout>{children}</ClientLayout>
          </div>
        </div>
      </body>
    </html>
  );
}
