"use client";

import Image from "next/image";
import HardRock from "../public/images/hard-rock.png"
import Inside from "../public/images/inside.png"
import Temple from "../public/images/temple.png"
import Roxy from "../public/images/roxy.png"
import Irlandes from "../public/images/irlandes.png"
import Tavern from "../public/images/tavern.png"
import Cañada from "../public/images/canada.png"
import Casilda from "../public/images/casilda.png"

export default function LogosCarousel() {
  // Estos serían los logos de los bares/venues
  const venues = [  

    { name: "Tavern 1747", logo: Tavern },       
    { name: "Inside Cabildo", logo: Inside },

    { name: "Hard Rock Cafe", logo: HardRock },
    { name: "Temple", logo: Temple },
    { name: "The Roxy", logo: Roxy },
    { name: "El Irlandes", logo: Irlandes }, 
    { name: "Teatro Cañada", logo: Cañada },
    { name: "Teatro Dante", logo:Casilda },
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container-custom mb-8">
        <h3 className="text-center text-2xl font-serif mb-2">DONDE NOS PRESENTAMOS</h3>
        <p className="text-center text-gray-400">Escenarios que confían en nosotros</p>
      </div>
      
      {/* Desktop con animación */}
      <div className="hidden md:block relative">
        <div className="flex">
          <div className="animate-scroll whitespace-nowrap flex items-center">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center">
                {venues.map((venue, index) => (
                  <div
                    key={`${groupIndex}-${index}`}
                    className="mx-8  transition-all duration-300"
                  >
                    <div className="w-32 h-20 relative flex items-center justify-center  px-4 py-2 rounded">
          
                      <Image
                        src={venue.logo}
                        alt={venue.name}
                        fill
                        className="object-contain"
                      />
             
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile sin animación */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4 px-4">
          {venues.slice(0, 8).map((venue, index) => (
            <div
              key={index}
              className="bg-white/5 p-4  rounded flex items-center justify-center"
            >                    <div className="w-32 h-20 relative flex items-center justify-center  px-4 py-2 rounded">

                 <Image
                        src={venue.logo}
                        alt={venue.name}
                        fill
                        className="object-contain"
                      /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}