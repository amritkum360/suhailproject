export default function Whatwillyoulearn() {
    return (
      <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          What Will You Learn
        </h1>
  
        <div className="text-gray-700 mt-4">
          <p>
          Improve your Arabic language: students will improve their language by reading and learning the meaning of words in the holy Quran, This will make the students know more about the Arabic language, and this will improve the Arabic language.
          </p>
          <p>
          Learn some rules of Tajweed: Learn some rules of Tajweed to help the student read the holy Quran properly and know how to pronounce the Arabic letters properly.
          </p>
          <p>
          Understand the meaning of Ayat: Muslims will learn the Tafsir of each Ayat, why it was revealed, and the message upon revealing; all the aspects of revealing this Ayat will be discussed in this course.
          </p>
          <p>
          Learn how to read the holy Quran properly: Muslims will learn how to read the holy Quran correctly through practice sessions, and the reading during sessions, and the instructor will ensure that all the students read correctly.
          </p>
        </div>
  
        {/* Pre-requisites Section */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
            <li><span className="font-medium">Willingness to practices : students want practice during the sessions to improve their level.
            </span> <span className="text-sm text-gray-500">(Optional)</span></li>
            <li>Access to mobile and PC to attend the sessions</li>
            <li>Desire to learn</li>
          </ul>
        </div>
      </div>
    );
  }
  