import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What if my child does not have an acquaintance with the Arabic letters?",
      answer:
"No worries! The course will start with the basics and introduce the Arabic alphabet in a fun and easy way."
    },
    {
      question: "How will I know if my child is really progressing?",
      answer:
"You will receive notice and feedback from the instructor after each lesson."    },
    {
      question: "Is there any material required for the classes?",
      answer:
        "Each and every material, such as digital flashcards, worksheets, and videos, will be part of the course."    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 border-b-4 border-orange-400 inline-block pb-2" style={{ color: "#19473c" }}>
        FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 font-semibold text-gray-800 flex justify-between items-center"
            >
              {faq.question}
              <span className="text-orange-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
