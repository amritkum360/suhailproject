import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can a person unfamiliar with Arabic start learning the language?",
      answer:
        "Not at all. The entire course begins at the most basic level possible and goes beyond all the way through to mastery. Hence, anyone interested in learning, whatever their background, can be free to start learning Arabic.",
    },
    {
      question: "What provisions are provided?",
      answer:
        "Students can access study materials, assignments, and grammar references provided by this course to help them.",
    },
    {
      question: "HWhat if someone needs help with understanding a particular concept?",
      answer:
        "Yes, students can contact their instructors during interactive sessions or via course support channels.",
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
