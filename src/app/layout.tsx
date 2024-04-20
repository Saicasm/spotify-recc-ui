import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
interface RootLayoutProps {
   /**
   * The content for the layout to render
   */
  children: React.ReactNode;
}

// export const metadata: Metadata = {
//   title: "Song Recommendation ",
//   description: "Distributed Song recommendation system based on Spotify dataset",
// };
//TODO: Add footer if necessary
const RootLayout : React.FC<RootLayoutProps> = ({
children
}) => {
  return (
    <div className=" min-h-screen mx-auto bg-opacity-90 bg-light-bg-primary">
  
        <Header  title="Musicfic"/>
        <main className="max-h-full" >{children}</main>
    
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
