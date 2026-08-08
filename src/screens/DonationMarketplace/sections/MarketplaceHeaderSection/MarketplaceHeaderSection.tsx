import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = ["Marketplace", "Impact Map", "History"];

export const MarketplaceHeaderSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("Marketplace");

  return (
    <header className="flex w-full flex-col items-start rounded-[0px_0px_48px_48px] border-b border-[#bccbb84c] bg-[#f4fceecc] shadow-[-20px_-20px_40px_#ffffff,20px_20px_40px_#dde6e2] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
      <div className="flex w-full max-w-screen-xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-8">
          <p className="mt-[-1px] font-extrabold text-[32px] leading-10 tracking-[-0.8px] text-[#006e28] [font-family:'Manrope',Helvetica]">
            ReVida
          </p>
          <NavigationMenu aria-label="Primary navigation">
            <NavigationMenuList className="flex items-start gap-6">
              {navigationItems.map((item) => {
                const isActive = activeItem === item;

                return (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setActiveItem(item)}
                        className={`h-auto rounded-none px-0 pb-1 pt-0 text-base leading-6 tracking-[0] hover:bg-transparent hover:text-[#006e28] [font-family:'Manrope',Helvetica] ${
                          isActive
                            ? "border-b-2 border-[#006e28] font-bold text-[#006e28]"
                            : "border-b-2 border-transparent font-normal text-[#3d4a3c]"
                        }`}
                      >
                        {item}
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            className="h-auto justify-center rounded-full bg-[linear-gradient(164deg,rgba(52,199,89,1)_0%,rgba(39,174,96,1)_100%)] px-6 py-2 font-bold text-base leading-6 text-white shadow-[inset_0px_2px_4px_#ffffff66,4px_4px_10px_#34c7594c] hover:bg-[linear-gradient(164deg,rgba(52,199,89,1)_0%,rgba(39,174,96,1)_100%)] [font-family:'Manrope',Helvetica]"
          >
            Donate Now
          </Button>
          <img className="shrink-0" alt="Container" src="/container-8.svg" />
        </div>
      </div>
    </header>
  );
};
