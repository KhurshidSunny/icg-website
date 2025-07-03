import { FooterColumn } from "./FooterColumn";
import { Link } from "react-router-dom";

function Footer() {
  const columnData = [
    {
      title: "Our Company",
      items: [
        { text: "About ICG Chemicals", href: "/about-us" },
        { text: "Management", href: "./icg-management" },
        { text: "Our History", href: "./our-history" },
      ],
    },
    {
      title: "Most Sold",
      items: [
        { text: "UV Absorbers", href: "/products-and-solutions/uv-absorbers" },
        { text: "Light Stabilizers (HALS)", href: "/products-and-solutions/hindered-amine-light-stabilizers-(hals)" },
        { text: "Optical Brighteners", href: "/products-and-solutions/opticalbrighteners(ob)" },
        { text: "Our Products", href: "/product-finder" },
      ],
    },
    {
      title: "Media & Events",
      items: [
        { text: "News", href: "/media-news" },
        { text: "Events", href: "/media-events" },
        { text: "Social", href: "/blog-articles" },
      ],
    },
    {
      title: "Contact us",
      items: [
        { text: "Jebel Ali, Dubai UAE", href: "/contact" },
        { text: "00971 4887 6111", href: "/contact" },
        {
          text: "info@icgchemicals.com",
          href: "/contact",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#023b3b] pb-4 pt-16 px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5">
        {/* Column 1: Logo and Social Links */}
        <div className="flex flex-col items-start space-y-8">
          <Link to="/">
            <img
              className="w-24 object-contain"
              src="../logo-white.png"
              alt="ICG Chemicals Logo"
            />
          </Link>
          <div className="text-white">Follow Us:</div>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/icgchemicals/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="../social icons/facebook.png"
                className="w-[32px] h-[32px]"
                alt="Facebook"
              />
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/ICGchemicals"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="../social icons/Twitter.png"
                className="w-[32px] h-[32px]"
                alt="Twitter"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/icgchemicals?igsh=MXFpZDF1N3owbDh2eg=="
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="../social icons/insta.png"
                className="w-[32px] h-[32px]"
                alt="Instagram"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/icgspecialtychemicalsfzco/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="../social icons/linkedin.png"
                className="w-[32px] h-[32px]"
                alt="LinkedIn"
              />
            </a>

            {/* Pinterest */}
            <a
              href="https://www.pinterest.com/ICGSpecialtyChemicalsFZCO/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src="../social icons/pinterest.png"
                className="w-[32px] h-[32px]"
                alt="Pinterest"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Our Company */}
        <FooterColumn title="Our Company" items={columnData[0].items} />

        {/* Column 3: Most Sold */}
        <FooterColumn title="Most Sold" items={columnData[1].items} />

        {/* Column 4: Media & Events */}
        <FooterColumn title="Media & Events" items={columnData[2].items} />

        {/* Column 5: Contact Us */}
        <FooterColumn title="Contact us" items={columnData[3].items} />
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white text-sm">
            ©2024 Powered By{" "}
            <a
              href="https://strings.com.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Strings Technologies
            </a>
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-8">
            <a href="/privacy" className="text-white text-sm hover:opacity-80">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white text-sm hover:opacity-80">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;