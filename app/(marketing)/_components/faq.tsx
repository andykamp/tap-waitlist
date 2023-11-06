"use client";

import { faq } from "@/app/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';

export const FaqAccordion = () => {
  return (
    <Accordion type="multiple">
      {faq.map((item, i) => (
        <AccordionItem value={item.title}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.children}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

