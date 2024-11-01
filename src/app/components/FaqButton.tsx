"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";

interface FAQButtonProps {
  question: string;
  answer: string;
}

export const FAQButton: FC<FAQButtonProps> = ({ question, answer }) => (
  <Dialog>
    <DialogTrigger asChild>
      <motion.button
        className="rounded border-2 border-white bg-white px-3 py-2 text-xs font-medium text-blue-600 transition-colors hover:bg-transparent hover:text-white sm:text-sm"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {question}
      </motion.button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px] bg-white">
      <DialogHeader>
        <DialogTitle>{question}</DialogTitle>
        <DialogDescription>{answer}</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
