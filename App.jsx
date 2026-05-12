import { useState } from "react";
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
  Activity,
  Layers,
  Compass,
} from "lucide-react";

const perfil = {
  nombre: "Elena Martínez",
  configuracion: "Integradora Estratégica Adaptativa",
  resumen:
    "Muestra alta integración contextual, pensamiento estratégico y capacidad para coordinar escenarios ambiguos sin reducir la complejidad humana a decisiones simples.",
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
};

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
    <aside className="fixed left-0 top-0 z-20 min-h-screen w-72 border-r border-white/10 bg-[#102033] px-5 py-7 text-white">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Cognora
        </h1>

        <p className="mt-2 text-[15px] text-slate-200/80">
          Inteligencia adaptativa humana
        </p>
      </div>

      <nav className="space-y-2">
        {items.map(([label, Icon]) => (
          <button
            key={label}
            onClick={() => setView(label)}
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-[15px] transition-all duration-300 ${
              view === label
                ? "bg-white text-[#102033] shadow-sm"
                : "text-slate-200/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-5 right-5 rounded-3xl border border-white/10 bg-white/10 p-5 text-white shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-lg font-bold">
            A
          </div>

          <div>
            <p className="text-[15px] font-semibold tracking-wide">
              Cognora
            </p>

            <p className="text-[13px] text-slate-200/80">
              by Altiora
            </p>
          </div>
        </div>

        <div className="mt-4 border-t border-white/15 pt-4">
          <p className="text-[13px] leading-relaxed text-slate-200/80">
            Inteligencia adaptativa organizacional basada en interpretación contextual y evidencia multicapa.
          </p>
        </div>
      </div>
    </aside>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`rounded-[2rem] border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Bar({ label, value, dark = false }) {
  return (
    <div>
      <div
        className={`mb-2 flex justify-between text-sm ${
          dark ? "text-slate-100" : "text-slate-700"
        }`}
      >
        <span className="font-medium">{label}</span>
        <span>{value}%</span>
      </div>

      <div
        className={`h-2 overflow-hidden rounded-full ${
          dark ? "bg-white/20" : "bg-slate-100"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9 }}
          className={`h-full rounded-full ${
            dark ? "bg-white" : "bg-slate-950"
          }`}
        />
      </div>
    </div>
  );
}

function Dashboard({ setView }) {
  return (
    <main className="ml-72 min-h-screen bg-[#f6f8fb] p-10">
      <div className="mb-10 flex items-start justify-between">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-slate-950">
            Dashboard
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-500">
            Una visión serena de evaluaciones adaptativas, inteligencia organizacional y actividad interpretativa.
          </p>
        </div>

        <button className="rounded-2xl bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg">
          Nueva evaluación
        </button>
      </div>

      <section className="grid grid-cols-3 gap-6">
        <Card>
          <Brain className="mb-5 text-slate-950" />

          <h3 className="text-xl font-bold text-slate-950">
            Proyectos activos
          </h3>

          <p className="mt-6 text-6xl font-bold text-slate-950">3</p>

          <p className="mt-4 text-slate-500">
            2 requieren revisión interpretativa
          </p>
        </Card>

        <Card>
          <Users className="mb-5 text-slate-950" />

          <h3 className="text-xl font-bold text-slate-950">
            Candidatos
          </h3>

          <p className="mt-6 text-6xl font-bold text-slate-950">26</p>

          <p className="mt-4 text-slate-500">5 reportes pendientes</p>
        </Card>

        <Card>
          <ShieldCheck className="mb-5 text-slate-950" />

          <h3 className="text-xl font-bold text-slate-950">
            Confianza interpretativa
          </h3>

          <p className="mt-6 text-6xl font-bold text-slate-950">Alta</p>

          <p className="mt-4 text-slate-500">
            Basada en evidencia multicapa
          </p>
        </Card>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-6">
        <Card>
          <h3 className="mb-5 text-3xl font-bold tracking-tight text-slate-950">
            Actividad interpretativa reciente
          </h3>

          {[
            "Configuración de liderazgo actualizada.",
            "Nuevo reporte de compatibilidad generado.",
            "Mapa adaptativo de rol completado.",
          ].map((item) => (
            <div
              key={item}
              className="mb-3 rounded-2xl bg-slate-50 px-5 py-4 text-slate-600 transition-all duration-300 hover:bg-slate-100"
            >
              ✨ {item}
            </div>
          ))}

          <button
            onClick={() => setView("Reportes")}
            className="mt-5 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
          >
            Abrir Report Explorer
          </button>
        </Card>

        <Card className="border-0 bg-[#102033] text-white shadow-2xl">
          <h3 className="mb-5 text-3xl font-bold tracking-tight">
            Perfil adaptativo de rol
          </h3>

          <p className="mb-8 leading-relaxed text-slate-200">
            Cognora transforma contexto organizacional en mapas de inteligencia adaptativa y trayectorias interpretativas multicapa.
          </p>

          <Bar label="Flexibilidad adaptativa" value={86} dark />
          <div className="mt-6" />

          <Bar label="Complejidad estratégica" value={91} dark />
          <div className="mt-6" />

          <Bar label="Colaboración" value={84} dark />
        </Card>
      </section>
    </main>
  );
}

function ReportExplorer() {
  return (
    <main className="ml-72 min-h-screen bg-[#f6f8fb] p-10">
      <section className="mb-8 flex items-start justify-between gap-8">
        <div>
          <p className="mb-2 text-sm text-slate-500">
            Reporte interpretativo
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-slate-950">
            {perfil.nombre}
          </h2>

          <p className="mt-3 text-2xl font-semibold text-slate-700">
            {perfil.configuracion}
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-600">
            {perfil.resumen}
          </p>
        </div>

        <Card className="w-80">
          <div className="mb-5 flex items-center gap-2 font-bold text-slate-950">
            <ShieldCheck size={18} />
            Confianza interpretativa
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Confianza</span>
              <b className="text-slate-950">{perfil.confianza}</b>
            </div>

            <div className="flex justify-between">
              <span>Estabilidad</span>
              <b className="text-slate-950">{perfil.estabilidad}</b>
            </div>

            <div className="flex justify-between">
              <span>Consistencia</span>
              <b className="text-slate-950">{perfil.consistencia}</b>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid grid-cols-3 gap-6">
        <Card className="col-span-2">
          <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950">
            <Brain size={22} />
            Mapa de configuración adaptativa
          </div>

          <div className="space-y-6">
            {perfil.ejes.map(([label, value]) => (
              <Bar key={label} label={label} value={value} />
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950">
            <Sparkles size={22} />
            Dinámica central
          </div>

          {[
            "Alta integración contextual",
            "Síntesis estratégica avanzada",
            "Buena tolerancia a la ambigüedad",
            "Regulación moderadamente fluctuante",
          ].map((d) => (
            <div
              key={d}
              className="mb-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600"
            >
              {d}
            </div>
          ))}
        </Card>
      </section>

      <Card className="mt-6 border-0 bg-[#102033] text-white shadow-2xl">
        <div className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Layers size={22} />
          Motor de tensiones adaptativas
        </div>

        <div className="grid grid-cols-3 gap-5">
          {[
            [
              "Visión estratégica / Fragilidad operacional",
              "Lectura macroestructural sólida con posible tensión ante cierres operativos rápidos.",
            ],
            [
              "Colaboración adaptativa / Evitación de conflicto",
              "Modula el vínculo colaborativo, aunque puede suavizar confrontaciones difíciles.",
            ],
            [
              "Autonomía / Calibración colectiva reducida",
              "Alta autonomía con necesidad de sincronización periódica con equipos estratégicos.",
            ],
          ].map(([titulo, texto]) => (
            <motion.div
              key={titulo}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/10 p-5 transition-all duration-300 hover:bg-white/15"
            >
              <h3 className="mb-3 font-bold">{titulo}</h3>

              <p className="text-sm leading-relaxed text-slate-200">
                {texto}
              </p>
            </motion.div>
          ))}
        </div>
      </Card>
    </main>
  );
}

function Placeholder({ title }) {
  return (
    <main className="ml-72 min-h-screen bg-[#f6f8fb] p-10">
      <h2 className="text-5xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
        Módulo en construcción. Esta versión prioriza el Report Explorer como núcleo interpretativo de Cognora.
      </p>
    </main>
  );
}

export default function App() {
  const [view, setView] = useState("Dashboard");

  return (
    <>
      <Sidebar view={view} setView={setView} />

      {view === "Dashboard" && <Dashboard setView={setView} />}

      {view === "Reportes" && <ReportExplorer />}

      {!["Dashboard", "Reportes"].includes(view) && (
        <Placeholder title={view} />
      )}
    </>
  );
}
