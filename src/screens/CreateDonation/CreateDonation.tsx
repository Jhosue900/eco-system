import { CloudUpload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppShell, PageContainer } from "../../components/AppShell";
import { Button } from "../../components/ui/button";
import { DonationStepLayout } from "./DonationStepLayout";

export const CreateDonation = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <AppShell>
      <PageContainer>
        <DonationStepLayout
          step={1}
          title="Upload Item Photos"
          onNext={() => navigate("/create-donation/category")}
        >
          <label className="mt-6 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#c8dfcc] bg-[#f4fbf3] text-center transition-colors hover:border-[#27bb5c] hover:bg-[#eaf8ea]">
            <CloudUpload className="mb-3 text-[#8ac99b]" size={32} />
            <p className="text-sm text-[#617066]">
              Drag and drop images here or{" "}
              <span className="font-bold text-[#07933d]">browse files</span>
            </p>
            <p className="mt-1 text-xs text-[#94a198]">
              Supports JPG, PNG up to 10MB
            </p>
            <input
              type="file"
              accept="image/png,image/jpeg"
              multiple
              className="sr-only"
            />
          </label>
          <p className="mt-3 text-xs text-[#94a198]">
            Add clear photos so the community knows exactly what they are
            receiving.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#e2f3e4] px-3 py-1 text-xs font-semibold text-[#087532]">
              Photo 1 of 4
            </span>
            <span className="rounded-full bg-[#eef5ee] px-3 py-1 text-xs text-[#718077]">
              Optional but recommended
            </span>
          </div>
        </DonationStepLayout>
      </PageContainer>
    </AppShell>
  );
};
