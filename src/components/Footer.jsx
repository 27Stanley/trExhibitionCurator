import React from "react";

export default function footer() {
  return (
    <div>
      <section className="text-center rounded-lg bg-primary shadow-md p-4 mt-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-base text-gray-700 max-w-screen-2xl mx-auto">
          ExiCura believe that art has the power to inspire, educate, and
          transform lives. Our mission is to make the world's cultural heritage
          accessible to everyone, regardless of geographical barriers. Whether
          you're an art enthusiast, a history buff, or simply curious, our app
          offers a gateway to explore the rich tapestry of human creativity.
          Join us on this journey of discovery and unlock the secrets of the
          past.
        </p>
        <p class="text-gray-600">
          Contact Us: exicura@email.com | Phone: 07123 456 789
        </p>
      </section>
    </div>
  );
}
