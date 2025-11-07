// app/contacto/ContactForm.tsx
"use client";

import { sendEmail } from "@/app/contacto/actions";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  repertoire: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    repertoire: "aspen",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await sendEmail(formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        repertoire: "aspen",
      });
    } catch (err) {
      setError("Ocurrió un error al enviar el formulario. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#191919] border border-gray-700 rounded-md text-white focus:outline-none focus:border-violet-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#191919] border border-gray-700 rounded-md text-white focus:outline-none focus:border-violet-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#191919] border border-gray-700 rounded-md text-white focus:outline-none focus:border-violet-500"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
          Fecha de contratación
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#191919] border border-gray-700 rounded-md text-white focus:outline-none focus:border-violet-500"
        />
      </div>

      <div>
        <label htmlFor="repertoire" className="block text-sm font-medium text-gray-300 mb-2">
          Repertorio
        </label>
        <select
          id="repertoire"
          name="repertoire"
          value={formData.repertoire}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#191919] border border-gray-700 rounded-md text-white focus:outline-none focus:border-violet-500"
        >
          <option value="aspen">Aspen</option>
          <option value="beatles">Beatles</option>
          <option value="acustico">Acústico</option>
          <option value="personalizado">Personalizado</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-[#191919] border border-gray-700 rounded-md text-white focus:outline-none focus:border-violet-500"
        />
      </div>

      {success && (
        <p className="text-center text-green-500 font-medium">Formulario completado con éxito.</p>
      )}
      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 text-lg disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}