/* eslint-disable react/prop-types */
function IcgFullImageSection({ fullImage }) {
  return (
    <div className="relative mb-16">
      <img
        src={fullImage}
        alt="About ICG"
        className="w-full rounded-xl object-cover object-center h-full"
        style={{ width: "1235.96px", height: "427.22px" }}
      />
    </div>
  );
}

export default IcgFullImageSection;