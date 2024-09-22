import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

function Button({ buttonLink, buttonText, className }) {
  return (
    <PrismicNextLink
      field={buttonLink}
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
    >
      {buttonText}
    </PrismicNextLink>
  );
}

export default Button;
