'use client'
import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const SliderExample = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aBhloyMLx5qA6G6wSEi0s9AvDu1r7utrbQ&s",
    "https://images.theconversation.com/files/565558/original/file-20231213-19-gdxrq.jpg?ixlib=rb-4.1.0&rect=17%2C53%2C5973%2C3934&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    "https://d2zp5xs5cp8zlg.cloudfront.net/image-81942-800.jpg",
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400"
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out gap-4"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={handlePrev} className="bg-gray-800 text-white p-2 rounded-full">
          <FaArrowLeft />
        </button>
        <button onClick={handleNext} className="bg-gray-800 text-white p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default SliderExample