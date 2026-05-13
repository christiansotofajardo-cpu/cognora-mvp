import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileText,
  Building2,
  Settings,
  Brain,
  Sparkles,
  ShieldCheck,
  Eye,
  Layers,
  Compass,
  Network,
  Target,
} from "lucide-react";
import NewEvaluationFlow from "./src/pages/NewEvaluationFlow.jsx";
const perfiles = [
  {
    nombre: "Elena Martínez",
    rol: "Dirección de Innovación Organizacional",
    configuracion: "Integradora Estratégica Adaptativa",
    resumen:
      "Integra información compleja, coordina escenarios ambiguos y transforma incertidumbre en dirección estratégica compartida.",
    confianza: "Alta",
    estabilidad: "Fuerte",
    consistencia: "Estable",
    ejes: [
      ["Abstracción estratégica", 92],
      ["Integración colaborativa", 86],
      ["Flexibilidad adaptativa", 81],
      ["Estabilidad regulatoria", 68],
      ["Orientación a la ejecución", 74],
      ["Coherencia semántica", 88],
    ],
    tensiones: [
      [
        "Visión estratégica / Fragilidad operacional",
        "Lectura macroestructural sólida con tensión ante cierres operativos rápidos.",
      ],
      [
        "Colaboración adaptativa / Evitación de conflicto",
        "Modula el vínculo colaborativo, aunque puede suavizar confrontaciones difíciles.",
      ],
      [
        "Autonomía / Calibración colectiva reducida",
        "Alta autonomía con necesidad de sincronización periódica con equipos estratégicos.",
      ],
    ],
  },
  {
    nombre: "Andrés Valdés",
    rol: "Liderazgo de Operaciones",
    configuracion: "Ejecutor Estratégico Regulado",
    resumen:
      "Presenta fuerte orientación a resultados, estabilidad operacional y alta capacidad para sostener procesos bajo presión.",
    confianza: "Alta",
    estabilidad: "Muy fuerte",
    consistencia: "Estable",
    ejes: [
      ["Abstracción estratégica", 78],
      ["Integración colaborativa", 72],
      ["Flexibilidad adaptativa", 70],
      ["Estabilidad regulatoria", 91],
      ["Orientación a la ejecución", 94],
      ["Coherencia semántica", 82],
    ],
    tensiones: [
      [
        "Ejecución alta / Flexibilidad limitada",
        "Sostiene alta productividad, aunque requiere cuidado frente a escenarios muy ambiguos.",
      ],
      [
        "Control operacional / Innovación gradual",
        "Prefiere rutas claras antes que exploración abierta.",
      ],
      [
        "Estabilidad / Riesgo de rigidez",
        "Su consistencia puede volverse menos adaptable en culturas altamente cambiantes.",
      ],
    ],
  },
  {
    nombre: "Camila Rojas",
    rol: "Coordinación de Equipos",
    configuracion: "Moduladora Colaborativa Contextual",
    resumen:
      "Favorece coordinación interpersonal, lectura contextual y construcción de acuerdos en equipos diversos.",
    confianza: "Media-alta",
    estabilidad: "Moderada",
    consistencia: "Emergente",
    ejes: [
      ["Abstracción estratégica", 74],
      ["Integración colaborativa", 93],
      ["Flexibilidad adaptativa", 87],
      ["Estabilidad regulatoria", 64],
      ["Orientación a la ejecución", 69],
      ["Coherencia semántica", 80],
    ],
    tensiones: [
      [
        "Colaboración alta / Cierre decisional lento",
        "Integra voces múltiples, pero puede demorar decisiones finales.",
      ],
      [
        "Sensibilidad contextual / Sobrecarga relacional",
        "Alta lectura del entorno con posible fatiga en equipos tensionados.",
      ],
      [
        "Flexibilidad / Estabilidad fluctuante",
        "Se adapta con rapidez, aunque requiere anclajes regulatorios claros.",
      ],
    ],
  },
];

