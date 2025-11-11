import React from "react";
import errorImage from '../assets/error-404.png'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-8">
      <div className="max-w-2xl w-full text-center">
        <title>Error Page - 404</title>
        
        {/* Image Container */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <img 
              src={errorImage}
              alt="404 Not Found"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Oops, page not found!
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto">
            The page you are looking for is not available
          </p>

          {/* Button */}
          <div className="pt-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Go Back!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
