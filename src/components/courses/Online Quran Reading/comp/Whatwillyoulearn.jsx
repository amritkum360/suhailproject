export default function Whatwillyoulearn() {
    return (
      <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          What Will You Learn
        </h1>
  
        <div className="text-gray-700 mt-4">
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
  