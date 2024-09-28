import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import "@liveblocks/react-ui/styles.css";
import { Outfit } from "next/font/google";
import "./globals.css";
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Quaraverse",
  description: "A Collaborative Productivity Tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
      {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
