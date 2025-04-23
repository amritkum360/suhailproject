export default function Whatwillyoulearn() {
    return (
      <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          What Will You Learn
        </h1>
  
        <div className="text-gray-700 mt-4">
          <p>
            <span className="font-semibold text-black">Quranic Recitation (Tajweed):</span> Correct and accurate sound production of the Arabic alphabet and letters.
Guidelines of Tajweed to modify the recitation quality.
          </p>
          <p>
            <span className="font-semibold text-black">Memorization (Hifz):
            </span> Some Methods that assist in verse memorization.
How to Continue Inner Memorisation of the Section Completed Already.
 </p>
          <p>
            <span className="font-semibold text-black">Understanding and Interpretation (Tafsir):
            </span> Elementary comprehension of the text of the Surah.
Specific scenarios regarding the explanation of certain verses.

</p>
          <p>
            <span className="font-semibold text-black">Islamic Etiquette:</span> Special respect and care are employed in the use of the Quran.
Practice of the Hadiths while reading aloud.

</p>
          <p>
            <span className="font-semibold text-black">Prayers and Duas:
            </span> Key prayers in the chapters of the Quran.
Their purpose in daily activities.

</p>
        </div>
  
        {/* Pre-requisites Section */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
            <li>Basic Knowledge of Arabic: Knowing the Arabic letters and sounds would be an advantage, though most of the courses allow people with no knowledge of the language. </li>
              <li>Access to Technology: A stable internet and a computer, tablet, or smartphone to attend the classes.

</li>
            <li>Commitment to Learning: Attendance at scheduled practice sessions and doing practice to enable effective progress.

</li>
          </ul>
        </div>
      </div>
    );
  }
  