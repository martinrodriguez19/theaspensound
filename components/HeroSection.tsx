import Image from "next/image";
import Link from "next/link";
import Banda from "../public/images/bs.png"

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container-custom grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="headline-text">
            THE ASPEN SOUND -
            <br />
            Banda en vivo.
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl">
            Reviviendo los clásicos que marcaron generaciones. 
            Repertorios de los 70s, 80s y 90s. <br/> Fundada en Pilar, Buenos Aires Argentina.
          </p>
          <div className="pt-4">
            <Link href="/contacto" className="btn-primary">
              CONTRATAR AHORA
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative h-[400px] lg:h-[600px] opacity-80">
          <Image
            src={Banda}
            alt="The Aspen Sound en vivo"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}