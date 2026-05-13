import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Briefcase,
  Brain,
  User,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const STORAGE_KEY = "cognora_new_evaluation";

const initialData = {
  organization: {
    name: "",
    industry: "",
    size: "",
    context: "",
  },

  role: {
    title: "",
    area: "",
    level: "",
    workType: "",
  },

  adaptiveProfile: {
    flexibility: 70,
    ambiguity: 65,
    collaboration: 75,
    leadership: 60,
    strategicComplexity: 68,
    regulation: 72,
  },

  criticalVariables: [],

  candidate: {
    name: "",
    email: "",
    experience: "",
    notes: "",
  },

  scenario: {
    response: "",
  },
};

const steps = [
  "Organización",
  "Rol",
  "Perfil adaptativo",
  "Variables críticas",
  "Candidato",
  "Escenario",
  "Síntesis",
];

const criticalOptions = [
  "Cambio cultural",
  "Alta incertidumbre",
  "Presión temporal",
  "Trabajo híbrido",
  "Liderazgo distribuido",
  "Conflictos inter-área",
  "Fricción organizacional",
  "Riesgo de burnout",
];

export default function NewEvaluationFlow({ onBack }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const progress = ((step + 1) / steps.length) * 100;

  const updateSection = (section, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const toggleCritical = (item) => {
    setData((prev) => {
      const exists = prev.criticalVariables.includes(item);

      return {
        ...prev,
        criticalVariables: exists
          ? prev.criticalVariables.filter((x) => x !== item)
          : [...prev.criticalVariables, item],
      };
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-10 py-8 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-sm text-slate-600 hover:text-slate-950"
        >
          <ArrowLeft size={16} />
          Volver al dashboard
        </button>

        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Nueva evaluación
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">
              Configura una evaluación adaptativa desde el contexto
              organizacional, el perfil esperado y las variables críticas del
              entorno.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 px-5 py-4 text-white shadow-sm">
            <p className="text-xs text-slate-300">Paso actual</p>

            <p className="text-xl font-semibold">
              {step + 1} / {steps.length}
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-full bg-white p-2 shadow-sm ring-1 ring-slate-200">
          <div className="h-3 rounded-full bg-slate-200">
            <div
              className="h-3 rounded-full bg-slate-950 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs">
            {steps.map((label, index) => (
              <div
                key={label}
                className={
                  index === step
                    ? "font-semibold text-slate-950"
                    : "text-slate-500"
                }
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          {step === 0 && (
            <Section
              icon={<Building2 />}
              title="Contexto organizacional"
            >
              <Input
                label="Nombre de la organización"
                value={data.organization.name}
                onChange={(v) =>
                  updateSection("organization", "name", v)
                }
              />

              <Input
                label="Industria o sector"
                value={data.organization.industry}
                onChange={(v) =>
                  updateSection("organization", "industry", v)
                }
              />

              <Input
                label="Tamaño aproximado"
                value={data.organization.size}
                onChange={(v) =>
                  updateSection("organization", "size", v)
                }
              />

              <Textarea
                label="Contexto adaptativo actual"
                value={data.organization.context}
                onChange={(v) =>
                  updateSection("organization", "context", v)
                }
              />
            </Section>
          )}

          {step === 1 && (
            <Section
              icon={<Briefcase />}
              title="Perfil del rol"
            >
              <Input
                label="Nombre del cargo"
                value={data.role.title}
                onChange={(v) =>
                  updateSection("role", "title", v)
                }
              />

              <Input
                label="Área"
                value={data.role.area}
                onChange={(v) =>
                  updateSection("role", "area", v)
                }
              />

              <Input
                label="Nivel estratégico"
                value={data.role.level}
                onChange={(v) =>
                  updateSection("role", "level", v)
                }
              />

              <Input
                label="Tipo de trabajo"
                value={data.role.workType}
                onChange={(v) =>
                  updateSection("role", "workType", v)
                }
              />
            </Section>
          )}

          {step === 2 && (
            <Section
              icon={<Brain />}
              title="Perfil adaptativo esperado"
            >
              <Slider
                label="Flexibilidad adaptativa"
                value={data.adaptiveProfile.flexibility}
                onChange={(v) =>
                  updateSection(
                    "adaptiveProfile",
                    "flexibility",
                    v
                  )
                }
              />

              <Slider
                label="Tolerancia a la ambigüedad"
                value={data.adaptiveProfile.ambiguity}
                onChange={(v) =>
                  updateSection(
                    "adaptiveProfile",
                    "ambiguity",
                    v
                  )
                }
              />

              <Slider
                label="Colaboración"
                value={data.adaptiveProfile.collaboration}
                onChange={(v) =>
                  updateSection(
                    "adaptiveProfile",
                    "collaboration",
                    v
                  )
                }
              />

              <Slider
                label="Liderazgo contextual"
                value={data.adaptiveProfile.leadership}
                onChange={(v) =>
                  updateSection(
                    "adaptiveProfile",
                    "leadership",
                    v
                  )
                }
              />

              <Slider
                label="Complejidad estratégica"
                value={data.adaptiveProfile.strategicComplexity}
                onChange={(v) =>
                  updateSection(
                    "adaptiveProfile",
                    "strategicComplexity",
                    v
                  )
                }
              />

              <Slider
                label="Regulación interpretativa"
                value={data.adaptiveProfile.regulation}
                onChange={(v) =>
                  updateSection(
                    "adaptiveProfile",
                    "regulation",
                    v
                  )
                }
              />
            </Section>
          )}

          {step === 3 && (
            <Section
              icon={<Sparkles />}
              title="Variables críticas del entorno"
            >
              <div className="grid grid-cols-2 gap-4">
                {criticalOptions.map((item) => {
                  const active =
                    data.criticalVariables.includes(item);

                  return (
                    <button
                      key={item}
                      onClick={() => toggleCritical(item)}
                      className={`rounded-2xl border px-5 py-4 text-left text-sm transition ${
                        active
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </Section>
          )}

          {step === 4 && (
            <Section
              icon={<User />}
              title="Datos del candidato"
            >
              <Input
                label="Nombre completo"
                value={data.candidate.name}
                onChange={(v) =>
                  updateSection("candidate", "name", v)
                }
              />

              <Input
                label="Correo"
                value={data.candidate.email}
                onChange={(v) =>
                  updateSection("candidate", "email", v)
                }
              />

              <Input
                label="Experiencia relevante"
                value={data.candidate.experience}
                onChange={(v) =>
                  updateSection(
                    "candidate",
                    "experience",
                    v
                  )
                }
              />

              <Textarea
                label="Notas internas"
                value={data.candidate.notes}
                onChange={(v) =>
                  updateSection("candidate", "notes", v)
                }
              />
            </Section>
          )}

          {step === 5 && (
            <Section
              icon={<Brain />}
              title="Escenario situacional"
            >
              <div className="mb-6 rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-sm leading-7 text-slate-200">
                  Un equipo clave comienza a resistir una
                  transformación organizacional que modifica
                  prácticas históricas. La dirección espera avanzar
                  rápido, pero parte del equipo percibe pérdida de
                  autonomía y aumento de presión.
                </p>
              </div>

              <Textarea
                label="Respuesta interpretativa del candidato"
                value={data.scenario.response}
                onChange={(v) =>
                  updateSection("scenario", "response", v)
                }
              />
            </Section>
          )}

          {step === 6 && (
            <Section
              icon={<CheckCircle2 />}
              title="Síntesis preliminar"
            >
              <div className="grid grid-cols-2 gap-5">
                <SummaryCard
                  title="Organización"
                  value={
                    data.organization.name || "Sin definir"
                  }
                />

                <SummaryCard
                  title="Rol"
                  value={data.role.title || "Sin definir"}
                />

                <SummaryCard
                  title="Candidato"
                  value={
                    data.candidate.name || "Sin definir"
                  }
                />

                <SummaryCard
                  title="Variables críticas"
                  value={`${data.criticalVariables.length} seleccionadas`}
                />
              </div>

              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
                <h3 className="text-xl font-semibold">
                  Evaluación lista para procesamiento
                  interpretativo
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Esta estructura ya puede conectarse a FastAPI y
                  PostgreSQL.
                </p>
              </div>
            </Section>
          )}

          <div className="mt-10 flex justify-between">
            <button
              onClick={() =>
                setStep((s) => Math.max(0, s - 1))
              }
              disabled={step === 0}
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 disabled:opacity-40"
            >
              Anterior
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={() =>
                  setStep((s) =>
                    Math.min(steps.length - 1, s + 1)
                  )
                }
                className="flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
              >
                Siguiente
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={() =>
                  alert(
                    "Evaluación guardada en modo mock."
                  )
                }
                className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
              >
                Guardar evaluación
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-950">
          {icon}
        </div>

        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="grid gap-5">
        {children}
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-700">
        {label}
      </span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none focus:border-slate-950"
      />
    </label>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-700">
        {label}
      </span>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 outline-none focus:border-slate-950"
      />
    </label>
  );
}

function Slider({ label, value, onChange }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <div className="mb-3 flex justify-between text-sm">
        <span className="font-semibold text-slate-700">
          {label}
        </span>

        <span className="font-bold text-slate-950">
          {value}%
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full"
      />
    </div>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}
