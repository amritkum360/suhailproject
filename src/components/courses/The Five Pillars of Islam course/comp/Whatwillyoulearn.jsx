export default function Whatwillyoulearn() {
  return (
    <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
        WHAT YOU WILL LEARN
      </h1>

      <div className="text-gray-700 mt-4 space-y-4">
        <p>
          Muslims will learn the pillars of the Islamic religion that they must follow to gain good deeds and reward with Juannah in the afterlife. So in this course, we will teach Muslims who don't know the pillars of the Islam religion to make them know it to be able to follow it.
        </p>
        <p>
          Learn how to pray because praying is one of the most important worship that Muslims must do daily. So we will teach them how to pray and the significance of praying to encourage them to pray.
        </p>
        <p>
          Learn the significance of Fasting in the holy month (Ramadan) and how to do good deeds during Ramadan by praying and reciting the holy Quran and donating to poor people. 
        </p>
        <p>
          Tell them about the Hajj and its significance why Muslims do Hajj, all the information they need to know about the Hajj and if the Hajj is obligatory or not, and what the cases that Muslims must go to do Hajj.
        </p>
      </div>

      {/* Pre-requisites Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li><span className="font-medium">Fair Knolwdge of Islam:</span> A basic understanding of what Islamic faith is all about may be helpful, but it is not obligatory.</li>
          <li><span className="font-medium">Be ready to learn and practice:</span> This course will be useful to any new Muslim as much as for those wanting to know about he five pillars.</li>
          <li><span className="font-medium">Internet Connectivity:</span> Online therefore will require reliable internet connectivity for attending this course.</li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>Interactive sessions make the Muslims talk with each other to keep the information in their minds for a long time, so the sessions are interactive and instructors reply to all the questions of the Muslims.</li>
          <li>There is personalized feedback to the student to know their progress and the weak points that they want to work on improving themselves and finish the course content as soon as possible.</li>
          <li>Certificate of completion after finishing the course content</li>
        </ul>
      </div>
    </div>
  );
}