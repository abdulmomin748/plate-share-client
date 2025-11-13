import React from "react";
import { Upload, Search, Package } from "lucide-react";

export default function HowItWorks() {
  return (
    <div
      data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
      className=" mt-10 mb-10 from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community in fighting food waste. It's simple, fast, and
            makes a real difference.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1: Post Food */}
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-gray-300"></div>
            </div>

            <div className="flex flex-col items-center text-center group">
              {/* Icon Circle */}
              <div className="bg-emerald-100 text-emerald-600 w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Upload className="w-12 h-12" strokeWidth={2} />
              </div>

              {/* Step Number */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Post Food
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share your surplus food with the community. Upload photos, add
                details, and set pickup times.
              </p>
            </div>
          </div>

          {/* Step 2: Find Food */}
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-gray-300"></div>
            </div>

            <div className="flex flex-col items-center text-center group">
              {/* Icon Circle */}
              <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Search className="w-12 h-12" strokeWidth={2} />
              </div>

              {/* Step Number */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Find Food
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Browse available food items nearby. Filter by category,
                location, and dietary preferences.
              </p>
            </div>
          </div>

          {/* Step 3: Collect Food */}
          <div className="relative">
            <div className="flex flex-col items-center text-center group">
              {/* Icon Circle */}
              <div className="bg-orange-100 text-orange-600 w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Package className="w-12 h-12" strokeWidth={2} />
              </div>

              {/* Step Number */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                Collect Food
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Request items you need and arrange pickup. Connect with donors
                and reduce food waste together.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-15">
          <button className="cursor-pointer bg-green-900 hover:bg-green-600 text-white font-semibold py-3 px-14 rounded-sm transition duration-300 ease-in-out  ">
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}
