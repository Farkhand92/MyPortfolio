import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const bg = "bg-gradient-to-br from-violet-800 to-black shadow-violet-800 shadow-lg text-white";

export default function ContactUs() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSending, setIsSending] = useState(false); // Track sending state

  const onSubmit = (data) => {
    setIsSending(true); // Disable button and show "Sending..."
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent!");
        reset();        // Clear all form fields
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setIsSending(false); // Re-enable button after sending
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center w-full form">
      <div className={`min-height-[95%] md:max-h-screen w-md lg:w-lg 2xl:w-3xl ${bg} p-6 rounded-xl border border-white/20`}>
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h1>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-white">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full mt-1 p-2 rounded bg-white/20 text-white focus:outline-none"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-300 text-sm">Name is required.</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-white">Email</label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full mt-1 p-2 rounded bg-white/20 text-white focus:outline-none"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-300 text-sm">Valid email required.</p>}
          </div>

          {/* Message */}
          <div>
            <label className="text-white">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full mt-1 p-2 rounded bg-white/20 text-white focus:outline-none"
              rows="5"
              placeholder="Your message..."
            />
            {errors.message && <p className="text-red-300 text-sm">Message is required.</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-2 rounded font-semibold transition ${
              isSending ? "bg-gray-500 cursor-not-allowed" : "bg-violet-600 hover:bg-violet-700 text-white"
            }`}
            disabled={isSending} // disable while sending
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex items-center justify-center space-x-6 text-white">
          <a href="https://wa.me/923311112288?text=Hello%20I%20visited%20your%20portfolio" target="_blank" className="hover:text-green-400 transition">
            <FaWhatsapp size={32} />
          </a>
          <a href="https://www.linkedin.com/in/farkhand-waqar-84117335a/" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:farkhandwaqar786@gmail.com" className="hover:text-yellow-300 transition">
            <FaEnvelope size={32} />
          </a>
          <a href="tel:+923311112288" className="hover:text-teal-300 transition">
            <FaPhoneAlt size={32} />
          </a>
        </div>
      </div>
    </form>
  );
}
