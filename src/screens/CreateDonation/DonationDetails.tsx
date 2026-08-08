import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, PageContainer } from "../../components/AppShell";
import { Input } from "../../components/ui/input";
import { DonationStepLayout } from "./DonationStepLayout";

export const DonationDetailsForm = (): JSX.Element => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    availability: "",
    time: "",
  });
  const navigate = useNavigate();
  const set =
    (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
  return (
    <AppShell>
      <PageContainer>
        <DonationStepLayout
          step={3}
          title="Item Details"
          onNext={() => navigate("/create-donation/review")}
        >
          <div className="mt-6 space-y-5 text-left">
            {(["title", "location", "availability", "time"] as const).map(
              (key) => (
                <div key={key}>
                  <label className="mb-2 block text-sm font-bold text-[#526158]">
                    {key === "time"
                      ? "Time limit"
                      : key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <Input
                    value={form[key]}
                    onChange={set(key)}
                    placeholder={
                      key === "title"
                        ? "Assorted Organic Produce"
                        : key === "location"
                          ? "Greenwich Village, NY"
                          : key === "availability"
                            ? "4 bundles left"
                            : "2h left"
                    }
                    className="h-11 rounded-xl border-[#cfe6d6] bg-[#f7fcf6] text-sm focus-visible:ring-[#27bb5c]"
                  />
                </div>
              ),
            )}
          </div>
        </DonationStepLayout>
      </PageContainer>
    </AppShell>
  );
};
