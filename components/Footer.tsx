import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.png";


export default function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#000000', borderTop: '1px solid #374151' }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image width={100} height={100} className="w-18 h-18" src={Logo} alt="Logo" />
            
     
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="https://e-ticketpro.com/event/690f5e691fd3b54d40e68e5e" className="hover:text-white transition-colors">Próximo Evento</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider">Contacto</h4>
            <p className="text-gray-400">
              info@theaspensound.com.ar
              <br />
              +54 9 11 5308-1348
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 text-center text-gray-400" style={{ borderTop: '1px solid #374151' }}>
          <p>&copy; 2025 The Aspen Sound. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}