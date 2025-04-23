export default function Whatwillyoulearn() {
  return (
    <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
        What You Will Learn
      </h1>

      <div className="text-gray-700 mt-4">
        <p>
          <span className="font-semibold text-black">Egyptian Arabic language:</span> Learn more about the Egyptian Arabic language and its varieties.
        </p>
        <p>
          <span className="font-semibold text-black">Most used language:</span> Learn more about the most used language in the Arab world.
        </p>
        <p>
          <span className="font-semibold text-black">Egyptian culture:</span> Know about the Egyptian culture.
        </p>
        <p>
          <span className="font-semibold text-black">Old words meaning:</span> Understand the meaning of the old words in the Egyptian language.
        </p>
      </div>

      {/* Pre-requisites Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>Commit to study</li>
          <li>Have a Basic knowledge of the Arabic language</li>
          <li>Knowing about the Arabic alphabets</li>
        </ul>
      </div>
    </div>
  );
}