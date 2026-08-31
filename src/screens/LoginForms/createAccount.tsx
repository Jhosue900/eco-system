import { Leaf, Lock, Mail, MapPin, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppShell, PageContainer } from "../../components/AppShell";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const API_URL = import.meta.env.VITE_API_URL;

export const CreateAccount = (): JSX.Element => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    age: "",
    country: "",
    city: "",
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const set =
    (key: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");
    setSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          lastname: form.lastName,
          age: Number(form.age),
          country: form.country,
          city: form.city,
          mail: form.email,
          pass: form.password,
          user_type: "donor",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "No se pudo crear la cuenta.");
      }

      navigate("/login");
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "No se pudo conectar con el servidor. Intenta de nuevo.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppShell>
      <PageContainer>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#18a34a]">
            Crear cuenta
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-[#087532]">
            Únete a ReVida
          </h1>
          <p className="mx-auto mt-3 max-w-md leading-6 text-[#617066]">
            Crea tu cuenta para donar, seguir tu impacto y apoyar a
            organizaciones verificadas.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-[28px] bg-white p-6 text-left shadow-[0_20px_50px_rgba(43,91,58,.12)] sm:p-10"
          >
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#e4f2e4] text-[#087532]">
              <Leaf size={28} />
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#526158]">
                  Nombre
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8ea896]"
                  />
                  <Input
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Sofía"
                    className="h-11 rounded-xl border-[#cfe6d6] bg-[#f7fcf6] pl-9 text-sm focus-visible:ring-[#27bb5c]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-[#526158]">
                  Apellido
                </label>
                <Input
                  required
                  value={form.lastName}
                  onChange={set("lastName")}
                  placeholder="Martínez"
                  className="h-11 rounded-xl border-[#cfe6d6] bg-[#f7fcf6] text-sm focus-visible:ring-[#27bb5c]"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#526158]">
                  Edad
                </label>
                <Input
                  required
                  type="number"
                  min={13}
                  value={form.age}
                  onChange={set("age")}
                  placeholder="27"
                  className="h-11 rounded-xl border-[#cfe6d6] bg-[#f7fcf6] text-sm focus-visible:ring-[#27bb5c]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-[#526158]">
                  País
                </label>
                <div className="relative">
                  <MapPin
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8ea896]"
                  />
                  <Input
                    required
                    value={form.country}
                    onChange={set("country")}
                    placeholder="Colombia"
                    className="h-11 rounded-xl border-[#cfe6d6] bg-[#f7fcf6] pl-9 text-sm focus-visible:ring-[#27bb5c]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-[#526158]">
                  Ciudad
                </label>
                <Input
                  required
                  value={form.city}
                  onChange={set("city")}
                  placeholder="Cali"
                  className="h-11 rounded-xl border-[#cfe6d6] bg-[#f7fcf6] text-sm focus-visible:ring-[#27bb5c]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-[#526158]">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8ea896]"
                />
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="sofia@correo.com"
                  className="h-11 rounded-xl border-[#cfe6d6] bg-[#f7fcf6] pl-9 text-sm focus-visible:ring-[#27bb5c]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-[#526158]">
                Contraseña
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8ea896]"
                />
                <Input
                  required
                  type="password"
                  minLength={8}
                  value={form.password}
                  onChange={set("password")}
                  placeholder="Mínimo 8 caracteres"
                  className="h-11 rounded-xl border-[#cfe6d6] bg-[#f7fcf6] pl-9 text-sm focus-visible:ring-[#27bb5c]"
                />
              </div>
            </div>

            {errorMessage && (
              <p className="mt-5 rounded-xl bg-[#fdeceb] px-4 py-3 text-sm font-semibold text-[#bd5548]">
                {errorMessage}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full rounded-full bg-[#27bb5c] py-5 font-bold text-white hover:bg-[#149b47] disabled:opacity-60"
            >
              {submitting ? "Creando cuenta..." : "Crear cuenta"}
            </Button>

            <p className="mt-4 text-center text-sm text-[#718077]">
              ¿Ya tienes cuenta?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-bold text-[#087532] hover:underline"
              >
                Inicia sesión
              </button>
            </p>
          </form>
        </div>
      </PageContainer>
    </AppShell>
  );
};