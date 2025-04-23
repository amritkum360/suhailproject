import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "The course is designed for everybody who wishes to learn and practice the essentials of the five pillars of Islam. It is also beneficial for new Muslims, learners interested in Islam, or anyone wanting to brush up on these things.",
    },
    {
      question: "Have I required previous knowledge of Islam?",
      answer:
        "No, you could know basic knowledge of Islam is useful but not a must since the course content for every level, including new muslims .",
    },
    {
      question: "How will that course be given?",
      answer:
        "The course is going to be conducted online, in a combination of interactive sessions with video lectures and written materials. All the resources are open for students to access from wherever with an Internet connection.",
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
