import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const categories = [
  { name: "All Categories", icon: "/container-20.svg" },
  { name: "Food", icon: "/container-10.svg" },
  { name: "Clothing", icon: "/container-16.svg" },
  { name: "Household", icon: "/container-13.svg" },
  { name: "Kids & Toys", icon: "/container-15.svg" },
];

const listings = [
  {
    title: "Assorted Organic Produce",
    category: "Food",
    label: "FRESH FOOD",
    location: "Greenwich Village, NY",
    availability: "4 bundles left",
    timeLeft: "2h left",
    image: "/image.png",
  },
  {
    title: "Premium Cotton Basics",
    category: "Clothing",
    label: "CLOTHING",
    location: "Chelsea, NY",
    availability: "12 items left",
    timeLeft: "1d left",
    image: "/image-1.png",
  },
  {
    title: "Handcrafted Ceramic Set",
    category: "Household",
    label: "HOUSEHOLD",
    location: "Williamsburg, BK",
    availability: "1 set left",
    timeLeft: "5h left",
    image: "/image-2.png",
  },
  {
    title: "Artisan Bakery Surplus",
    category: "Food",
    label: "BAKERY",
    location: "Upper West Side, NY",
    availability: "8 bags left",
    timeLeft: "45m left",
    image: "/image-3.png",
  },
  {
    title: "Designer Outerwear",
    category: "Clothing",
    label: "CLOTHING",
    location: "SoHo, NY",
    availability: "1 item left",
    timeLeft: "2d left",
    image: "/image-4.png",
  },
  {
    title: "Eco-Friendly Toy Set",
    category: "Kids & Toys",
    label: "KIDS",
    location: "Astoria, QNS",
    availability: "3 sets left",
    timeLeft: "3d left",
    image: "/image-5.png",
  },
];

