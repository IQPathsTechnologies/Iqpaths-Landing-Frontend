import React from 'react';
// import 'tailwindcss/tailwind.css';

export default function SuccessCard() {
  const thumbnails = [
    {
      src: 'https://plus.unsplash.com/premium_photo-1755925219754-a5ab64ee3609?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
      alt: 'Team meeting',
    },
    {
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Office workspace',
    },
    {
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Technology dashboard',
    },
    {
      src: 'https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Business presentation',
    },
    {
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Team celebration',
    },
    {
      src: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Innovation lab',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-white p-5">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full grid md:grid-cols-2 transition-all duration-500 min-h-[520px] hover:shadow-3xl hover:-translate-y-2 transform-gpu">
        {/* Text Section */}
        <div className="bg-gradient-to-br from-[#f9faff] to-[#eaf0ff] p-12 flex flex-col justify-center animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 shadow-lg animate-pulse">
            Success Story
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-snug">Revolutionary AI Platform Launch</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Our groundbreaking AI platform has transformed how businesses approach automation and intelligence. With cutting-edge machine learning algorithms and intuitive user interfaces, we've empowered over 10,000 companies to streamline operations and boost productivity by 40%.
          </p>
          <div className="flex gap-8 mb-6">
            {[
              { label: 'Active Users', value: '10K+' },
              { label: 'Efficiency Boost', value: '40%' },
              { label: 'Satisfaction', value: '98%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-indigo-600 font-bold text-2xl block">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Achievement Date: <span className="font-semibold text-gray-700">March 2024</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden group min-h-[520px] bg-black rounded-r-3xl">
          {/* Main & Hover Image */}
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Tech Innovation"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 backdrop-blur-sm p-4 flex flex-col items-center justify-start">
            <div className="text-white text-lg font-semibold text-center py-3 w-full border-b border-white/20 mb-4 tracking-wide">
              Our Success Gallery
            </div>
            <div className="grid grid-cols-3 gap-3 w-full">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className="w-full h-24 rounded-md overflow-hidden border-2 border-white cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:border-indigo-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
