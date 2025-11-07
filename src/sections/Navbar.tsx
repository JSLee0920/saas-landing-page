import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <Image src={logo} alt="Layers" />
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
