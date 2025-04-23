import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do students need prior Quranic Knowledge to start?",
      answer:
        "No prior knowledge is necessary. This course is designed for beginners.",
    },
    {
      question: "Is there a certificate after completing the course?",
      answer:
        "Yes, students will receive a certificate upon successful completion of the course.",
    },
    {
      question: "How long will it take to finish this course?",
      answer:
        "It depends on your pace, but typically it takes a few weeks with regular practice.",
    },
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
