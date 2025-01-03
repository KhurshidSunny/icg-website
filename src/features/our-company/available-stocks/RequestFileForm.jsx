/* eslint-disable react/prop-types */

function RequestFileForm({ product, onClose }) {
  console.log(product.name);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg p-8 w-full max-w-xl shadow-lg">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {/* Form Heading */}
        <h2 className="text-[#8AA323] text-2xl font-bold text-center mb-4">
          Request a File
        </h2>

        {/* Product Name */}
        <p className="text-center text-gray-700  mb-6 font-bold">
          {product.name}
        </p>

        {/* Form Inputs */}
        <form>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323]"
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323]"
            />
            <input
              type="text"
              placeholder="Interested In"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323]"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8AA323] resize-none"
              rows="4"
            ></textarea>
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
  );
}

export default RequestFileForm;
