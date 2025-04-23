export default function Whatwillyoulearn() {
  return (
    <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
      {/* What You Will Learn Section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          What You Will Learn
        </h1>
        
        <div className="text-gray-700 mt-4 space-y-4">
          <p>
            <span className="font-semibold text-black">Learn Arabic phonetics:</span> Learn how to read and pronounce the Arabic letters and the words that will help you to know more about the Arabic language.
          </p>
          <p>
            <span className="font-semibold text-black">Learn more about Tajweed rules:</span> In this course, you will learn the basic rules of Tajweed step by step to help you read the Holy Quran properly.
          </p>
          <p>
            <span className="font-semibold text-black">Listening and practicing:</span> Improve your listening skills by listening to professional Qira'at to learn from them how to pronounce the Arabic letters, and also by practicing the reading of the Holy Quran every day.
          </p>
          <p>
            <span className="font-semibold text-black">Confidence Building:</span> Practicing daily will increase the confidence in reading the Arabic language in public without being afraid of making mistakes.
          </p>
          
          {/* Additional Learning Points */}
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-2">Memorization Techniques:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>6 new habits to improve Quran memorization ability</li>
              <li>Quantum Reading Technique</li>
              <li>Scan Reading Technique</li>
              <li>Initial Memorization Technique</li>
              <li>Forgetfulness types and their solutions</li>
              <li>Deep Memorization techniques</li>
              <li>Learn the 4 techniques for improving your memorization ability</li>
              <li>Be able to memorize around 10 pages daily</li>
              <li>Be able to memorize the whole Holy Quran in short-time</li>
              <li>The simplest way to memorize the Qur'an</li>
              <li>A quick and easy way to memorize the Quran</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About The Course Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          About The Course
        </h2>
        
        <div className="text-gray-700 mt-4 space-y-4">
          <p>
            In Islam, the Hafiz who have taken the time and effort to memorize the Quran will obtain great rewards from Allah (SWT) in this life and hereafter.
          </p>
          <p>
            Online Quran memorization classes especially with tajweed, involves a physical, mental, and spiritual journey that will build a better relationship between an individual and Allah, as well as between an individual and community.
          </p>
          <p>
            Due to the importance of learning Hifz Quran for every Muslim in the world, Eilaf presents "free online Quran memorization classes for sisters" online hifz program Course for those Muslims who are either Non-Arabs or living in Non-Muslim countries.
          </p>
          <p>
            Now, you or your kids can take online hifz classes provided by highly-qualified Quran tutors from Al-Azhar University through one-to-one online sessions. Our Quran tutors will help you develop accurate memorization of the Book of Allah, learning the general meaning of the verses as well as learning the reasons for revealing the verses (Ayat).
          </p>
        </div>
      </div>

      {/* Why Take This Course Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          Why Taking This Course
        </h2>
        
        <div className="text-gray-700 mt-4 space-y-4">
          <p>
            We, at Eilaf, offer the "Learn Quran Memorization program" course, where we have assimilated the top Quran tutors and professionals for you. A thorough schedule would be discussed with you at the beginning of the session and our professionals would help you follow it to achieve your goal in the decided time frame.
          </p>
          <p>
            You will be exposed to repeated tests to make sure the Quran stays with you for a long time and you don't forget it. Through repeated revisions, tests and quizzes, we will make sure your Quran memorization course stays intact, and you never get any word wrong. Follow-up classes will also be taken monthly to help you revise the learned surahs.
          </p>
          <p>
            Furthermore, your teacher will work on facilitating memorization and help you overcome any problems with memorization. So, get yourself registered for the Quran memorizing course and become a Hafiz/Hafiza of the Holy Quran.
          </p>
        </div>
      </div>

      {/* Pre-requisites Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          Pre-requisites
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li><span className="font-medium">Basic Familiarity with Arabic</span> <span className="text-sm text-gray-500">(Optional)</span></li>
          <li>Access to suitable network connection</li>
          <li>Desire to learn</li>
        </ul>
      </div>
    </div>
  );
}