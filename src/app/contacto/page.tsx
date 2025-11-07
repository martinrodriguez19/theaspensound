// app/contacto/page.tsx
import { Metadata } from 'next';
import ContactForm from '../../../components/ContactForm';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Contacto - The Aspen Sound',
  description: 'Contacta con la banda para contrataciones y consultas.',
};

export default function ContactoPage() {
  return (
    <>    <main className="min-h-screen flex items-center justify-center bg-black">
        <Navbar />
      <div className="container-custom py-20">
        <h1 className="headline-text text-center mb-4">CONTACTO</h1>
        <p className="text-center text-xl mb-12 text-gray-400">
          Envíanos tu consulta y nos pondremos en contacto a la brevedad.
        </p>
        <ContactForm />
      </div>
     
    </main> <Footer /></>
  );
}