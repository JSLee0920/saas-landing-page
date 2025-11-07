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
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 px-4 items-center">
          <div>
            <Image src={logo} alt="Layers" className="h-9 w-auto" />
          </div>
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 md:hidden" />
            <button className="border border-white h-12 rounded-full px-6 font-medium">
              Log In
            </button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
}
