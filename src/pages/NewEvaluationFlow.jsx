import { useEffect, useState } from "react";
import {
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

export default function NewEvaluationFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setData(JSON.parse(saved));
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
    <main className="ml-72 min-h-screen w-[calc(100vw-18rem)] bg-[#f6f8fb] px-12 py-10 text-slate-950">
      <div className="max-w-7xl">
        <div className="mb-10 flex items-start justify-between gap-10">
          <div>
            <p className="mb-3 text-base font-medium text-slate-600">
              Cognora Select / Nueva evaluación
            </p>

            <h1 className="text-6xl font-bold tracking-tight text-slate-950">
              Nueva evaluación adaptativa
            </h1>

            <p className="mt-5 max-w-4xl text-xl leading-relaxed text-slate-600">
              Configura una evaluación desde el contexto organizacional, el rol,
              el perfil esperado y las variables críticas del entorno.
            </p>
          </div>

          <div className="rounded-3xl bg-[#102033] px-8 py-6 text-white shadow-xl">
            <p className="text-sm text-slate-300">Paso actual</p>
            <p className="mt-2 text-4xl font-bold">
              {step + 1}/{steps.length}
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-4 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#102033] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-5 grid grid-cols-7 gap-3 text-center">
            {steps.map((label, index) => (
              <div
                key={label}
                className={`text-sm font-semibold ${
                  index === step ? "text-slate-950" : "text-slate-400"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <section className="rounded-[2rem] border border-slate-200/80 bg-white p-10 shadow-sm">
          {step === 0 && (
            <Section icon={<Building2 />} title="Contexto organizacional">
              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Nombre de la organización"
                  value={data.organization.name}
                  onChange={(v) => updateSection("organization", "name", v)}
                  placeholder="Altiora"
                />

                <Input
                  label="Industria o sector"
                  value={data.organization.industry}
                  onChange={(v) => updateSection("organization", "industry", v)}
                  placeholder="Tecnología, educación, salud, servicios..."
                />

                <Input
                  label="Tamaño aproximado"
                  value={data.organization.size}
                  onChange={(v) => updateSection("organization", "size", v)}
                  placeholder="Ejemplo: 150 colaboradores"
                />

                <Input
                  label="Nivel de cambio actual"
                  value="Alto"
                  onChange={() => {}}
                  placeholder="Alto"
                />
              </div>

              <div className="mt-6">
                <Textarea
                  label="Contexto adaptativo actual"
                  value={data.organization.context}
                  onChange={(v) => updateSection("organization", "context", v)}
                  placeholder="Describe brevemente el escenario organizacional que enfrenta el equipo."
                />
              </div>
            </Section>
          )}

          {step === 1 && (
            <Section icon={<Briefcase />} title="Perfil del rol">
              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Nombre del cargo"
                  value={data.role.title}
                  onChange={(v) => updateSection("role", "title", v)}
                  placeholder="Liderazgo adaptativo"
                />

                <Input
                  label="Área"
                  value={data.role.area}
                  onChange={(v) => updateSection("role", "area", v)}
                  placeholder="Innovación estratégica"
                />

                <Input
                  label="Nivel estratégico"
                  value={data.role.level}
                  onChange={(v) => updateSection("role", "level", v)}
                  placeholder="Alta complejidad"
                />

                <Input
                  label="Tipo de trabajo"
                  value={data.role.workType}
                  onChange={(v) => updateSection("role", "workType", v)}
                  placeholder="Interdisciplinario, híbrido, directivo..."
                />
              </div>
            </Section>
          )}

          {step === 2 && (
            <Section icon={<Brain />} title="Perfil adaptativo esperado">
              <div className="grid grid-cols-2 gap-6">
                <Slider
                  label="Flexibilidad adaptativa"
                  value={data.adaptiveProfile.flexibility}
                  onChange={(v) =>
                    updateSection("adaptiveProfile", "flexibility", v)
                  }
                />

                <Slider
                  label="Tolerancia a la ambigüedad"
                  value={data.adaptiveProfile.ambiguity}
                  onChange={(v) =>
                    updateSection("adaptiveProfile", "ambiguity", v)
                  }
                />

                <Slider
                  label="Colaboración"
                  value={data.adaptiveProfile.collaboration}
                  onChange={(v) =>
                    updateSection("adaptiveProfile", "collaboration", v)
                  }
                />

                <Slider
                  label="Liderazgo contextual"
                  value={data.adaptiveProfile.leadership}
                  onChange={(v) =>
                    updateSection("adaptiveProfile", "leadership", v)
                  }
                />

                <Slider
                  label="Complejidad estratégica"
                  value={data.adaptiveProfile.strategicComplexity}
                  onChange={(v) =>
                    updateSection("adaptiveProfile", "strategicComplexity", v)
                  }
                />

                <Slider
                  label="Regulación interpretativa"
                  value={data.adaptiveProfile.regulation}
                  onChange={(v) =>
                    updateSection("adaptiveProfile", "regulation", v)
                  }
                />
              </div>
            </Section>
          )}

          {step === 3 && (
            <Section icon={<Sparkles />} title="Variables críticas del entorno">
              <div className="grid grid-cols-2 gap-5">
                {criticalOptions.map((item) => {
                  const active = data.criticalVariables.includes(item);

                  return (
                    <button
                      key={item}
                      onClick={() => toggleCritical(item)}
                      className={`rounded-2xl border px-6 py-5 text-left text-lg transition-all ${
                        active
                          ? "border-[#102033] bg-[#102033] text-white shadow-md"
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
            <Section icon={<User />} title="Datos del candidato">
              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Nombre completo"
                  value={data.candidate.name}
                  onChange={(v) => updateSection("candidate", "name", v)}
                  placeholder="Camila Rojas"
                />

                <Input
                  label="Correo"
                  value={data.candidate.email}
                  onChange={(v) => updateSection("candidate", "email", v)}
                  placeholder="camila@empresa.com"
                />

                <Input
                  label="Experiencia relevante"
                  value={data.candidate.experience}
                  onChange={(v) =>
                    updateSection("candidate", "experience", v)
                  }
                  placeholder="8 años en coordinación estratégica"
                />

                <Input
                  label="Área previa"
                  value={data.candidate.notes}
                  onChange={(v) => updateSection("candidate", "notes", v)}
                  placeholder="Gestión de equipos, innovación, liderazgo..."
                />
              </div>
            </Section>
          )}

          {step === 5 && (
            <Section icon={<Brain />} title="Escenario situacional">
              <div className="rounded-3xl bg-gradient-to-br from-[#102033] to-[#1a2f47] p-8 text-white shadow-xl">
                <p className="text-xl leading-relaxed text-slate-100">
                  Un equipo clave comienza a resistir una transformación
                  organizacional que modifica prácticas históricas. La dirección
                  espera avanzar rápido, pero parte del equipo percibe pérdida
                  de autonomía y aumento de presión. ¿Cómo interpretarías la
                  situación y qué decisiones priorizarías?
                </p>
              </div>

              <div className="mt-7">
                <Textarea
                  label="Respuesta interpretativa del candidato"
                  value={data.scenario.response}
                  onChange={(v) => updateSection("scenario", "response", v)}
                  placeholder="Describe cómo abordarías la situación, qué tensiones identificas y qué decisiones tomarías."
                />
              </div>
            </Section>
          )}

          {step === 6 && (
            <Section icon={<CheckCircle2 />} title="Síntesis preliminar">
              <div className="grid grid-cols-4 gap-5">
                <SummaryCard
                  title="Organización"
                  value={data.organization.name || "Sin definir"}
                />

                <SummaryCard
                  title="Rol"
                  value={data.role.title || "Sin definir"}
                />

                <SummaryCard
                  title="Candidato"
                  value={data.candidate.name || "Sin definir"}
                />

                <SummaryCard
                  title="Variables"
                  value={`${data.criticalVariables.length}`}
                />
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#102033] to-[#1a2f47] p-8 text-white shadow-xl">
                <h3 className="text-3xl font-bold">
                  Evaluación lista para procesamiento interpretativo
                </h3>

                <p className="mt-4 max-w-4xl text-xl leading-relaxed text-slate-100">
                  Esta estructura ya puede conectarse a FastAPI y PostgreSQL
                  para guardar evaluaciones, procesar respuestas y generar
                  reportes Cognora multicapa.
                </p>
              </div>
            </Section>
          )}

          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="rounded-2xl border border-slate-200 bg-white px-8 py-5 text-lg font-semibold text-slate-700 transition disabled:opacity-40"
            >
              Anterior
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={() =>
                  setStep((s) => Math.min(steps.length - 1, s + 1))
                }
                className="flex items-center gap-3 rounded-2xl bg-slate-950 px-8 py-5 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Siguiente
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={() =>
                  alert("Evaluación guardada en modo mock. Próximo paso: FastAPI.")
                }
                className="rounded-2xl bg-slate-950 px-8 py-5 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Generar reporte preliminar
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function Section({ icon, title, children }) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#102033]">
          {icon}
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-slate-950">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}

function Input({ label, value, onChange, placeholder }) {
  return (
    <label className="grid gap-2">
      <span className="text-lg font-medium text-slate-700">{label}</span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition-all focus:border-slate-400"
      />
    </label>
  );
}

function Textarea({ label, value, onChange, placeholder }) {
  return (
    <label className="grid gap-2">
      <span className="text-lg font-medium text-slate-700">{label}</span>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg leading-relaxed outline-none transition-all focus:border-slate-400"
      />
    </label>
  );
}

function Slider({ label, value, onChange }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <div className="mb-4 flex justify-between text-lg">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-bold text-slate-950">{value}%</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold text-slate-950">{value}</p>
    </div>
  );
}