function Sidebar({ view, setView }) {
  const items = [
    ["Dashboard", LayoutDashboard],
    ["Proyectos", Briefcase],
    ["Candidatos", Users],
    ["Reportes", FileText],
    ["Organizaciones", Building2],
    ["Configuración", Settings],
  ];

  return (
    <aside className="fixed left-0 top-0 z-20 min-h-screen w-72 bg-[#102033] px-6 py-8 text-white">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Cognora</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-200/90">
          Inteligencia adaptativa humana
        </p>
      </div>

      <nav className="space-y-3">
        {items.map(([label, Icon]) => (
          <button
            key={label}
            onClick={() => setView(label)}
            className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-base transition-all duration-300 ${
              view === label
                ? "bg-white text-[#102033] shadow-sm"
                : "text-slate-200/90 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon size={21} />
            {label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold">
            A
          </div>
          <div>
            <p className="text-base font-semibold">Cognora</p>
            <p className="text-sm text-slate-200/85">by Altiora</p>
          </div>
        </div>

        <div className="mt-5 border-t border-white/15 pt-5">
          <p className="text-sm leading-relaxed text-slate-200/90">
            Inteligencia adaptativa organizacional basada en interpretación contextual.
          </p>
        </div>
      </div>
    </aside>
  );
}

function Page({ children }) {
  return (
    <main className="ml-72 min-h-screen w-[calc(100vw-18rem)] bg-[#f6f8fb] px-12 py-10">
      {children}
    </main>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42 }}
      className={`rounded-[2rem] border border-slate-200/80 bg-white p-9 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Bar({ label, value, dark = false }) {
  return (
    <div>
      <div
        className={`mb-3 flex justify-between text-base ${
          dark ? "text-slate-100" : "text-slate-700"
        }`}
      >
        <span className="font-medium">{label}</span>
        <span>{value}%</span>
      </div>

      <div
        className={`h-3 overflow-hidden rounded-full ${
          dark ? "bg-white/30" : "bg-slate-100"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9 }}
          className={`h-full rounded-full ${
            dark ? "bg-white" : "bg-[#102033]"
          }`}
        />
      </div>
    </div>
  );
}

function Dashboard({ setView }) {
    const [evaluationsCount, setEvaluationsCount] = useState(null);

  useEffect(() => {
    fetch("https://cognora-api.onrender.com/evaluations")
      .then((res) => res.json())
      .then((data) => {
        setEvaluationsCount(data.count ?? 0);
      })
      .catch(() => {
        setEvaluationsCount(null);
      });
  }, []);
  return (
    <Page>
      <div className="mb-10 flex items-start justify-between">
        <div>
          <h2 className="text-6xl font-bold tracking-tight text-slate-950">
            Dashboard
          </h2>
          <p className="mt-5 max-w-4xl text-xl leading-relaxed text-slate-600">
            Una visión serena de evaluaciones adaptativas, inteligencia organizacional y actividad interpretativa.
          </p>
        </div>

        <button
          onClick={() => setView("Nueva")}
          className="rounded-2xl bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
        >
          Nueva evaluación
        </button>
      </div>

      <section className="grid grid-cols-3 gap-7">
        {[
          ["Proyectos activos", "3", "2 requieren revisión interpretativa", Brain],
          [
  "Evaluaciones recibidas",
  evaluationsCount === null ? "—" : String(evaluationsCount),
  "Leídas desde Cognora API",
  Users,
],,
          ["Confianza interpretativa", "Alta", "Basada en evidencia multicapa", ShieldCheck],
        ].map(([title, value, desc, Icon]) => (
          <Card key={title} className="min-h-[240px]">
            <Icon className="mb-6 text-slate-950" size={28} />
            <h3 className="text-2xl font-bold text-slate-950">{title}</h3>
            <p className="mt-6 text-7xl font-bold tracking-tight text-slate-950">
              {value}
            </p>
            <p className="mt-5 text-lg text-slate-600">{desc}</p>
          </Card>
        ))}
      </section>

      <section className="mt-7 grid grid-cols-2 gap-7">
        <Card className="min-h-[340px]">
          <h3 className="mb-6 text-4xl font-bold tracking-tight text-slate-950">
            Actividad interpretativa reciente
          </h3>

          {[
            "Configuración de liderazgo actualizada.",
            "Nuevo reporte de compatibilidad generado.",
            "Mapa adaptativo de rol completado.",
          ].map((item) => (
            <div
              key={item}
              className="mb-4 rounded-2xl bg-slate-50 px-6 py-5 text-lg text-slate-700"
            >
              ✨ {item}
            </div>
          ))}

          <button
            onClick={() => setView("Reportes")}
            className="mt-5 rounded-2xl bg-slate-950 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
          >
            Abrir Report Explorer
          </button>
        </Card>

        <Card className="min-h-[340px] border-0 bg-gradient-to-br from-[#102033] to-[#1a2f47] text-white shadow-2xl">
          <h3 className="mb-6 text-4xl font-bold tracking-tight">
            Perfil adaptativo de rol
          </h3>
          <p className="mb-8 text-xl leading-relaxed text-slate-100">
            Cognora transforma contexto organizacional en mapas de inteligencia adaptativa y trayectorias interpretativas multicapa.
          </p>

          <Bar label="Flexibilidad adaptativa" value={86} dark />
          <div className="mt-6" />
          <Bar label="Complejidad estratégica" value={91} dark />
          <div className="mt-6" />
          <Bar label="Colaboración" value={84} dark />
        </Card>
      </section>
    </Page>
  );
}

function NewEvaluationView() {
  return (
    <Page>
      <div className="max-w-6xl">
        <p className="mb-3 text-base font-medium text-slate-600">
          Cognora Select / Nueva evaluación
        </p>

        <h1 className="text-7xl font-bold tracking-tight text-slate-950">
          Nueva evaluación adaptativa
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-slate-600">
          Cognora explora configuraciones humanas en contexto. Esta evaluación no busca reducir personas a puntajes, sino comprender trayectorias adaptativas, tensiones y potencial organizacional.
        </p>
      </div>

      <section className="mt-10 grid grid-cols-2 gap-7">
        <Card>
          <h2 className="mb-6 text-4xl font-bold text-slate-950">
            Contexto organizacional
          </h2>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Organización
              </label>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition-all focus:border-slate-400"
                placeholder="Altiora"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Área o unidad
              </label>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition-all focus:border-slate-400"
                placeholder="Innovación estratégica"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Tipo de desafío
              </label>
              <textarea
                rows="5"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition-all focus:border-slate-400"
                placeholder="Describe brevemente el contexto adaptativo que enfrenta el equipo u organización."
              />
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="mb-6 text-4xl font-bold text-slate-950">
            Perfil esperado
          </h2>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Nombre del rol
              </label>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition-all focus:border-slate-400"
                placeholder="Liderazgo adaptativo"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Complejidad estratégica
              </label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none">
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Variables críticas
              </label>
              <textarea
                rows="5"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition-all focus:border-slate-400"
                placeholder="Ejemplo: coordinación interdisciplinaria, regulación bajo presión, innovación, liderazgo distribuido..."
              />
            </div>
          </div>
        </Card>
      </section>

      <div className="mt-10 flex justify-end gap-4">
        <button className="rounded-2xl border border-slate-200 bg-white px-8 py-5 text-lg font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50">
          Guardar borrador
        </button>

        <button className="rounded-2xl bg-slate-950 px-8 py-5 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg">
          Continuar exploración
        </button>
      </div>
    </Page>
  );
}

function ReportExplorer() {
  const [selected, setSelected] = useState(0);
  const [backendEvaluations, setBackendEvaluations] = useState([]);
  const [selectedBackendEvaluation, setSelectedBackendEvaluation] =
    useState(null);
const [backendReport, setBackendReport] = useState(null);
  const perfil = perfiles[selected];

  useEffect(() => {
    fetch("https://cognora-api.onrender.com/evaluations")
      .then((res) => res.json())
      .then((data) => {
        setBackendEvaluations(data.evaluations || []);
      })
      .catch(() => {
        setBackendEvaluations([]);
      });
  }, []);
const openBackendEvaluation = async (evaluation) => {
  setSelectedBackendEvaluation(evaluation);
  setBackendReport(null);

  try {
    const response = await fetch(
      `https://cognora-api.onrender.com/evaluations/${evaluation.id}/report`
    );

    const report = await response.json();

    setBackendReport(report);
  } catch (error) {
    console.error("COGNORA_REPORT_ERROR", error);
  }
};
  return (
    <Page>
      <section className="mb-7 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="mb-2 text-base font-medium text-slate-600">
              Evaluaciones reales / Cognora API
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950">
              {backendEvaluations.length} evaluaciones recibidas
            </h2>

            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-600">
              Selecciona una evaluación real para abrir un reporte dinámico
              basado en los datos recibidos desde FastAPI.
            </p>
          </div>

          <div className="rounded-3xl bg-[#102033] px-7 py-5 text-white shadow-xl">
            <p className="text-sm text-slate-300">Fuente</p>
            <p className="mt-2 text-2xl font-bold">Backend real</p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-5">
          {backendEvaluations.slice(0, 6).map((evaluation) => (
            <button
              key={evaluation.id}
              onClick={() => openBackendEvaluation(evaluation)}
              className={`rounded-3xl p-6 text-left transition-all ${
                selectedBackendEvaluation?.id === evaluation.id
                  ? "bg-[#102033] text-white shadow-xl"
                  : "bg-slate-50 text-slate-950 hover:bg-slate-100"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-wide opacity-70">
                Evaluación real
              </p>

              <p className="mt-3 text-xl font-bold">
                {evaluation.candidate?.name || "Candidato sin nombre"}
              </p>

              <p className="mt-2 text-base opacity-80">
                {evaluation.role?.title || "Rol sin definir"}
              </p>

              <p className="mt-4 text-sm opacity-70">
                {evaluation.organization?.name || "Organización sin definir"}
              </p>

              <p className="mt-2 text-xs opacity-60">
                {evaluation.createdAt
                  ? new Date(evaluation.createdAt).toLocaleString()
                  : "Sin fecha"}
              </p>
            </button>
          ))}
        </div>
      </section>

      {selectedBackendEvaluation && (
        <section className="mb-7 rounded-[2rem] border border-slate-200/80 bg-white p-10 shadow-sm">
          <div className="flex items-start justify-between gap-10">
            <div>
              <p className="mb-3 text-base font-medium text-slate-600">
                Reporte dinámico / Evaluación real
              </p>

              <h2 className="text-6xl font-bold tracking-tight text-slate-950">
                {selectedBackendEvaluation.candidate?.name ||
                  "Candidato sin nombre"}
              </h2>

              <p className="mt-3 text-xl text-slate-600">
                {selectedBackendEvaluation.role?.title || "Rol sin definir"}
              </p>

              <p className="mt-6 text-3xl font-semibold text-[#102033]">
                {selectedBackendEvaluation.organization?.name ||
                  "Organización sin definir"}
              </p>

              <p className="mt-6 max-w-5xl text-xl leading-relaxed text-slate-700">
                Evaluación generada desde el flujo real de Cognora. Este reporte
                muestra la primera lectura dinámica del perfil adaptativo, las
                variables críticas y el escenario situacional registrado.
              </p>
            </div>

            <div className="w-96 shrink-0 rounded-3xl bg-gradient-to-br from-[#102033] to-[#1a2f47] p-7 text-white shadow-xl">
              <div className="mb-6 flex items-center gap-3 text-lg font-bold">
                <ShieldCheck size={22} />
                Estado del reporte
              </div>

              <div className="space-y-5 text-base text-slate-100">
                <div className="flex justify-between">
                  <span>Origen</span>
                  <b>FastAPI</b>
                </div>

                <div className="flex justify-between">
                  <span>Estado</span>
                  <b>Recibido</b>
                </div>

                <div className="flex justify-between">
                  <span>Variables</span>
                  <b>
                    {selectedBackendEvaluation.criticalVariables?.length || 0}
                  </b>
                </div>
              </div>
            </div>
          </div>
{backendReport && (
  <section className="mt-10 rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8">
    <p className="mb-2 text-base font-medium text-slate-600">
      Reporte generado por Cognora API
    </p>

    <h3 className="text-4xl font-bold tracking-tight text-slate-950">
      {backendReport.summary?.interpretiveLevel || "Nivel interpretativo no disponible"}
    </h3>

    <div className="mt-7 grid grid-cols-3 gap-5">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Promedio adaptativo
        </p>
        <p className="mt-3 text-3xl font-bold text-slate-950">
          {backendReport.summary?.averageAdaptiveProfile ?? "—"}%
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Variables críticas
        </p>
        <p className="mt-3 text-3xl font-bold text-slate-950">
          {backendReport.summary?.criticalVariablesCount ?? "—"}
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Escenario
        </p>
        <p className="mt-3 text-3xl font-bold text-slate-950">
          {backendReport.summary?.hasScenarioResponse ? "Sí" : "No"}
        </p>
      </div>
    </div>

    <p className="mt-7 text-xl leading-relaxed text-slate-700">
      {backendReport.preliminaryInterpretation}
    </p>
  </section>
)}
          <section className="mt-10 grid grid-cols-2 gap-7">
            <Card>
              <div className="mb-7 flex items-center gap-3 text-3xl font-bold text-slate-950">
                <Brain size={28} />
                Perfil adaptativo real
              </div>

              <div className="space-y-7">
                {Object.entries(
  selectedBackendEvaluation.adaptiveProfile || {}
).map(([label, value]) => {
  const labelMap = {
    flexibility: "Flexibilidad adaptativa",
    ambiguity: "Tolerancia a la ambigüedad",
    collaboration: "Colaboración",
    leadership: "Liderazgo contextual",
    strategicComplexity: "Complejidad estratégica",
    regulation: "Regulación interpretativa",
  };

  return (
    <Bar
      key={label}
      label={labelMap[label] || label}
      value={value}
    />
  );
})}
              </div>
            </Card>

            <Card>
              <div className="mb-7 flex items-center gap-3 text-3xl font-bold text-slate-950">
                <Sparkles size={28} />
                Variables críticas
              </div>

              <div className="flex flex-wrap gap-3">
                {(selectedBackendEvaluation.criticalVariables || []).map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-5 py-3 text-base text-slate-700"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Escenario
                </p>

                <p className="mt-3 text-lg leading-relaxed text-slate-700">
                  {selectedBackendEvaluation.scenario?.response ||
                    "Sin respuesta situacional registrada."}
                </p>
              </div>
            </Card>
          </section>
        </section>
      )}

      <div className="mb-6 flex flex-wrap gap-4">
        {perfiles.map((p, i) => (
          <button
            key={p.nombre}
            onClick={() => {
              setSelected(i);
              setSelectedBackendEvaluation(null);
            }}
            className={`rounded-2xl px-6 py-4 text-base font-semibold transition ${
              selected === i && !selectedBackendEvaluation
                ? "bg-[#102033] text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {p.nombre}
          </button>
        ))}
      </div>

      {!selectedBackendEvaluation && (
        <>
          <section className="mb-7 rounded-[2rem] border border-slate-200/80 bg-white p-10 shadow-sm">
            <div className="flex items-start justify-between gap-10">
              <div>
                <p className="mb-3 text-base font-medium text-slate-600">
                  Reporte interpretativo / Cognora Select
                </p>

                <h2 className="text-7xl font-bold tracking-tight text-slate-950">
                  {perfil.nombre}
                </h2>

                <p className="mt-3 text-lg text-slate-600">{perfil.rol}</p>

                <p className="mt-6 text-3xl font-semibold text-[#102033]">
                  {perfil.configuracion}
                </p>

                <p className="mt-6 max-w-5xl text-xl leading-relaxed text-slate-700">
                  {perfil.resumen}
                </p>
              </div>

              <div className="w-96 shrink-0 rounded-3xl bg-gradient-to-br from-[#102033] to-[#1a2f47] p-7 text-white shadow-xl">
                <div className="mb-6 flex items-center gap-3 text-lg font-bold">
                  <ShieldCheck size={22} />
                  Confianza interpretativa
                </div>

                <div className="space-y-5 text-base text-slate-100">
                  <div className="flex justify-between">
                    <span>Confianza</span>
                    <b>{perfil.confianza}</b>
                  </div>
                  <div className="flex justify-between">
                    <span>Estabilidad</span>
                    <b>{perfil.estabilidad}</b>
                  </div>
                  <div className="flex justify-between">
                    <span>Consistencia</span>
                    <b>{perfil.consistencia}</b>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-3 gap-7">
            <Card className="col-span-2">
              <div className="mb-7 flex items-center gap-3 text-3xl font-bold text-slate-950">
                <Brain size={28} />
                Mapa de configuración adaptativa
              </div>

              <div className="space-y-7">
                {perfil.ejes.map(([label, value]) => (
                  <Bar key={label} label={label} value={value} />
                ))}
              </div>
            </Card>

            <Card>
              <div className="mb-7 flex items-center gap-3 text-3xl font-bold text-slate-950">
                <Sparkles size={28} />
                Síntesis interpretativa
              </div>

              {perfil.ejes.slice(0, 4).map(([label, value]) => (
                <div
                  key={label}
                  className="mb-4 rounded-2xl bg-slate-50 p-5 text-lg text-slate-700"
                >
                  {label}: <b>{value}%</b>
                </div>
              ))}
            </Card>
          </section>

          <Card className="mt-7 border-0 bg-gradient-to-br from-[#102033] to-[#1a2f47] text-white shadow-2xl">
            <div className="mb-7 flex items-center gap-3 text-3xl font-bold">
              <Layers size={28} />
              Motor de tensiones adaptativas
            </div>

            <div className="grid grid-cols-3 gap-6">
              {perfil.tensiones.map(([titulo, texto]) => (
                <motion.div
                  key={titulo}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-white/10 bg-white/10 p-7 transition-all duration-300 hover:bg-white/15"
                >
                  <h3 className="mb-4 text-2xl font-bold">{titulo}</h3>
                  <p className="text-lg leading-relaxed text-slate-100">
                    {texto}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </>
      )}
    </Page>
  );
}

function Placeholder({ title }) {
  return (
    <Page>
      <h2 className="text-6xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
        Módulo en construcción. Esta versión prioriza el Report Explorer como núcleo interpretativo de Cognora.
      </p>
    </Page>
  );
}

export default function App() {
  const [view, setView] = useState("Dashboard");

  return (
    <>
      <Sidebar view={view} setView={setView} />

      {view === "Dashboard" && <Dashboard setView={setView} />}

      {view === "Nueva" && <NewEvaluationFlow />}

      {view === "Reportes" && <ReportExplorer />}

      {!["Dashboard", "Nueva", "Reportes"].includes(view) && (
        <Placeholder title={view} />
      )}
    </>
  );
}
