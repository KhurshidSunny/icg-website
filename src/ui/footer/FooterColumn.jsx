/* eslint-disable react/prop-types */

export const FooterColumn = ({ title, items }) => {
  return (
    <div className="flex flex-col space-y-4 w-full lg:w-1/5">
      <div className="flex flex-col items-start text-white">
        <div className="text-lg font-bold whitespace-nowrap">{title}</div>
        <div className="mt-2 mb-4 w-12 h-1 bg-white" />
        <div className="flex flex-col space-y-2 flex-grow">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm text-white hover:opacity-80 transition-opacity whitespace-nowrap"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
