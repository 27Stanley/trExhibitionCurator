import React from "react";

export default function Home() {
  return (
    <div>
      {/* <h1 classNameName="text-3xl font-bold underline">Currently on HomeScreen</h1> */}

      <section className="text-center rounded-lg bg-primary shadow-md p-8 mb-8">
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/974/523/large_2x/discovering-the-artistic-treasures-of-vatican-museums-in-rome-photo.jpeg"
          alt="Artistic Treasures"
          className="mx-auto mb-4 w-full max-w-5xl"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Explore Artistic Treasures from Around the World
        </h2>
        <p className="text-gray-700">
          Immerse yourself in the beauty and wonder of custom generated
          exhibitions from the comfort of your home. Start the experience now
          and discover a treasure trove of artistic masterpieces spanning
          centuries.
        </p>
        <button className="mt-4 px-6 py-2 bg-quaternary text-slate-50 rounded-lg hover:bg-tertiary">
          Start Exploring
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg bg-primary shadow-md p-6">
          <img
            src="https://cdn.sortiraparis.com/images/80/101654/868211-eternal-mucha-l-incroyable-exposition-sur-l-art-nouveau-debarque-au-grand-palais-immersif-img-1070.jpg"
            alt="Eternal Elegance Exhibition"
            className="mx-auto mb-4 w-full max-w-5xl"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Eternal Elegance: Renaissance Masterpieces
          </h3>
          <p className="text-gray-700">
            Experience the magic of our latest exhibition: 'Eternal Elegance:
            Renaissance Masterpieces.' Journey back in time to an era of
            unparalleled creativity and sophistication. Marvel at the intricate
            brushstrokes of Da Vinci, the divine compositions of Raphael, and
            the timeless allure of Botticelli's Birth of Venus. Prepare to be
            captivated by the beauty and grandeur of the Renaissance.
          </p>
          <button className="mt-4 px-6 py-2 bg-quaternary text-slate-50 rounded-lg hover:bg-tertiary">
            Explore Renaissance Masterpieces
          </button>
        </div>
        <div className="rounded-lg bg-primary shadow-md p-6">
          <img
            src="https://i.pinimg.com/564x/06/51/c0/0651c057f5c9bc8b4a372659631a6900.jpg"
            alt="Modern Marvels Exhibition"
            className="mx-auto mb-4 w-full max-w-xl"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Modern Marvels: Contemporary Art
          </h3>
          <p className="text-gray-700">
            Step into the world of modern marvels where contemporary art pushes
            the boundaries of creativity and expression. From abstract
            masterpieces to cutting-edge installations, this exhibition
            celebrates the innovative spirit of today's artists. Explore the
            vibrant colors, unique textures, and thought-provoking themes that
            define contemporary art.
          </p>
          <button className="mt-4 px-6 py-2 bg-quaternary text-slate-50 rounded-lg hover:bg-tertiary">
            Explore Contemporary Art
          </button>
        </div>
      </section>

      <section className="text-center rounded-lg bg-primary shadow-md p-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700">
          ExiCura believe that art has the power to inspire, educate, and
          transform lives. Our mission is to make the world's cultural heritage
          accessible to everyone, regardless of geographical barriers. Whether
          you're an art enthusiast, a history buff, or simply curious, our app
          offers a gateway to explore the rich tapestry of human creativity.
          Join us on this journey of discovery and unlock the secrets of the
          past.
        </p>
      </section>
    </div>
  );
}
