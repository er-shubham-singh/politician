import React from "react";

const About = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x400.png?text=Politician+Photo"
            alt="Shri XYZ"
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            About Shri XYZ
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            Shri XYZ was born in Varanasi, Uttar Pradesh. With a background in
            political science and grassroots organizing, he has dedicated his
            life to public service, focusing on improving education, healthcare,
            and infrastructure in his constituency.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><strong>Early Life:</strong> Grew up in Varanasi, inspired by community service from a young age.</li>
            <li><strong>Education:</strong> Masters in Political Science from Banaras Hindu University.</li>
            <li><strong>Achievements:</strong> Led multiple development projects improving rural access to clean water and healthcare.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
