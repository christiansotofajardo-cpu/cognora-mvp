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
  rol: "Dirección de Innovación Organizacional",
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
  dinamicas: [
    "Alta integración contextual",
    "Síntesis estratégica avanzada",
    "Buena tolerancia a la ambigüedad",
    "Regulación moderadamente fluctuante bajo presión",
  ],
  tensiones: [
    {
      titulo: "Visión estratégica / Fragilidad operacional",
      texto:
        "Presenta una lectura macroestructural sólida, aunque puede experimentar tensión cuando el entorno exige cierre operativo rápido.",
    },
    {
      titulo: "Colaboración adaptativa / Evitación de conflicto",
      texto:
        "Tiende a modular el vínculo colaborativo, pero puede suavizar excesivamente la confrontación en escenarios interpersonales difíciles.",
    },
    {
      titulo: "Autonomía / Calibración colectiva reducida",
      texto:
        "Opera con alta autonomía, aunque podría beneficiarse de instancias periódicas de sincronización con equipos estratégicos.",
    },
  ],
  evidencias: [
    ["Estabilidad semántica", "Alta"],
    ["Reencuadre adaptativo", "Moderado"],
    ["Modulación colaborativa", "Alta"],
    ["Coherencia discursiva", "Alta"],
  ],
  fragmentos: [
    "Cuando aumenta la ambigüedad, la respuesta tiende a integrar perspectivas antes que imponer una dirección única.",
    "La narrativa mantiene coherencia incluso ante escenarios organizacionales de incertidumbre.",
    "La toma de decisiones aparece mediada por búsqueda de sentido, coordinación y lectura contextual.",
  ],
  trayectoria: [
    "Expansión hacia liderazgo estratégico transversal",
    "Fortalecimiento de regulación bajo presión operacional",
    "Mayor cierre decisional en contextos de alta demanda",
  ],
  alineacion: [
    "Ecosistemas de innovación adaptativa",
    "Equipos interdisciplinarios",
    "Organizaciones con autonomía estratégica",
    "Culturas de aprendizaje y transformación",
  ],
  fricciones: [
    "Jerarquías rígidas",
    "Micromanagement operacional",
    "Culturas con baja tolerancia a la ambigüedad",
    "Entornos excesivamente procedimentales",
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
    <aside className="fixed left-0 top-0 min-h-screen w-72 border-r border-slate-200 bg-white px-5 py-7">
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-slate-950">Cognora</h1>
        <p className="mt-1 text-sm text-slate-500">Inteligencia adaptativa humana</p>
      </div>

      <nav className="space-y-2">
        {items.map(([label, Icon]) => (
          <button
            key={label}
            onClick={() => setView(label)}
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
              view === label
                ? "bg-slate-950 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-5 right-5 rounded-3xl bg-slate-50 p-4">
        <p className="font-semibold text-slate-950">Dr. Christian Soto</p>
        <p className="mt-1 text-xs text-slate-500">Altiora / Cognora MVP</p>
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
      className={`rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Bar({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9 }}
          className="h-full rounded-full bg-slate-950"
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
          <h2 className="text-4xl font-bold tracking-tight text-slate-950">Dashboard</h2>
          <p className="mt-4 max-w-3xl text-slate-500">
            Una visión serena de evaluaciones adaptativas, inteligencia organizacional y actividad interpretativa.
          </p>
        </div>
        <button className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
          Nueva evaluación
        </button>
      </div>

      <section className="grid grid-cols-3 gap-6">
        <Card>
          <Brain className="mb-5 text-slate-950" />
          <h3 className="text-lg font-bold text-slate-950">Proyectos activos</h3>
          <p className="mt-6 text-5xl font-bold text-slate-950">3</p>
          <p className="mt-4 text-slate-500">2 requieren revisión interpretativa</p>
        </Card>

        <Card>
          <Users className="mb-5 text-slate-950" />
          <h3 className="text-lg font-bold text-slate-950">Candidatos</h3>
          <p className="mt-6 text-5xl font-bold text-slate-950">26</p>
          <p className="mt-4 text-slate-500">5 reportes pendientes</p>
        </Card>

        <Card>
          <ShieldCheck className="mb-5 text-slate-950" />
          <h3 className="text-lg font-bold text-slate-950">Confianza interpretativa</h3>
          <p className="mt-6 text-5xl font-bold text-slate-950">Alta</p>
          <p className="mt-4 text-slate-500">Basada en evidencia multicapa</p>
        </Card>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-6">
        <Card>
          <h3 className="mb-5 text-2xl font-bold text-slate-950">Actividad interpretativa reciente</h3>
          {[
            "Configuración de liderazgo actualizada.",
            "Nuevo reporte de compatibilidad generado.",
            "Mapa adaptativo de rol completado.",
          ].map((item) => (
            <div key={item} className="mb-3 rounded-2xl bg-slate-50 px-5 py-4 text-slate-600">
              ✨ {item}
            </div>
          ))}
          <button
            onClick={() => setView("Reportes")}
            className="mt-4 rounded-2xl bg-slate-100 px-5 py-3 text-sm font-medium text-slate-950"
          >
            Abrir Report Explorer
          </button>
        </Card>

        <Card className="bg-slate-950 text-white">
          <h3 className="mb-5 text-2xl font-bold">Perfil adaptativo de rol</h3>
          <p className="mb-7 text-slate-300">
            Cognora transforma contexto organizacional en mapas de inteligencia adaptativa.
          </p>
          <Bar label="Flexibilidad adaptativa" value={86} />
          <div className="mt-5" />
          <Bar label="Complejidad estratégica" value={91} />
          <div className="mt-5" />
          <Bar label="Colaboración" value={84} />
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
          <p className="mb-2 text-sm text-slate-500">Reporte interpretativo</p>
          <h2 className="text-5xl font-bold tracking-tight text-slate-950">{perfil.nombre}</h2>
          <p className="mt-3 text-xl font-semibold text-slate-700">{perfil.configuracion}</p>
          <p className="mt-4 max-w-4xl text-slate-600 leading-relaxed">{perfil.resumen}</p>
        </div>

        <Card className="w-80">
          <div className="mb-5 flex items-center gap-2 font-bold text-slate-950">
            <ShieldCheck size={18} />
            Confianza interpretativa
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Confianza</span><b>{perfil.confianza}</b></div>
            <div className="flex justify-between"><span>Estabilidad</span><b>{perfil.estabilidad}</b></div>
            <div className="flex justify-between"><span>Consistencia</span><b>{perfil.consistencia}</b></div>
          </div>
        </Card>
      </section>

      <section className="grid grid-cols-3 gap-6">
        <Card className="col-span-2">
          <div className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-950">
            <Brain size={21} />
            Mapa de configuración adaptativa
          </div>
          <div className="space-y-5">
            {perfil.ejes.map(([label, value]) => (
              <Bar key={label} label={label} value={value} />
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-950">
            <Sparkles size={21} />
            Dinámica central
          </div>
          <div className="space-y-3">
            {perfil.dinamicas.map((d) => (
              <div key={d} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                {d}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card className="mt-6 bg-slate-950 text-white">
        <div className="mb-6 flex items-center gap-2 text-xl font-bold">
          <Layers size={21} />
          Motor de tensiones adaptativas
        </div>
        <div className="grid grid-cols-3 gap-5">
          {perfil.tensiones.map((t) => (
            <motion.div
              key={t.titulo}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="mb-3 font-bold">{t.titulo}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{t.texto}</p>
            </motion.div>
          ))}
        </div>
      </Card>

      <section className="mt-6 grid grid-cols-2 gap-6">
        <Card>
          <div className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-950">
            <Activity size={21} />
            Evidencia interpretativa
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            {perfil.evidencias.map(([a, b]) => (
              <div key={a} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">{a}</p>
                <p className="mt-1 font-bold text-slate-950">{b}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {perfil.fragmentos.map((f) => (
              <blockquote key={f} className="border-l-2 border-slate-950 pl-4 text-sm leading-relaxed text-slate-600">
                {f}
              </blockquote>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-950">
            <Compass size={21} />
            Trayectoria adaptativa
          </div>

          <div className="space-y-3">
            {perfil.trayectoria.map((t) => (
              <div key={t} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                {t}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            Se proyecta una evolución favorable en ambientes que combinen autonomía estratégica,
            colaboración reflexiva y exigencias progresivas de cierre decisional.
          </p>
        </Card>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-6">
        <Card>
          <h3 className="mb-4 text-xl font-bold text-slate-950">Alineación organizacional fuerte</h3>
          <div className="flex flex-wrap gap-2">
            {perfil.alineacion.map((a) => (
              <span key={a} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">{a}</span>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-xl font-bold text-slate-950">Posibles zonas de fricción</h3>
          <div className="flex flex-wrap gap-2">
            {perfil.fricciones.map((a) => (
              <span key={a} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">{a}</span>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}

function Placeholder({ title }) {
  return (
    <main className="ml-72 min-h-screen bg-[#f6f8fb] p-10">
      <h2 className="text-4xl font-bold text-slate-950">{title}</h2>
      <p className="mt-4 max-w-2xl text-slate-500">
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
      {!["Dashboard", "Reportes"].includes(view) && <Placeholder title={view} />}
    </>
  );
}
