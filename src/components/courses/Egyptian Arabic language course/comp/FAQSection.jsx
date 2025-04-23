import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a distinction between Egyptian Arabic and Modern Standard Arabic?",
      answer:
        "Modern Standard Arabic (MSA) is the formal version of Arabic language, whereas Egyptian Arabic is a local dialect that is more focused on the cultural context and is reflected in language use. MSA is the language of all formal speech while the common Egyptian Arabic is used in informal speech.",
    },
    {
      question: "Do all Arabs familiar with Egyptian Arabic?",
      answer:
        "Most Arabs can definitely speak Egyptian Arabic in some form or another, especially with how it has dominated the media and entertainment sector, and yet still there are some regional issues that might be experienced.",
    },
    {
      question: "How do I improve my skills in speaking Egyptian arabic?",
      answer:
        "Interact with natives, watch Egyptian movies or listen to Egyptian music or read books; think of using some dialect online video exchange programs or attend classes that teach accents of Egypt.",
    },
    {
      question: "Can I find websites for the purpose of learning Egyptian Arabic?",
      answer:
        "There are as many as offered courses and apps for teaching Egyptian Arabic over the internet and on top of that many websites that teach languages also offer regional varieties.",
    },
    {
      question: "Give reasons as to why it is useful to acquire Egyptian Arabic.",
      answer:
        "The advantages of being fluent in Egyptian Arabic include more appreciation of the country and the people in terms of history and social aspect which is important for people going for tours around the country and for communication between cultures.",
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
