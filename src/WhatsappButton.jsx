import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppButton() {
  const phoneNumber = "+971564845145"; // Replace with your number
  const message = encodeURIComponent("Hello");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed z-50 bottom-4 right-4">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
          <FaWhatsapp className="text-xl" /> Chat on WhatsApp
        </button>
      </a>
    </div>
  );
}

export default WhatsAppButton;
