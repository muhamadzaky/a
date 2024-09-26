"use client"

import { Facebook, Github, Instagram, Linkedin, Music2, Twitter, X, Youtube } from "lucide-react";
import React from "react";
import { Card } from "../card";
import Link from "next/link";

export interface SNS {
  name: string;
  link: string;
  show: boolean;
}

type Props = {
  data: SNS[]
};

const ContactContainer:React.FC<Props> = ({ data }) => {
  const generateItem = () => {
    const icon = (item: string) => {
      switch (item) {
        case "youtube":
          return <Youtube />
        case "facebook":
          return <Facebook />
        case "twitter":
          return <X />
        case "instagram":
          return <Instagram />
        case "github":
          return <Github />
        case "linkedin":
          return <Linkedin />
        case "music":
          return <Music2 />
        default:
          return null;
      };
    };
    
    const text = (item: string) => {
      switch (item) {
        case "youtube":
          return "YouTube";
        case "facebook":
          return "Facebook";
        case "twitter":
          return "X";
        case "instagram":
          return "Instagram";
        case "github":
          return "Github";
        case "linkedin":
          return "Linkedin";
        case "music":
          return "Apple Music";
        default:
          return null;
      };
    };

    return { icon, text };
  };
  
  return (
    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
      <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
        {data.map((s) => (
          <Card key={s.name}>
            <Link
              href={s.link}
              target="_blank"
              className="py-16 relative flex flex-col items-center gap-4 duration-700 group md:gap-8"
            >
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                {generateItem().icon(s.name)}
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {generateItem().text(s.name)}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
      
  )
};

export default ContactContainer;