import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is learning Arabic a requirement for enrollment in the course?",
      answer: (
        <>
          Basic knowledge of Arabic is helpful but not required. The course is designed to help students understand Quranic verses regardless of their Arabic proficiency. Our teachers provide clear explanations in English to ensure comprehension for all students.
        </>
      ),
    },
    {
      question: "How will the course be conducted?",
      answer: (
        <>
          The Quran Tafseer Course is conducted online through live interactive sessions. Students can access the material from their PC or mobile devices and study at their own pace. Each lesson includes:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Detailed verse-by-verse explanations</li>
            <li>Q&A sessions with instructors</li>
            <li>Supplementary learning materials</li>
          </ul>
        </>
      ),
    },
    {
      question: "What will I learn from this course?",
      answer: (
        <>
          <p className="mb-2">In this course, you will learn:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Meaning and message</strong> of each Ayah and Surah</li>
            <li><strong>Context of revelation</strong> - the circumstances and wisdom behind each verse</li>
            <li><strong>Practical application</strong> of Quranic teachings in daily life</li>
            <li><strong>Arabic language</strong> - building vocabulary through Quran study</li>
            <li><strong>Islamic rules and regulations</strong> from Quranic teachings</li>
          </ul>
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 inline-block pb-2" style={{ color: "#19473c", borderColor: "#19473c" }}>
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 font-medium text-gray-800 hover:bg-gray-50 flex justify-between items-center transition-colors duration-200"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-2xl text-[#19473c] ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div id={`faq-${index}`} className="p-4 pt-0 text-gray-600 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}