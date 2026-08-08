import { PlusIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const footerLinks = [
  "Sustainability Report",
  "Charity Partners",
  "Terms of Service",
  "Contact",
];

export const MarketplaceFooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full rounded-t-[48px] border-t border-[#bccbb833] bg-white py-20 shadow-[inset_0px_2px_4px_#0000000d]">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start justify-between gap-8 px-8 md:flex-row md:items-center">
        <section className="flex flex-col items-start gap-[8.5px]">
          <p className="m-0 font-bold text-2xl leading-8 tracking-[-0.24px] text-[#006e28] [font-family:'Manrope',Helvetica]">
            ReVida
          </p>
          <p className="m-0 font-normal text-base leading-6 text-[#3d4a3c] [font-family:'Manrope',Helvetica]">
            © 2024 ReVida Climate-Tech. For a sustainable future.
          </p>
        </section>
        <nav
          aria-label="Footer navigation"
          className="flex w-full flex-wrap items-center justify-start gap-x-8 gap-y-3 md:w-auto md:justify-center"
        >
          {footerLinks.map((link) => (
            <Button
              key={link}
              type="button"
              variant="link"
              className="h-auto p-0 font-normal text-base leading-6 text-[#3d4a3c] underline underline-offset-0 [font-family:'Manrope',Helvetica]"
            >
              {link}
            </Button>
          ))}
          <Button
            type="button"
            size="icon"
            aria-label="Add"
            className="h-9 w-9 rounded-full bg-[#18be54] text-white shadow-[0px_2px_4px_#0000001a] hover:bg-[#18be54]/90"
          >
            <PlusIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </nav>
      </div>
    </footer>
  );
};
