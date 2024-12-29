import { FooterColumn } from "./FooterColumn";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Footer() {
  const columnData = [
    {
      title: "Our Company",
      items: [
        { text: "About ICG Chemicals", href: "/AboutPage" },
        { text: "Management", href: "/CeoMessage" },
        { text: "Our History", href: "/Timeline" },
      ],
    },
    {
      title: "Most Sold",
      items: [
        { text: "UV Absorbers", href: "/Absorber" },
        { text: "Light Stabilizers (HALS)", href: "/HALS" },
        { text: "Optical Brighteners", href: "/OpticalBrightners" },
        { text: "Our Products", href: "/products" },
      ],
    },
    {
      title: "Media & Events",
      items: [
        { text: "News", href: "/news" },
        { text: "Events", href: "/events" },
        { text: "Social", href: "/social" },
      ],
    },
    {
      title: "Contact us",
      items: [
        { text: "Jebel Ali, Dubai UAE", href: "/offices" },
        { text: "00971 4887 6111", href: "tel:00971488761111" },
        {
          text: "info@icgchemicals.com",
          href: "mailto:info@icgchemicals.com",
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
              src="assets/logo.png"
              alt="ICG Chemicals Logo"
            />
          </Link>
          <div className="text-white">Follow Us:</div>
          <div className="flex space-x-4">
            {/* {socialIcons.map((icon, index) => (
              <SocialIcon
                key={index}
                src={icon.src}
                alt={icon.alt}
                href={icon.href}
                className="rounded-full"
              />
            ))} */}
            <SocialIcon
              url="https://facebook.com"
              style={{
                width: "32px", // Smaller size
                height: "32px", // Smaller size
              }}
            />
            <SocialIcon
              url="https://x.com"
              style={{
                width: "32px", // Smaller size
                height: "32px", // Smaller size
              }}
            />
            <SocialIcon
              url="https://instagram.com"
              style={{
                width: "32px", // Smaller size
                height: "32px", // Smaller size
              }}
            />
            <SocialIcon
              url="https://linkedin.com"
              style={{
                width: "32px", // Smaller size
                height: "32px", // Smaller size
              }}
            />
            <SocialIcon
              url="https://pinterest.com"
              style={{
                width: "32px", // Smaller size
                height: "32px", // Smaller size
              }}
            />
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
      <div className="mt-12 border-t  pt-8">
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
