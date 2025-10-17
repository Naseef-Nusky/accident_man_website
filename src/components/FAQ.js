import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion.js";
import inspectionImage from "../assets/2c09a9ec77da50da405c989b8786276029b44b32.png";

export function FAQ() {
  const faqs = [
    {
      question: "Am I entitled to a replacement vehicle if the accident wasn't my fault?",
      answer: "Yes, absolutely! If you were involved in a non-fault accident, you are entitled to a replacement vehicle while yours is being repaired. We provide a suitable replacement vehicle within 10 hours of your initial contact, ensuring you can continue with your daily activities without disruption."
    },
    {
      question: "Will I need to pay any excess car insurance claim if it was not my fault?",
      answer: "No, you will not need to pay any excess if the accident was not your fault. We operate on a credit hire basis with no up-front costs for non-fault accidents. The at-fault party's insurance will cover all costs including your replacement vehicle and repairs."
    },
    {
      question: "How does the vehicle repair process work with Accident Man?",
      answer: "Our repair process is straightforward: we recover your vehicle, arrange repairs at our approved bodyshops using only branded parts, and provide you with a replacement vehicle throughout the process. Each repair is inspected by independent engineers to ensure your vehicle is returned to its pre-incident condition."
    },
    {
      question: "I had an accident, what should I do?",
      answer: "First, ensure everyone's safety and call emergency services if needed. Take photos of the damage and exchange details with the other driver. Then contact us immediately on 0843 289 1570 or our 24-hour line 07591 264731. We'll guide you through the entire process including vehicle recovery and replacement car provision."
    },
    {
      question: "Will my no-claims bonus be affected by a non-fault accident?",
      answer: "No, your no-claims bonus should not be affected by a non-fault accident. Since you were not at fault, your insurance company should protect your no-claims bonus. We'll work with your insurer to ensure this is properly handled and documented."
    },
    {
      question: "How long will the claims process take?",
      answer: "The claims process typically takes 2-4 weeks depending on the complexity of the case and extent of damage. We aim to recover and repair your car in the shortest time possible without compromising quality. We'll keep you informed throughout the entire process and provide regular updates on progress."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Find answers to common questions about our accident management services. 
              If you don't see your question here, please don't hesitate to contact us.
            </p>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={inspectionImage}
                alt="Professional vehicle damage inspection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
