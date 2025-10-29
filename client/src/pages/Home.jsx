import React from "react";
import Header from "../components/Header";

export default function Home() {
return ( <main> <Header />
      {/* Sekcja 1 – O szkole */}
      <section className="w-full px-[5%] lg:px-[10%] py-8 bg-[#F7F7F7]">
        <a
          href="/"
          className="float-right bg-[#93041C] text-white px-4 py-2 rounded-md font-bold no-underline hover:opacity-60 transition mb-4 inline-block"
        >
          O szkole <i className="fa-solid fa-arrow-right"></i>
        </a>
        <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-lg">
          <img
            src="/img/szkola.png"
            alt="Budynek szkoły"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </section>

      {/* Sekcja 2 – Strefy */}
      <section className="w-full px-[5%] lg:px-[10%] py-8 bg-white flex justify-between flex-wrap">
        <div className="w-[25vw] min-w-[250px]">
          <a href="/" className="block hover:scale-105 transition-transform">
            <img
              src="/img/uczen.png"
              alt="Uczeń"
              className="w-full h-[13vw] rounded-lg"
            />
          </a>
          <h2 className="text-lg sm:text-2xl lg:text-3xl text-gray-900 font-extrabold leading-none tracking-tight mb-1 mt-3">
            Strefa ucznia
          </h2>
          <p className="text-md sm:text-xl lg:text-2xl">
            Sprawdź aktualności, zmiany w planie lekcji, najbliższe dni wolne
          </p>
        </div>

        <div className="w-[25vw] min-w-[250px]">
          <a href="/" className="block hover:scale-105 transition-transform">
            <img
              src="/img/rodziccropped.png"
              alt="Rodzic"
              className="w-full h-[13vw] rounded-lg"
            />
          </a>
          <h2 className="text-lg sm:text-2xl lg:text-3xl text-gray-900 font-extrabold leading-none tracking-tight mb-1 mt-3">
            Strefa rodzica
          </h2>
          <p className="text-md sm:text-xl lg:text-2xl">
            Informacje o składkach, zebraniach, wycieczkach
          </p>
        </div>

        <div className="w-[25vw] min-w-[250px]">
          <a href="/" className="block hover:scale-105 transition-transform">
            <img
              src="/img/kandydatcropped.png"
              alt="Kandydat"
              className="w-full h-[13vw] rounded-lg"
            />
          </a>
          <h2 className="text-lg sm:text-2xl lg:text-3xl text-gray-900 font-extrabold leading-none tracking-tight mb-1 mt-3">
            Strefa kandydata
          </h2>
          <p className="text-md sm:text-xl lg:text-2xl">
            Dowiedz się więcej o poszczególnych kierunkach
          </p>
        </div>
      </section>

      {/* Sekcja 3 – Inicjatywy uczniowskie */}
      <section className="w-full px-[5%] lg:px-[10%] py-8 bg-[#F7F7F7] flex flex-wrap justify-between">
        {/* Obrazek */}
        <div className="w-full 2xl:w-[55%]">
          <img
            src="/img/inicjatywa.png"
            alt="Inicjatywa"
            className="w-full rounded-lg"
          />
        </div>

        {/* Tekst */}
        <div className="w-full 2xl:w-[45%] mt-8 2xl:mt-0 p-0 2xl:px-5">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gray-900 mb-5 font-extrabold leading-none tracking-tight">
            Inicjatywy uczniowskie
          </h2>

          <div className="p-2">
            <h3 className="text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 font-bold leading-none tracking-tight">
              Wolontariat
            </h3>
            <p className="text-lg sm:text-2xl lg:text-3xl leading-none">
              Dołącz do zespołu organizującego m.in. zbiórki pieniędzy na
              szczytne cele.
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 font-bold leading-none tracking-tight">
              Samorząd uczniowski
            </h3>
            <p className="text-lg sm:text-2xl lg:text-3xl leading-none">
              Masz pomysły na zmiany? Poznaj inne osoby, które biorą sprawy we
              własne ręce.
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 font-bold leading-none tracking-tight">
              Koła zainteresowań
            </h3>
            <p className="text-lg sm:text-2xl lg:text-3xl leading-none">
              Chcesz rozwijać swoje pasje? Dołącz do kół uczniowskich lub
              załóż własne!
            </p>
          </div>

          <div className="p-2 mt-6">
            <a
              href="/"
              className="bg-[#93041C] text-white px-4 py-2 rounded-md font-bold no-underline hover:opacity-60 transition inline-block"
            >
              Dowiedz się więcej <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Sekcja 4 – Firmy współpracujące */}
      <section className="w-full px-[5%] lg:px-[10%] py-8 bg-white clear-both">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl text-gray-900 mb-6 font-extrabold leading-none tracking-tight text-center sm:text-left">
          Firmy współpracujące
        </h2>
        <div className="grid grid-cols-2 2xl:grid-cols-4 gap-6 justify-items-center">
          <img
            src="/img/cisco.png"
            alt="Cisco"
            className="max-h-300 mix-blend-multiply brightness-110"
          />
          <img
            src="/img/polaris.png"
            alt="Polaris"
            className="max-h-300 mix-blend-multiply brightness-110"
          />
          <img
            src="/img/pzu.png"
            alt="Pzu"
            className="max-h-300 mix-blend-multiply brightness-110"
          />
          <img
            src="/img/toyota.png"
            alt="Toyota"
            className="max-h-300 mix-blend-multiply brightness-110"
          />
        </div>
      </section>
    </main>
  );
}
