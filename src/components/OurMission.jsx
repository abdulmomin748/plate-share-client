import React from 'react';
import { Heart, Users, Leaf } from 'lucide-react';
const OurMission = () => {
    return (
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
            <div className="py-16 px-4  sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Our Mission
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light">
                        To build a community where no food goes to waste and no one goes hungry. 
                        We connect those who have extra with those who need it, creating a sustainable 
                        cycle of sharing and caring.
                    </p>
                    </div>

                    {/* Values */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassion</h3>
                        <p className="text-gray-600 text-sm">Care for our community</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                        <p className="text-gray-600 text-sm">Stronger together</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Leaf className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
                        <p className="text-gray-600 text-sm">Protect our planet</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;