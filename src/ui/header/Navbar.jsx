import { useState, useEffect, useRef } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../axios";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileNestedDropdown, setMobileNestedDropdown] = useState(null);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Ref to track dropdown element

  // Apply theme on component load
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fetch all products on component load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products", {
          params: { page: 1, limit: 50 },
        });
        if (response.status === 200) {
          setProducts(response.data?.data?.products || []);
        } else {
          console.error(`Unexpected status code: ${response.status}`);
        }
      } catch (err) {
        console.error("Error fetching products:", err.message);
      }
    };

    fetchProducts();
  }, []);

  // Detect mouse movement below dropdown
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dropdown && dropdownRef.current) {
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const isBelowDropdown = event.clientY > dropdownRect.bottom;

        if (isBelowDropdown) {
          setDropdown(null);
          setNestedDropdown(null);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dropdown]);

  // Handle search input change
  const handleSearchChange = (event) => {
    const term = event.target.value.trim().toLowerCase();
    setSearchTerm(term);

    if (term) {
      const matchedProducts = products.filter((p) =>
        p.name?.toLowerCase().includes(term)
      );
      setFilteredProducts(matchedProducts);
      if (matchedProducts.length === 0) {
        toast.error("No product found matching your search.");
      }
    } else {
      setFilteredProducts([]);
    }
  };

  // Toggle search input visibility
  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    setSearchTerm("");
    setFilteredProducts([]);
  };

  // Handle navigation to product details
  const handleProductClick = (productId) => {
    navigate(`/available-stocks/${productId}`);
    setShowSearchInput(false);
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Handle mouse enter for dropdown
  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  // Handle nested dropdown mouse enter
  const handleNestedMouseEnter = (nestedTitle) => {
    setNestedDropdown(nestedTitle);
  };

  // Handle menu item click (closes dropdown)
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
        navigate("/icg-career");
        break;
      case "Contact":
        navigate("/contact");
        break;
      default:
        break;
    }
    setDropdown(null); // Close dropdown on click
    setNestedDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Handle navigation for nested items (closes dropdown)
  const handleNavigation = (path) => {
    navigate(
      `/products-and-solutions/${path.toLowerCase().split(" ").join("-")}`
    );
    setDropdown(null); // Close dropdown on click
    setNestedDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileNestedDropdown(null);
  };

  // Handle mobile nested menu click
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
    <nav
      className={`bg-background-light dark:bg-background-dark shadow-md sticky top-0 z-[1000] py-4 ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center" onClick={() => navigate("/")}>
          <img
            src="../logo.png"
            alt="Logo"
            className="h-full w-16 object-cover cursor-pointer"
          />
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-text-light dark:text-text-dark focus:outline-none"
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
                className="flex items-center text-text-light dark:text-text-dark font-bold hover:text-primary focus:outline-none cursor-pointer"
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
            <button onClick={toggleTheme} className="focus:outline-none">
              {theme === "light" ? (
                <BiMoon
                  className="text-text-light dark:text-text-dark"
                  color="#8AA823"
                  size={24}
                />
              ) : (
                <BiSun
                  className="text-text-light dark:text-text-dark"
                  color="#8AA823"
                  size={24}
                />
              )}
            </button>
            <Link to="/contact">
              <img src="../navbar/earth.png" alt="website icon" />
            </Link>
            <button onClick={toggleSearchInput} className="focus:outline-none">
              <img src="../navbar/search.png" alt="search icon" />
            </button>
          </div>

          {/* Search Input (Conditional Rendering) */}
          <div
            className={`absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out ${
              showSearchInput
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="p-4">
              <input
                type="text"
                placeholder="Search for products, grades, or codes"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border rounded-lg bg-transparent text-black dark:text-white focus:outline-none"
              />
              {filteredProducts.length > 0 && (
                <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                      <div
                        key={product._id}
                        className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleProductClick(product._id)}
                      >
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {product.chemical_name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Button */}
          <Link
            to="/available-stocks"
            className="ml-4 px-4 py-2 bg-primary text-white font-bold rounded cursor-pointer hover:bg-primary-dark"
          >
            Available Stocks
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 overflow-y-auto bg-background-light dark:bg-background-dark z-[1000] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-text-light dark:text-text-dark focus:outline-none"
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
                className="text-text-light dark:text-text-dark font-bold text-lg w-full text-left"
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
                          className="text-text-light dark:text-text-dark hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <div>
                          <button
                            className="text-text-light dark:text-text-dark hover:text-primary cursor-pointer w-full text-left"
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
                                    className="text-text-light dark:text-text-dark hover:text-primary cursor-pointer"
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
          ref={dropdownRef} // Attach ref to dropdown
          className="absolute left-0 top-full w-full bg-background-light bg-white dark:bg-background-dark shadow-lg p-8 px-48"
        >
          <div className="grid grid-cols-3 gap-6">
            {/* Paragraph Content */}
            {menuData[dropdown].paragraph && (
              <div>
                <h3 className="font-bold text-text-light dark:text-text-dark">
                  {menuData[dropdown].paragraph.heading}
                </h3>
                <p className="text-sm text-text-light dark:text-text-dark">
                  {menuData[dropdown].paragraph.content}
                </p>
              </div>
            )}

            {/* Menu Items */}
            {menuData[dropdown].items && (
              <div className="space-y-4 bg-background-light">
                {menuData[dropdown].items.map((item, index) => (
                  <div key={index} className="relative">
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="font-bold text-text-light dark:text-text-dark hover:underline hover:text-primary cursor-pointer"
                        onClick={() => {
                          setDropdown(null);
                          setNestedDropdown(null);
                        }}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <div
                        className="font-bold text-text-light dark:text-text-dark hover:underline hover:text-primary cursor-pointer"
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
                      <div className="absolute left-full top-0 bg-background-light bg-white dark:bg-background-dark border-l border-neutral-light dark:border-neutral-dark shadow-lg p-4 space-y-2 w-48 overflow-y-auto overflow-x-hidden max-h-64">
                        {item.nested.map((nestedItem, nestedIndex) => (
                          <div
                            key={nestedIndex}
                            className="text-text-light dark:text-text-dark hover:underline hover:text-primary cursor-pointer"
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