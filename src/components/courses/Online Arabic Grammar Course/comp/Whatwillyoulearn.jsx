export default function Whatwillyoulearn() {
  return (
    <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
        Objectives
      </h1>

      <div className="text-gray-700 mt-4 space-y-4">
        <p>
          <span className="font-semibold text-black">Arabic grammar rules:</span> Learn all the Arabic grammar rules such as prepositions, adjectives, and adverbs in the Arabic Language, Arabic Grammar Tenses, etc. All the rules that Muslims need to know about Arabic grammar to read and write sentences in the Arabic language correctly.
        </p>
        <p>
          <span className="font-semibold text-black">Sentence structure:</span> Learn more about the Arabic sentence structure and how to build an Arabic sentence using Arabic words. Learning this step is very important in every language to build complete and correct sentences. This means that the person knows about the language and can communicate with people who speak this language.
        </p>
        <p>
          <span className="font-semibold text-black">Verbs and nouns:</span> Learn more about verbs and nouns. The Arabic language, like any other language, has nouns and verbs that Muslims must use to build any sentence. In this course, Muslims will learn the verbs and how to use them in sentences.
        </p>
        <p>
          <span className="font-semibold text-black">Punctuation marks:</span> Learn the punctuation marks that make sentences clearer and differentiate between sentences. Punctuation is very important because without it, the meaning of sentences can change.
        </p>
      </div>

      {/* Pre-requisites Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>Desire to Learn</li>
          <li>Access to Internet connection</li>
          <li>Access to technology such as Mobile or PC</li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>Regular assessment to the student to make sure that they make progress during the course, and to know their weak points to revise again</li>
          <li>Interactive grammar sessions to help Muslims interact and discuss what they understand in this course to help retain the grammar rules for longer</li>
          <li>Expert instructors who have experience in teaching Arabic grammar to many students</li>
        </ul>
      </div>
    </div>
  );
}