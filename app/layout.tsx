import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewReply AI – Google Review Responses for Local Businesses",
  description: "AI-powered Google review responses that match your business voice. Generate personalized replies in seconds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8af4f531-1850-461a-9051-e6bc17299662"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
