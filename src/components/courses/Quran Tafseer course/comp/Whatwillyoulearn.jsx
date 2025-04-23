export default function Whatwillyoulearn() {
  return (
    <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
        WHAT YOU WILL LEARN
      </h1>

      <div className="text-gray-700 mt-4 space-y-4">
        <p>
          <span className="font-semibold text-black">Quranic Rules and Regulations:</span> Know more about the rules and regulations of the Islamic religion that are mentioned in the Surah and The Ayat of the holy Quran. Muslims will go deeper into the holy Quran and know the rules that must be followed to be rewarded with the Jannah in the afterlife.
        </p>
        <p>
          <span className="font-semibold text-black">Divine Guidance:</span> Know the message of the Ayat of the holy Quran to learn from its wisdom and apply it in their real life because the holy Quran is the source of guidance of the Muslims that they should follow to live a peaceful life.
        </p>
        <p>
          <span className="font-semibold text-black">Arabic Language Enhancement:</span> Know more about the Arabic language because learning the holy Quran will improve your knowledge of the Arabic language and will make Muslims know new Arabic words that can be used to become fluent in the Arabic language.
        </p>
        <p>
          <span className="font-semibold text-black">Teaching Ability:</span> Muslims, after finishing this course, will teach other people the meaning of the holy Quran because they understand all the meanings of the holy Quran. So they can help other people to know the meaning of it.
        </p>
      </div>

      {/* Pre-requisites Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>Fair knowledge of the Arabic language</li>
          <li>Good internet connection to be able to join the online courses</li>
          <li>Access to PC or Mobile to join the course</li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>Structured lesson plans to make the student know when they will start and when they will end the course content</li>
          <li>Expert instructors who have experience in teaching students the Tafseer of the holy Quran</li>
        </ul>
      </div>
    </div>
  );
}