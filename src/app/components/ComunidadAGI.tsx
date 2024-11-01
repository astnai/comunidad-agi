"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// Local components
import { FAQButton } from "./FaqButton";
import { faqItems } from "../../../data/faq-items";
// UI components
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Main component
const ComunidadAGI: FC = () => {
  // State for client-side mounting
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // Container with background
    <div className="relative flex min-h-screen justify-center overflow-hidden text-white">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col justify-between border-x-0 sm:border-x border-dashed border-white px-4 sm:px-6">
        {/* Header */}
        <header className="pb-4 pt-6">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold hover:underline hover:underline-offset-2"
            >
              Comunidad AGI
            </Link>
            <div className="space-x-3 text-xs">
              <Link
                href="#"
                className="rounded border-2 border-white bg-white px-3 py-2 text-sm text-blue-600 transition-colors hover:bg-transparent hover:text-white"
              >
                Síguenos en Twitter
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex flex-grow items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated typography */}
            {mounted && (
              <>
                <TypeAnimation
                  sequence={["Emocionate del futuro"]}
                  wrapper="h1"
                  speed={50}
                  className="mb-2 text-2xl font-semibold sm:text-3xl"
                  cursor={false}
                />
                <TypeAnimation
                  sequence={[
                    "Comunidad AGI es un espacio para explorar la Inteligencia Artificial.",
                  ]}
                  wrapper="p"
                  speed={50}
                  className="mb-6 text-sm sm:text-base"
                  cursor={false}
                />
              </>
            )}

            {/* CTA Button */}
            <motion.button
              className="mb-4 rounded border border-white bg-white px-4 py-1 text-sm font-md text-blue-600 transition-colors hover:bg-transparent hover:text-white sm:text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Nuestro Podcast
            </motion.button>

            {/* FAQ Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {faqItems.map((item, index) => (
                <FAQButton
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="w-full">
          <div className="py-6 text-sm">
            <div className="text-left">
              Build by{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link
                    href="https://twitter.com/astnai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="cursor-pointer text-white underline underline-offset-2 hover:underline-offset-4">
                      astnai
                    </span>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent
                  align="end"
                  alignOffset={-200}
                  className="w-80 rounded bg-transparent shadow-none"
                  sideOffset={12}
                >
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/astnai.png" />
                      <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 text-left">
                      <h4 className="text-sm font-semibold">@astnai</h4>
                      <p className="text-sm">
                        Optimist Software Engineer from Patagonia, Argentina.
                      </p>
                      <div className="flex items-center pt-2">
                        <Button
                          asChild
                          className="rounded border border-white bg-white text-blue-600 transition-all duration-200 hover:border-white hover:bg-transparent hover:text-white hover:shadow-sm"
                        >
                          <a
                            href="https://twitter.com/astnai"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Follow on Twitter
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ComunidadAGI;
