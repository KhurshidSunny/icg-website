/* eslint-disable react/prop-types */
function IcgFullImageSection({ fullImage }) {
  return (
    <div className="mb-12">
      <img
        src={fullImage}
        alt="Full Width Image"
        className="w-full h-64 sm:h-72 lg:h-80 rounded-lg object-cover"
      />
    </div>
  );
}

export default IcgFullImageSection;