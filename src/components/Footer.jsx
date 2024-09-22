import CircleText from "./CircleText";
import { FizziLogo } from "./FizziLogo";

function Footer() {
  return (
    <footer className="bg-[#FEE832] text-[#fe6334]">
      <div className="relative mx-auto flex w-full max-w-full justify-center px-4 py-10">
        <FizziLogo />
        <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          {/* Circle text */}
          <CircleText />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
