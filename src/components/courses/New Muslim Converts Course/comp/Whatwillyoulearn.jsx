export default function Whatwillyoulearn() {
  return (
    <div className="bg-white p-6 md:p-10 max-w-4xl mx-auto my-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>
        WHAT YOU WILL LEARN
      </h1>

      <div className="text-gray-700 mt-4 space-y-3">
        <p className="flex items-start">
          <span className="font-semibold text-black mr-2">•</span>
          Learn the five pillars of Islam
        </p>
        <p className="flex items-start">
          <span className="font-semibold text-black mr-2">•</span>
          Learn the six pillars of faith
        </p>
        <p className="flex items-start">
          <span className="font-semibold text-black mr-2">•</span>
          Learn more about Islamic history, Prophet Muhammad and his companions, and how they lived
        </p>
        <p className="flex items-start">
          <span className="font-semibold text-black mr-2">•</span>
          Morality and ethics in Islam
        </p>
        <p className="flex items-start">
          <span className="font-semibold text-black mr-2">•</span>
          Worship in Islam
        </p>
        <p className="flex items-start">
          <span className="font-semibold text-black mr-2">•</span>
          Major sins for Muslims
        </p>
        <p className="flex items-start">
          <span className="font-semibold text-black mr-2">•</span>
          Good habits for new Muslims
        </p>
      </div>

      {/* Pre-requisites Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block pb-2" style={{ color: "#19473c" }}>Pre-requisites</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
          <li>Desire to learn</li>
          <li>Access to good internet connection</li>
          <li>Quiet area to study at</li>
        </ul>
      </div>
    </div>
  );
}