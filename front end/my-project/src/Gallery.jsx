import React from "react";

const galleryImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Political_rally_in_India.jpg/800px-Political_rally_in_India.jpg",
    caption: "Mass Political Rally"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Indian_Politician_Addressing_Crowd.jpg/800px-Indian_Politician_Addressing_Crowd.jpg",
    caption: "Public Address"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Political_campaign_in_rural_area.jpg/800px-Political_campaign_in_rural_area.jpg",
    caption: "Campaign in Rural Area"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Community_service_event_in_India.jpg/800px-Community_service_event_in_India.jpg",
    caption: "Community Service Event"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Youth_meeting_with_politician.jpg/800px-Youth_meeting_with_politician.jpg",
    caption: "Meeting with Youth"
  }
];

const Gallery = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Gallery
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="relative group">
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-80 transition"
            />
            <p className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded text-sm">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
