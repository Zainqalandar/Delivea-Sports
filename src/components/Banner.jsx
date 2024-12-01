// components/Banner.jsx
export default function Banner() {
    return (
      <div className="bg-black text-white text-sm py-2 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <p className="uppercase tracking-wider text-center">
            Yes! We Ship to Pakistan! 
          </p>
          <a 
            href="#" 
            className="mt-2 text-blue-400 underline font-medium hover:text-blue-300 transition-colors text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }