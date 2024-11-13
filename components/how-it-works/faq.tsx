import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the entire process take?",
    answer: "The typical timeline from measurement to delivery is 2-3 weeks. Rush orders may be accommodated upon request.",
  },
  {
    question: "What if I need alterations after delivery?",
    answer: "We offer complimentary alterations within 30 days of delivery to ensure your complete satisfaction.",
  },
  {
    question: "Do you provide fabric samples?",
    answer: "Yes, we can bring fabric samples during the measurement session or send them to your location upon request.",
  },
  {
    question: "What areas do you service?",
    answer: "We currently service all major metropolitan areas. Contact us to confirm service in your location.",
  },
  {
    question: "How do I care for my custom garments?",
    answer: "Each garment comes with specific care instructions. We generally recommend dry cleaning for suits and professional cleaning for delicate items.",
  },
];

export function FAQ() {
  return (
    <section className="container py-20">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}