import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [mobileNestedDropdown, setMobileNestedDropdown] = useState(null); // State for nested menus in mobile
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => setDropdown(menu);
  const handleMouseLeave = () => {
    setDropdown(null);
    setNestedDropdown(null);
  };

  const handleNestedMouseEnter = (nestedTitle) => {
    setNestedDropdown(nestedTitle);
  };

  const handleMenuItemClick = (menu) => {
    switch (menu) {
      case "Our Company":
        navigate("/our-company");
        break;
      case "Products & Solutions":
        navigate("/products-and-solutions");
        break;
      case "Media":
        navigate("/media-news");
        break;
      case "Career":
        navigate("/career");
        break;
      case "Contact":
        navigate("/contact");
        break;
      default:
        break;
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleNavigation = (path) => {
    navigate(
      `/products-and-solutions/${path.toLowerCase().split(" ").join("-")}`
    );
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileNestedDropdown(null); // Reset nested dropdown when toggling mobile menu
  };

  const handleMobileNestedMenu = (title) => {
    setMobileNestedDropdown(mobileNestedDropdown === title ? null : title);
  };

  const menuData = {
    "Our Company": {
      paragraph: {
        heading: "Who we are",
        content:
          "ICG Specialty Chemicals FZCO is a leading provider of specialty chemicals, recognized for our commitment to quality and innovation.",
      },
      items: [
        { title: "About ICG Chemicals", link: "/about-us" },
        { title: "ICG Management", link: "/icg-management" },
        { title: "ICG History", link: "/our-history" },
      ],
    },
    "Products & Solutions": {
      paragraph: {
        heading: "Our Solutions",
        content:
          "Our extensive product range includes Antioxidants, HALS, UV absorbers, Optical brighteners, and more.",
      },
      items: [
        {
          title: "ICG Market",
          nested: [
            "Adhesive and Sealants",
            "Agriculture Feed and Food",
            "Automotive",
            "Building and Construction",
            "Electronics",
            "Medical and Pharmaceutical",
            "Paints and Coating",
            "Personal and Home Care",
            "Printing and Packaging",
          ],
        },
        { title: "Product Finder", link: "/product-finder" },
        {
          title: "Chemical Categories",
          nested: [
            "Antioxidants (NA)",
            "Hindered Amine Light Stabilizers (HALS)",
            "UV Absorbers",
            "Flame Retardants",
            "Optical Brighteners (OB)",
            "Pigments and Dyes",
            "Polymers and Resins",
            "Nucleating Agents",
            "Masterbatch",
            "Anti Blocks",
            "Polymer Additives",
            "Plasticizers",
            "Compound",
          ],
        },
      ],
    },
    Media: {
      paragraph: {
        heading: "Newsroom",
        content:
          "What's going on in ICG. Stay connected with our news and events.",
      },
      items: [
        { title: "Media and News", link: "/media-news" },
        { title: "Blog & Articles", link: "/blog-articles" },
        { title: "Events", link: "/media-events" },
      ],
    },
    Career: {
      paragraph: {
        heading: "Career",
        content:
          "At ICG, we offer exciting career opportunities in a dynamic and innovative environment.",
      },
      items: [
        { title: "Life at ICG", link: "/life-at-icg" },
        { title: "Career", link: "/icg-career" },
      ],
    },
    Contact: {
      paragraph: {
        heading: "Contact",
        content:
          "Have questions or need assistance? Reach out to us through our contact page.",
      },
      items: [{ title: "Contact", link: "/contact" }],
    },
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[1000] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center" onClick={() => navigate("/")}>
          <img
            src="../logo.png"
            alt="Logo"
            className="h-full w-16 object-cover cursor-pointer"
            // className=" w-16 object-cover cursor-pointer"
          />
        </div>
        {/* <img src="../logo.png" /> */}

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navbar Items */}
        <div className="hidden md:flex space-x-6 items-center">
          {Object.keys(menuData).map((menu) => (
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu)}
              key={menu}
            >
              <button
                className="flex items-center text-gray-700 font-bold hover:text-[#8AA823] focus:outline-none cursor-pointer"
                onClick={() => handleMenuItemClick(menu)}
              >
                {menu}{" "}
                <span className="ml-1">
                  <img src="../navbar/down-arrow.png" alt="" />
                </span>
              </button>
            </div>
          ))}

          {/* Icons */}
          <div className="flex space-x-4 items-center">
            <img src="../navbar/moon.png" alt="theme-icon" />
            <img src="../navbar/earth.png" alt="website icon" />
            <img src="../navbar/search.png" alt="search icon" />
          </div>

          {/* Button */}
          <Link
            to="/available-stocks"
            className="ml-4 px-4 py-2 bg-[#8AA823] text-white font-bold rounded cursor-pointer"
          >
            Available Stocks
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 overflow-y-auto bg-white z-[1000] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          {Object.keys(menuData).map((menu) => (
            <div key={menu}>
              <button
                className="text-gray-700 font-bold text-lg w-full text-left"
                onClick={() => handleMenuItemClick(menu)}
              >
                {menu}
              </button>
              {menuData[menu].items && (
                <div className="pl-4 mt-2 space-y-2">
                  {menuData[menu].items.map((item, index) => (
                    <div key={index}>
                      {item.link ? (
                        <Link
                          to={item.link}
                          className="text-gray-600 hover:text-[#8AA823]"
                          onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on click
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <div>
                          <button
                            className="text-gray-600 hover:text-[#8AA823] cursor-pointer w-full text-left"
                            onClick={() => handleMobileNestedMenu(item.title)}
                          >
                            {item.title}{" "}
                            {item.nested && <span className="ml-2">→</span>}
                          </button>
                          {mobileNestedDropdown === item.title &&
                            item.nested && (
                              <div className="pl-4 mt-2 space-y-2">
                                {item.nested.map((nestedItem, nestedIndex) => (
                                  <div
                                    key={nestedIndex}
                                    className="text-gray-600 hover:text-[#8AA823] cursor-pointer"
                                    onClick={() => handleNavigation(nestedItem)}
                                  >
                                    {nestedItem}
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Dropdown (Desktop) */}
      {dropdown && (
        <div
          className="absolute left-0 top-full w-full bg-white shadow-lg p-8 px-48"
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-3 gap-6">
            {/* Paragraph Content */}
            {menuData[dropdown].paragraph && (
              <div>
                <h3 className="font-bold text-gray-600">
                  {menuData[dropdown].paragraph.heading}
                </h3>
                <p className="text-sm text-gray-600">
                  {menuData[dropdown].paragraph.content}
                </p>
              </div>
            )}

            {/* Menu Items */}
            {menuData[dropdown].items && (
              <div className="space-y-4">
                {menuData[dropdown].items.map((item, index) => (
                  <div key={index} className="relative">
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="font-bold text-gray-700 hover:underline hover:text-[#8AA823] cursor-pointer"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <div
                        className="font-bold text-gray-700 hover:underline hover:text-[#8AA823] cursor-pointer"
                        onMouseEnter={() =>
                          item.nested && handleNestedMouseEnter(item.title)
                        }
                      >
                        {item.title}{" "}
                        {item.nested && <span className="ml-2">→</span>}
                      </div>
                    )}

                    {/* Nested Items */}
                    {nestedDropdown === item.title && item.nested && (
                      <div className="absolute left-full top-0 bg-white border-l border-gray-200 shadow-lg p-4 space-y-2 w-48 overflow-y-auto overflow-x-hidden max-h-64">
                        {item.nested.map((nestedItem, nestedIndex) => (
                          <div
                            key={nestedIndex}
                            className="text-gray-600 hover:underline hover:text-[#8AA823] cursor-pointer"
                            onClick={() => handleNavigation(nestedItem)}
                          >
                            {nestedItem}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
