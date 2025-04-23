import { Link } from "react-router-dom";

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
        </div>

        {/* FAQ Section */}
        {/* <div className="mt-6 space-y-4">
          <h3 className="font-bold text-lg">Frequently Asked Questions</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">Is this course suitable for non-Arabs?</span> They will face challenges of the language, but if they have basic knowledge about the Arabic language, it will be okay.</p>
            <p><span className="font-semibold">How many Qiraat will be discussed in this course?</span> 10 styles of Qiraat will be discussed in this course.</p>
            <p><span className="font-semibold">Does Eilaf offer flexible schedules?</span> Yes, in Eilaf, we offer a flexible schedule to be suitable for all people.</p>
          </div>
        </div> */}
      </div>

      {/* About The Course Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          About The Course
        </h2>
        
        <div className="text-gray-700 mt-4 space-y-4">
          <p>
            Quran Qiraat course is a course that aims for Muslims to have their own Qiraa to the holy Quran by listening to many types of qiraat and learning from it how to recite the holy Quran correctly with melodic sounds and special sounds. There are many types of Qiraat that Muslims should know about to be able to recite the holy Quran properly. In this course at Eilaf, we will learn about all the types of Qiraat.
          </p>
          <p>
            <span className="font-semibold">Understand the Qiraat:</span> by learning the different styles of the Qiraat and its historical context, ten types of Qiraat will be discussed in this course.
          </p>
          <p>
            <span className="font-semibold">Tajweed rules:</span> Learn more about Tajweed rules and principles to be able to recite the holy Quran correctly by the end of the course.
          </p>
          <p>
            <span className="font-semibold">Practice recitation:</span> practice daily recitation to the holy Quran to improve your recitation skills.
          </p>
          <p>
            <span className="font-semibold">Listen to different Qiraat:</span> Listen daily to different styles of Qiraat to learn from them how to pronounce the Arabic letters properly.
          </p>
        </div>
      </div>

      {/* Why Take This Course Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          Why Taking This Course
        </h2>
        
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg mt-4">
          <li>Desire to learn</li>
          <li>Access to Smartphone or PC</li>
          <li>Access to a good internet connection</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          The Benefits of the Quran Qiraat Course
        </h2>
        
        <div className="text-gray-700 mt-4 space-y-6">
          <div className="flex items-start">
            <div className="mr-4">
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-green-700">1</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Mastery of Quranic Recitation (Tajweed and Qira'at)</h3>
              <p>Learning the advanced rules of Tajweed will help Muslims to recite the holy Quran correctly and listening to different types of Qiraat will make them able to know how to recite the holy Quran because there is a difference between reading and reciting the holy Quran. So, in this course, students will learn how to master the holy Quran.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4">
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-green-700">2</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Enhancement of Spiritual Connection with the Quran</h3>
              <p>The aesthetic appeal and harmony of various Qira'ats can enhance a Muslim's spirituality when it comes to the Quran. People attending prayers have often been known to appreciate more the different reciting styles of the Quran and its associated calmness. Qira'at, the complementary art of recitation, enhances the understanding of the Quran, reinforcing belief in its teachings.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4">
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-green-700">3</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Cultural and Historical Enrichment</h3>
              <p>By reading the holy Quran, Muslims will know about the history of the Prophets and the Islamic religion and also, will know the culture of the Islamic religion. So Muslims should read the holy Quran to know more about the religions, the prophets, their life, and how they lived. All the information that Muslims need to know.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4">
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-green-700">4</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Arabic Pronunciation and Fluency Development</h3>
              <p>The study of the various Qira'ats results in students being able to pronounce and speak Arabic fluently. This is mainly helpful for those who are not Arabs and are eager to understand the language fully. The development of Qira'ats is phonetic, rhythmic, and therefore learning these courses enables learners to pronounce Arabic letters and words correctly, hence improving their language skills.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4">
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-green-700">5</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Enhanced Awareness of Tafsir</h3>
              <p>Different Qira'at could at times create subtle disparities in meaning because of the addition, omission, or change in pronunciation of a tone or certain letter(s). Within Qira'at courses, the studious examination of these discrepancies is often included broadening the students' understanding of the context and meaning of the revelation of Quranic ayahs. This understanding allows better understanding of the purpose of the Quran, especially for those who are keen on Tafsir (explaining the Quran).</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4">
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-green-700">6</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Efficient Means Of Worship And Instruction</h3>
              <p>Training in different Qira'at gives the opportunity to the student to reproduce the Quran in different forms, which is a plus while praying and religious gatherings. It also gives the individual flexibility while teaching or leading prayers. For instance, within some Qira'at practicing cultures, the ability to lead a prayer does not require knowledge of only one Qira'a, thus making the however multi-cultural settings.</p>
            </div>
          </div>
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