export const MarketplaceListingsSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");

  const visibleListings = listings.filter((listing) => {
    const matchesCategory =
      activeCategory === "All Categories" ||
      listing.category === activeCategory ||
      (activeCategory === "Household" && listing.category === "Household");

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const matchesSearch =
      normalizedSearchTerm.length === 0 ||
      listing.title.toLowerCase().includes(normalizedSearchTerm) ||
      listing.label.toLowerCase().includes(normalizedSearchTerm) ||
      listing.location.toLowerCase().includes(normalizedSearchTerm);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="flex w-full flex-col items-start gap-12 px-8 pb-20 pt-32 [font-family:'Manrope',Helvetica]">
      <header className="flex w-full flex-col items-center gap-6">
        <h1 className="text-center text-4xl font-extrabold leading-tight tracking-[-0.69px] text-[#161d16] sm:text-5xl sm:leading-[56px]">
          Sustainable Giving, <span className="text-[#006e28]">Redefined.</span>
        </h1>
        <p className="max-w-2xl pb-4 text-center text-lg font-normal leading-7 text-[#3d4a3c]">
          Join our community in reducing waste. Browse high-quality donations
          from local
          <br className="hidden sm:block" /> neighbors and businesses.
        </p>
        <form
          className="flex w-full max-w-[768px] items-center rounded-[20px] bg-[#f8fcfa] px-4 py-3 shadow-[inset_-6px_-6px_12px_#ffffffe6,inset_6px_6px_12px_#a0b4aa4c] sm:px-6 sm:py-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <img
            className="shrink-0"
            alt=""
            aria-hidden="true"
            src="/container-14.svg"
          />
          <Input
            aria-label="Search marketplace listings"
            defaultValue=""
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for food, clothing, or household items..."
            className="h-auto flex-1 border-0 bg-transparent px-4 py-[9px] text-base text-[#161d16] shadow-none placeholder:text-[#bccbb8] focus-visible:ring-0"
          />
          <Button
            type="submit"
            className="h-auto shrink-0 rounded-full bg-[linear-gradient(161deg,rgba(52,199,89,1)_0%,rgba(39,174,96,1)_100%)] px-5 py-2 text-base font-bold text-white shadow-[inset_0px_2px_4px_#ffffff66,4px_4px_10px_#34c7594c] hover:bg-[linear-gradient(161deg,rgba(52,199,89,1)_0%,rgba(39,174,96,1)_100%)] sm:px-8"
          >
            Search
          </Button>
        </form>
      </header>
      <nav
        aria-label="Listing categories"
        className="flex w-full flex-wrap justify-center gap-3 pt-4 sm:gap-4"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.name;

          return (
            <Button
              key={category.name}
              type="button"
              variant="ghost"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category.name)}
              className={`h-auto inline-flex items-center gap-2 rounded-[32px] px-5 py-3 text-base shadow-[-20px_-20px_40px_#ffffff,20px_20px_40px_#dde6e2] hover:bg-inherit sm:px-6 ${
                isActive
                  ? "bg-[#34c759] font-bold text-[#004d1a] hover:bg-[#34c759]"
                  : "bg-[#f8fcfa] font-normal text-[#161d16] hover:bg-[#f8fcfa]"
              }`}
            >
              <img
                className="shrink-0"
                alt=""
                aria-hidden="true"
                src={category.icon}
              />
              {category.name}
            </Button>
          );
        })}
      </nav>
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {visibleListings.map((listing) => (
          <article key={listing.title} className="min-w-0">
            <Card className="h-full overflow-hidden rounded-[32px] border-0 bg-[#f8fcfa] shadow-[-20px_-20px_40px_#ffffff,20px_20px_40px_#dde6e2]">
              <CardContent className="flex h-full flex-col p-0">
                <div className="relative h-64 w-full shrink-0">
                  <img
                    className="h-full w-full object-cover"
                    alt={listing.title}
                    src={listing.image}
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-[#ffffffe6] px-3 py-1 text-xs font-bold leading-4 tracking-[0.60px] text-[#006e28] shadow-[0px_1px_2px_#0000000d] backdrop-blur-sm">
                    {listing.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="min-w-0 text-2xl font-bold leading-8 tracking-[-0.24px] text-[#161d16]">
                      {listing.title}
                    </h2>
                    <div className="flex shrink-0 items-start gap-1">
                      <img
                        className="mt-0.5 shrink-0"
                        alt=""
                        aria-hidden="true"
                        src="/container-1.svg"
                      />
                      <span className="text-xs font-bold leading-4 tracking-[0.60px] text-[#006b5d]">
                        {listing.timeLeft}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-base font-normal leading-6 text-[#3d4a3c]">
                    <img
                      className="shrink-0"
                      alt=""
                      aria-hidden="true"
                      src="/container.svg"
                    />
                    <span>{listing.location}</span>
                  </div>
                  <div className="mt-auto flex items-end justify-between gap-4 pt-4">
                    <div>
                      <p className="text-xs font-bold leading-4 tracking-[0.60px] text-[#bccbb8]">
                        AVAILABILITY
                      </p>
                      <p className="text-base font-bold leading-6 text-[#161d16]">
                        {listing.availability}
                      </p>
                    </div>
                    <Button
                      type="button"
                      className="h-auto shrink-0 rounded-full bg-[linear-gradient(159deg,rgba(52,199,89,1)_0%,rgba(39,174,96,1)_100%)] px-8 py-3 text-base font-bold text-white shadow-[inset_0px_2px_4px_#ffffff66,4px_4px_10px_#34c7594c] hover:bg-[linear-gradient(159deg,rgba(52,199,89,1)_0%,rgba(39,174,96,1)_100%)]"
                    >
                      Reserve
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
      <div className="flex w-full justify-center pt-8">
        <Button
          type="button"
          variant="ghost"
          className="h-auto inline-flex items-center gap-2 rounded-[32px] bg-[#f8fcfa] px-10 py-4 text-base font-bold text-[#006e28] shadow-[-20px_-20px_40px_#ffffff,20px_20px_40px_#dde6e2] hover:bg-[#f8fcfa]"
        >
          Load More Opportunities
          <img
            className="shrink-0"
            alt=""
            aria-hidden="true"
            src="/container-19.svg"
          />
        </Button>
      </div>
    </section>
  );
};
