import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState } from "react";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  return (
    <div>
      <section className="text-center roundfed-lg bg-secondary shadow-md p-8 mb-8">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          className="mx-auto mb-4 w-full max-w-4xl"
        >
          <div>
            <img
              src="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg1MjU3OTI0MDAyNTg4MzA3/20-greatest-paintings-of-modern-art.jpg"
              alt="Image 1"
            />
          </div>
          <div>
            <img
              src="https://images-prod.dazeddigital.com/786/azure/dazed-prod/1080/9/1089113.jpg"
              alt="Image 2"
            />
          </div>
          <div>
            <img
              src="https://cdn.thecollector.com/wp-content/uploads/2022/02/modern-art-vs-contemporary-art-artworks.jpg"
              alt="Image 3"
            />
          </div>
        </Carousel>

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
        <div className="rounded-lg bg-secondary shadow-md p-6">
          <img
            src="https://cdn.sortiraparis.com/images/80/101654/868211-eternal-mucha-l-incroyable-exposition-sur-l-art-nouveau-debarque-au-grand-palais-immersif-img-1070.jpg"
            alt="Eternal Elegance Exhibition"
            className="mx-auto mb-4 w-full max-w-3xl"
          />
          <div className="text-right">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Eternal Elegance: Renaissance Masterpieces
            </h3>
            <p className="text-gray-700">
              Experience the magic of our latest exhibition: 'Eternal Elegance:
              Renaissance Masterpieces.' Journey back in time to an era of
              unparalleled creativity and sophistication. Marvel at the
              intricate brushstrokes of Da Vinci, the divine compositions of
              Raphael, and the timeless allure of Botticelli's Birth of Venus.
              Be captivated by the beauty and grandeur of the Renaissance.
            </p>
            <button className="mt-4 px-6 py-2 bg-quaternary text-slate-50 rounded-lg hover:bg-tertiary">
              Explore Renaissance Masterpieces
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-secondary shadow-md p-6">
          <img
            src="https://i.pinimg.com/564x/06/51/c0/0651c057f5c9bc8b4a372659631a6900.jpg"
            alt="Modern Marvels Exhibition"
            className="mx-auto mb-4 w-full max-w-md"
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
    </div>
  );
}
