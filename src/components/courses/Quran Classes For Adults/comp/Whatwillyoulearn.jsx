export default function Whatwillyoulearn() {
    return (
      <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
          What Will You Learn
        </h1>
  
        <div className="text-gray-700 mt-4">
          <p>Reason for revelation: In this course, we will discuss with the student the reason for revealing the holy Quran and also the ayat the reason for revealing it and what was the situation that happened to reveal this surah. All the points related to the revelation will be discussed in this course.
          </p>
          <p>
          Meaning of Ayat and Surah: In this course, students will learn the meaning of the Ayat and the message of the Ayat that was revealed for it.
          </p>
          <p>
          Moral lessons: learning morals from the holy Quran that will help Muslims to live peaceful and good lives.
          </p>
          <p>
          Improve your communication skills: Debating during the sessions will make your communication skills improve, and students won’t be afraid to talk to people anymore.          </p>
        </div>
  
        {/* Pre-requisites Section */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
            <li><span className="font-medium">Quiet learning space: Create a quiet space to study in, free from any distractions.
            </span> <span className="text-sm text-gray-500"></span></li>
            <li>Access to technology such as smartphones, iPads, and PCs.
            </li>
            <li>Access to a suitable internet connection.
            </li>
          </ul>
        </div>
      </div>
    );
  }
  