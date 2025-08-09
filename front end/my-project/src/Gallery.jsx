import React from "react";

const galleryImages = [
  {
    src: "https://www.foodsecurityportal.org/sites/default/files/featured-image/2021-07/8163387238_adc735ce18_h.jpg",
        caption: "Child Labor in the Fields"
  },
  {
    src: "https://data.unicef.org/wp-content/uploads/2019/12/60.jpg",
    caption: "Living in Poverty"
  },
  {
    src: "https://images.unsplash.com/photo-1591166877427-775ac88c7a8c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA0OXwwfDF8c2VhY2h8Mnx8cGVvZGxlX3ZpbGxhZ2V8ZW58MHx8fHx8fDE2Nzk0NzY5MDA&ixlib=rb-1.2.1&q=80&w=400",
    caption: "Rural Poverty and Struggles"
  },
  {
    src: "https://thumbs.dreamstime.com/b/rural-poverty-37497032.jpg",
    caption: "Underprivileged Rural Children"
  },
  {
    src: "https://cc.gfamedia.org/special-report/child-labor/young-boys-working-construction.jpg",
    caption: "Child Labor in Construction"
  }
];

const Gallery = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Social Issues Gallery
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
