import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppShell, PageContainer } from "../../components/AppShell";
import { DonationStepLayout } from "./DonationStepLayout";

const summary = [
  ["Category", "Food"],
  ["Title", "Assorted Organic Produce"],
  ["Location", "Greenwich Village, NY"],
  ["Availability", "4 bundles left"],
  ["Time limit", "2h left"],
];
export const DonationReview = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <AppShell>
      <PageContainer>
        <DonationStepLayout
          step={4}
          title="Review & Publish"
          nextLabel="Publish Donation"
          onNext={() => navigate("/marketplace")}
        >
          <div className="mt-6 rounded-2xl bg-[#f4fbf3] p-5 text-left">
            <h3 className="text-sm font-extrabold text-[#087532]">Summary</h3>
            <dl className="mt-4 divide-y divide-[#e1eee3]">
              {summary.map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 text-sm">
                  <dt className="text-[#718077]">{key}</dt>
                  <dd className="font-bold text-[#142018]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#e8f8e9] p-3 text-left text-sm text-[#087532]">
            <CheckCircle2 size={16} /> Your donation will be visible in the
            marketplace immediately.
          </div>
        </DonationStepLayout>
      </PageContainer>
    </AppShell>
  );
};
