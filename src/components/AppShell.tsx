import { Bell, CircleUserRound, Leaf } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const links = [
  { label: "Marketplace", to: "/marketplace" },
  { label: "Impact Map", to: "/dashboard" },
  { label: "History", to: "/history" },
];

export const AppShell = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eef6f0] text-[#142018]">
      <header className="sticky top-0 z-20 border-b border-[#d8e8dc] bg-[#f6fff3]/95 shadow-[0_8px_24px_rgba(31,78,44,0.08)] backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#087532]">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ccefd4] text-[#087532]"><Leaf size={17} /></span>
            EcoSystem
          </NavLink>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? "text-[#087532]" : "text-[#526158] hover:text-[#087532]"}`}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button onClick={() => navigate("/create-donation")} className="rounded-full bg-[#27bb5c] px-5 font-bold text-white shadow-[0_5px_12px_rgba(39,187,92,.25)] hover:bg-[#149b47]">Donate Now</Button>
            <button aria-label="Notifications" className="hidden rounded-full p-2 text-[#526158] hover:bg-[#e5f3e7] sm:block"><Bell size={17} /></button>
            <button aria-label="Profile" className="rounded-full p-2 text-[#526158] hover:bg-[#e5f3e7]"><CircleUserRound size={18} /></button>
          </div>
        </div>
      </header>
      {children}
      <footer className="mt-14 rounded-t-[38px] bg-white px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-5 text-sm text-[#657169] sm:flex-row sm:items-center">
          <div><p className="font-extrabold text-[#087532]">ReVida</p><p className="mt-1">© 2024 ReVida Climate-Tech. For a sustainable future.</p></div>
          <div className="flex flex-wrap gap-5"><span>Sustainability Report</span><span>Charity Partners</span><span>Terms of Service</span><span>Contact</span></div>
        </div>
      </footer>
    </div>
  );
};

export const PageContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }): JSX.Element => (
  <main className={`mx-auto w-full max-w-[1240px] px-5 py-10 lg:px-8 lg:py-14 ${className}`}>{children}</main>
);

export const SectionHeading = ({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }): JSX.Element => (
  <div className="mb-8">
    {eyebrow && <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#18a34a]">{eyebrow}</p>}
    <h1 className="text-3xl font-extrabold tracking-tight text-[#142018] sm:text-4xl">{title}</h1>
    {description && <p className="mt-3 max-w-2xl text-base leading-7 text-[#617066]">{description}</p>}
  </div>
);

export const StatCard = ({ icon: Icon, label, value, color = "green" }: { icon: React.ElementType; label: string; value: string; color?: "green" | "teal" | "red" }): JSX.Element => (
  <div className="rounded-[22px] bg-white p-5 text-center shadow-[0_12px_30px_rgba(43,91,58,.1)]">
    <div className={`mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full ${color === "red" ? "bg-[#f9dfda] text-[#bd5548]" : color === "teal" ? "bg-[#d8f0ee] text-[#198f86]" : "bg-[#d9f2df] text-[#13934a]"}`}><Icon size={17} /></div>
    <p className="text-2xl font-extrabold text-[#087532]">{value}</p><p className="mt-1 text-xs text-[#6c7c71]">{label}</p>
  </div>
);
