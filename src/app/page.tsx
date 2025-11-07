/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Music, Mic2, Guitar, Radio } from "lucide-react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import AnimatedBanner from "../../components/AnimatedBanner";
import ServiceCard from "../../components/ServiceCard";
import LogosCarousel from "../../components/LogosCarrusel";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import Apple from "../../public/images/apple.gif"
import Acustico from "../../public/images/acustico.gif"
import Aspen from "../../public/images/aspen.gif"
import Bsas from "../../public/images/bsasvip.png"
import AudioPlayer from "../../components/AudioPlayer";


export default function HomePage() {
  const services = [
    {
      image: Aspen,
      title: "Aspen",
      description: "Los mejores éxitos de los 70s, 80s y 90s.",
    },
    {
      image: Apple,
      title: "The Beatles",
      description: "Repertorio tributo a la legendaria banda.",
    },
    {
      image: Acustico,
      title: "Acústico",
      description: "Sets íntimos y emotivos para eventos.",
    },
  ];
  const testimoniales = [
    { id: 1, text: "¡Increíble banda! Hicieron que nuestra fiesta fuera inolvidable." },
    { id: 2, text: "Profesionalismo y talento. 100% recomendados." },
    { id: 3, text: "La mejor banda de covers de Buenos Aires sin dudas." },
    { id: 4, text: "Repertorio excelente y gran presencia escénica." },
  ];

  const testimonials = Array.from({ length: 16 }).map((_, i) => ({
    id: i + 1,
    image: `/images/testimonios/testimonio${i + 1}.png`,
  }));

  return (
    <>
      <Navbar />
      
      <main className="mt-16">
        <HeroSection />
        
        <AnimatedBanner />

        {/* Services/Repertoire */}
        <section className="py-20" style={{ backgroundColor: '#191919' }}>
          <div className="container-custom">
            <h2 className="headline-text text-center mb-4">REPERTORIOS</h2>
            <p className="text-center text-xl mb-12 text-gray-400">
              Tres décadas de rock en un show
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden"
                  style={{ 
                    backgroundColor: '#000000',
                    border: '1px solid #374151'
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-3xl mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contacto" className="btn-primary">
                SOLICITAR REPERTORIO 
              </Link>
            </div>
          </div>
        </section>

        {/* About Us + Image */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: About Text */}
              <div className="space-y-6">
                <h2 className="headline-text">SOBRE NOSOTROS</h2>
                <div className="newspaper-column text-gray-300">
                  <p className="mb-4">
                    The Aspen Sound es una banda argentina dedicada a interpretar los grandes clásicos internacionales de las décadas de los 70, 80 y 90. Con una formación de músicos talentosos y un enfoque apasionado por revivir la magia de esta era dorada de la música, la banda ha logrado capturar la esencia de artistas icónicos como Bryan Adams, The Beatles, Queen, Rod Stewart, David Bowie, Toto,  Eric Clapton, Sting,  entre muchos otros.

                  </p>
                  <p className="mb-4">
                    Beto Rodríguez, como fundador y guitarrista rítmico, lidera el grupo con su visión artística; Alan Leal Dasso, en el bajo, y voz principal a Sebastián Larroca, como guitarrista líder, recrea los solos y riffs emblemáticos con maestría; Gabriel Whright, en los teclados, reproduce las atmósferas distintivas de los 80; y Nano Durand, en la batería, imprime la fuerza y precisión necesarias para cada tema. Como vocalista invitado, Nico Furman se suma al grupo, aportando su voz rasposa y poderosa, ideal para los clásicos de la época.

                  </p>
           
                </div>

              </div>

              {/* Right: Band Image */}
              <div className="relative h-[500px]">
                <Image
                  src={Bsas}
                  alt="The Aspen Sound - Banda completa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>  <LogosCarousel />
   <AudioPlayer />
        {/* Logos Carousel */}
      

        {/* Testimonials */}
      {/* Testimonials - Convertido en carrusel de capturas de pantalla */}
       <section className="py-20" style={{ backgroundColor: '#191919' }}>
          <div className="container-custom">
            <h2 className="headline-text text-center mb-12">TESTIMONIOS</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimoniales.map((testimoniales) => (
                <div
                  key={testimoniales.id}
                  className="p-6"
                  style={{ 
                    backgroundColor: '#000000',
                    border: '1px solid #374151'
                  }}
                >
                  <p className="text-lg italic leading-relaxed">
                    "{testimoniales.text}"
                  </p>
 
                </div>
              ))}
            </div>
                    <p className="text-center text-xl my-6 text-gray-200">
              De nuestros shows en vivo y eventos privados:
            </p>
            <div className="grid mt-2 md:grid lg:grid  sm:hidden xs:hidden md:grid-cols-2 lg:grid-cols-4 ">
              
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-2"
              
                >
                  <div className="relative  h-10"> {/* Ajusta h-64 según el aspect ratio de tus capturas para que sean 'chicas' */}
                    <Image
                      src={testimonial.image}
                      alt={`Testimonial ${testimonial.id}`}
                      fill
                      className="md:object-cover lg:object-cover sm:object-contain xs:object-contain xl:object-cover rounded-md" // object-contain para mantener proporciones, rounded para bordes suaves
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
        
        <Footer />
      </main>
    </>
  );
}