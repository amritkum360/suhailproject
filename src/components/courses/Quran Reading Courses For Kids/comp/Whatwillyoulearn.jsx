export default function Whatwillyoulearn() {
    return (
      <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          What Will You Learn
        </h1>
  
        <div className="text-gray-700 mt-4">
          <p>
          Basic Quranic Reading: Kids will learn how to read the Quranic Arabic words and letters with proper pronunciation.
          </p>
          <p>
          Introduction to the Tajweed: Learn basic Tajweed rules, like Madd, and correct pronunciation of vowels and consonants.
          </p>
          <p>
          Interactive practice: practice the reading in a group setting to gain confidence.
          </p>
          <p>
          Memorization of short surahs: Memorize the short surahs to make progress and be ready to start the long surahs.
          </p>
        </div>
  
        {/* Pre-requisites Section */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
            {/* <li><span className="font-medium">Basic Familiarity with Arabic</span> <span className="text-sm text-gray-500">(Optional)</span></li> */}
            <li>No prior knowledge is required This course is designed for children who are beginners in Quranic reading.
            </li>
            <li>A desire to learn: Children should be enthusiastic about learning the Quran and practicing regularly.
            </li>
          </ul>
        </div>
      </div>
    );
  }
  