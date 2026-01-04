import React from "react";
import { Link } from "react-router-dom";

const MoreHomeSec = () => {
  return (
    <div>
      {/* 3. Share Food CTA */}
      <section className="py-16 bg-green-50 text-center px-4">
        <h2 className="text-3xl font-semibold">Have Extra Food?</h2>
        <p className="mt-3">
          Share your surplus food and make someone’s day better.
        </p>
        <Link
          to={"/add-food"}
          className="mt-5 px-6 inline-block py-3 bg-green-600 text-white rounded"
        >
          Share Food
        </Link>
      </section>

      {/* 4. Community Impact / Statistics */}
      <section className="py-16 px-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-green-600">1K+</h3>
            <p>Meals Shared</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-600">500+</h3>
            <p>Active Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-600">50+</h3>
            <p>Communities</p>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-16 bg-white px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What People Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">
              “PlateShare helped me donate extra food easily instead of wasting
              it. The process is simple and meaningful.”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Ayesha Rahman</h4>
              <span className="text-sm text-gray-500">Food Donor</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">
              “As a student, PlateShare has been a great support. I received
              food respectfully and safely.”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Tanvir Ahmed</h4>
              <span className="text-sm text-gray-500">Food Receiver</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {/* FAQ 1 */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold">Is PlateShare free to use?</h4>
            <p className="mt-2 text-gray-600">
              Yes. PlateShare is completely free for both food donors and
              receivers.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold">Who can share food on PlateShare?</h4>
            <p className="mt-2 text-gray-600">
              Any registered user can share surplus food as long as it is safe
              and fresh.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold">How do I request food?</h4>
            <p className="mt-2 text-gray-600">
              Browse available food items and send a request directly to the
              donor.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold">Is my information secure?</h4>
            <p className="mt-2 text-gray-600">
              Yes. We use Firebase authentication and JWT to keep your data
              secure.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Community Guidelines
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Fresh & Safe Food</h4>
            <p className="mt-2 text-gray-600">
              Only share food that is fresh, safe, and properly stored.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Respectful Communication</h4>
            <p className="mt-2 text-gray-600">
              Be polite and respectful when sending or receiving requests.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Honest Listings</h4>
            <p className="mt-2 text-gray-600">
              Provide accurate details about food quantity and pickup time.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Trust & Safety
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <p className="text-gray-600">
            PlateShare prioritizes user safety through verified accounts and
            secure communication.
          </p>
          <p className="text-gray-600">
            All users are authenticated, and requests are monitored to ensure a
            safe food-sharing experience.
          </p>
        </div>
      </section>
      {/* 7. Newsletter / Final CTA */}
      <section className="py-16 text-white bg-white text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-600 ">
          Join PlateShare Today
        </h2>
        <p className="mt-3 text-gray-600 ">
          Be part of the movement to reduce food waste.
        </p>
        <button className="mt-5 px-6 py-3 font-semibold cursor-pointer bg-green-600 text-white rounded">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default MoreHomeSec;
