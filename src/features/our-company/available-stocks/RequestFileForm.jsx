/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function RequestFileForm({ product, onClose }) {


  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data); // Log form data to the console
    toast.success("Message sent successfully!"); // Show success notification
    reset(); // Reset the form after submission
  };

  return (
    <>
      {/* React Hot Toast Notification */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Modal Overlay */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
        {/* Modal Box */}
        <div className="relative bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>

          {/* Form Heading */}
          <h2 className="text-[#8AA323] text-2xl font-bold text-center mb-2">
            Request a File
          </h2>

          {/* Product Name */}
          <p className="text-center text-gray-700 mb-6 font-bold">
            {product?.name}
          </p>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Name Field */}
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              {/* Email Field */}
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Phone Field */}
              <input
                type="tel"
                placeholder="Phone No"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}

              {/* Interested In Field */}
              <input
                type="text"
                placeholder="Interested In"
                {...register("interestedIn", {
                  required: "This field is required",
                })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323]"
              />
              {errors.interestedIn && (
                <p className="text-red-500 text-sm">
                  {errors.interestedIn.message}
                </p>
              )}

              {/* Message Field */}
              <textarea
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323] resize-none"
                rows="3"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Send Button */}
            <div className="mt-6 text-left">
              <button
                type="submit"
                className="bg-[#023B3B] text-white px-6 py-2 rounded-lg flex items-center hover:bg-[#8AA323]"
              >
                Send <span className="ml-2">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RequestFileForm;