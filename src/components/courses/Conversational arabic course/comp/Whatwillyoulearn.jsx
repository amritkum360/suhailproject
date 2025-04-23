export default function Whatwillyoulearn() {
  return (
    <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
      {/* About the Course Section */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
        ABOUT THE COURSE
      </h1>
      <div className="text-gray-700 mt-4 space-y-4">
        <p>
          This course is aimed at students who have a basic knowledge of the Arabic language to improve their conversational and speaking skills and fluency helping to gain complete knowledge of the Arabic language from the beginner level to fluency.
        </p>
        <p>
          With the help of our Native Arab Tutors through a comprehensive range of language activities and exercises covering all the basics of Arabic.
        </p>
        <p>
          The goal is guiding learners in learning Arabic in an effective and enjoyable way to develop their language skills.
        </p>
        <p>
          This Arabic Conversation Course will help students in communicating comfortably in Arabic and will quickly enhance their fundamental Arabic skills.
        </p>
      </div>

      {/* Why Taking This Course Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>WHY TAKING THIS COURSE</h2>
        <div className="text-gray-700 mt-4 space-y-4">
          <p>
            The course is well structured and focused on improving students' Arabic speaking skills.
          </p>
          <p>
            English-speaking Muslims are not familiar with the Arabic language, the course will not only improve their Arabic language skills but will also help them master the recitation and translation of the Holy Quran.
          </p>
          <p>
            Learning an entirely unfamiliar language from the mother tongue or national language is a hard process. But we make it enjoyable and interactive for our students with the help of different activities, exercises, competitions, rewards, and multimedia.
          </p>
          <p>
            Eilaf has Qualified Native Arab Teachers are available to teach Arabic to non-native speakers, as it is important to train qualified teachers who can teach the Arabic language to the target audience in the simplest and most effective ways.
          </p>
        </div>
      </div>

      {/* What You Will Learn Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>WHAT YOU WILL LEARN</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg mt-4">
          <li>The Arabic language's significance</li>
          <li>(Modern Standard) Arabic</li>
          <li>Arabic grammar training</li>
          <li>Learning practical grammar</li>
          <li>Mastery of Arabic Reading, Writing & Speaking</li>
          <li>Daily Life Scenarios</li>
          <li>Greeting people and participating in social activities</li>
          <li>Common vocabulary used in Daily Life Conversation</li>
        </ul>
      </div>

      {/* Pre-requisites Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li><span className="font-medium">Basic Familiarity with Arabic</span> <span className="text-sm text-gray-500">(Optional)</span></li>
          <li>Access to suitable network connection</li>
          <li>Desire to learn</li>
        </ul>
      </div>
    </div>
  );
}