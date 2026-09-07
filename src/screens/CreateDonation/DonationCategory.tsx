import { Shirt, Soup, Tag, ToyBrick } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, PageContainer } from "../../components/AppShell";
import { DonationStepLayout, ChoiceCard } from "./DonationStepLayout";
import {
  getStoredToken,
  getStoredUser,
  isValidJwt,
  type StoredUser,
} from "../../lib/auth";

const categories = [
  [Soup, "Food"],
  [Shirt, "Clothing"],
  [Tag, "Household"],
  [ToyBrick, "Kids & Toys"],
];
export const DonationCategory = (): JSX.Element => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    const authenticated = isValidJwt(getStoredToken());
    setIsAuthenticated(authenticated);

    if (!authenticated) {
      navigate("/register");
      return;
    }

    setUser(getStoredUser());
  }, [navigate]);

  return (
    <AppShell>
      <PageContainer>
        <DonationStepLayout
          step={2}
          title="Choose a Category"
          onNext={() => navigate("/create-donation/details")}
        >
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {categories.map(([Icon, label]) => (
              <ChoiceCard
                key={label as string}
                icon={Icon as typeof Soup}
                label={label as string}
                selected={selected === (label as string)}
                onClick={() => setSelected(label as string)}
              />
            ))}
          </div>
        </DonationStepLayout>
      </PageContainer>
    </AppShell>
  );
};
