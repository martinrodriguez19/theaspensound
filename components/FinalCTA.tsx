import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom text-center space-y-6">
        <h2 className="headline-text">
          CONTRATÁ A THE ASPEN SOUND
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Hacé de tu evento una experiencia inolvidable. 
          Consultanos por tu fecha y te armamos una propuesta a medida.
        </p>
        <div className="pt-6">
          <Link href="/contacto" className="btn-primary text-lg px-12 py-4">
            CONSULTAR DISPONIBILIDAD
          </Link>
        </div>
      </div>
    </section>
  );
}