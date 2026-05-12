import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Briefcase, Users, FileText, Building2, Settings,
  Brain, Sparkles, ShieldCheck, Eye, Layers, Compass, Network, Target
} from "lucide-react";

const perfiles = [
  {
    nombre: "Elena Martínez",
    rol: "Dirección de Innovación Organizacional",
    configuracion: "Integradora Estratégica Adaptativa",
    resumen: "Integra información compleja, coordina escenarios ambiguos y transforma incertidumbre en dirección estratégica compartida.",
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
      ["Visión estratégica / Fragilidad operacional", "Lectura macroestructural sólida con tensión ante cierres operativos rápidos."],
      ["Colaboración adaptativa / Evitación de conflicto", "Modula el vínculo colaborativo, aunque puede suavizar confrontaciones difíciles."],
      ["Autonomía / Calibración colectiva reducida", "Alta autonomía con necesidad de sincronización periódica con equipos estratégicos."],
    ],
  },
  {
    nombre: "Andrés Valdés",
    rol: "Liderazgo de Operaciones",
    configuracion: "Ejecutor Estratégico Regulado",
    resumen: "Presenta fuerte orientación a resultados, estabilidad operacional y alta capacidad para sostener procesos bajo presión.",
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
      ["Ejecución alta / Flexibilidad limitada", "Puede sostener alta productividad, aunque requiere cuidado frente a escenarios muy ambiguos."],
      ["Control operacional / Innovación gradual", "Prefiere rutas claras antes que exploración abierta."],
      ["Estabilidad / Riesgo de rigidez", "Su consistencia puede volverse menos adaptable en culturas altamente cambiantes."],
    ],
  },
  {
    nombre: "Camila Rojas",
    rol: "Coordinación de Equipos",
    configuracion: "Moduladora Colaborativa Contextual",
    resumen: "Favorece coordinación interpersonal, lectura contextual y construcción de acuerdos en equipos diversos.",
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
      ["Colaboración alta / Cierre decisional lento", "Integra voces múltiples, pero puede demorar decisiones finales."],
      ["Sensibilidad contextual / Sobrecarga relacional", "Alta lectura del entorno con posible fatiga en equipos tensionados."],
      ["Flexibilidad / Estabilidad fluctuante", "Se adapta con rapidez, aunque requiere anclajes regulatorios claros."],
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
    <aside className="fixed left-0 top-0 z-20 min-h-screen w-64 border-r border-white/10 bg-[#102033] px-5 py-7 text-white">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Cognora</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-slate-200/85">
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
                : "text-slate-200/85 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-5 left-4 right-4 rounded-3xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-lg font-bold">
            A
          </div>
          <div>
            <p className="text-[15px] font-semibold">Cognora</p>
            <p className="text-[13px] text-slate-200/85">by Altiora</p>
          </div>
        </div>

        <div className="mt-4 border-t border-white/15 pt-4">
          <p className="text-[13px] leading-relaxed text-slate-200/85">
            Inteligencia adaptativa organizacional basada en interpretación contextual.
          </p>
        </div>
      </div>
    </aside>
  );
}

function Page({ children }) {
  return (
    <main className="ml-64 min-h-screen bg-[#f6f8fb] px-8 py-7">
      <div className="mx-auto max-w-[1500px]">{children}</div>
    </main>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42 }}
      className={`rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Bar({ label, value, dark = false }) {
  return (
    <div>
      <div className={`mb-2 flex justify-between text-[15px] ${dark ? "text-slate-100" : "text-slate-700"}`}>
        <span className="font-medium">{label}</span>
        <span>{value}%</span>
      </div>
      <div className={`h-2.5 overflow-hidden rounded-full ${dark ? "bg-white/20" : "bg-slate-100"}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9 }}
          className={`h-full rounded-full ${dark ? "bg-white" : "bg-[#102033]"}`}
        />
      </div>
    </div>
  );
}

function Dashboard({ setView }) {
  return (
    <Page>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-slate-950">
            Dashboard
          </h2>
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-slate-600">
            Una visión serena de evaluaciones adaptativas, inteligencia organizacional y actividad interpretativa.
          </p>
        </div>

        <button className="rounded-2xl bg-slate-950 px-7 py-4 text-[14px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg">
          Nueva evaluación
        </button>
      </div>

      <section className="grid grid-cols-3 gap-5">
        {[
          ["Proyectos activos", "3", "2 requieren revisión interpretativa", Brain],
          ["Candidatos", "26", "5 reportes pendientes", Users],
          ["Confianza interpretativa", "Alta", "Basada en evidencia multicapa", ShieldCheck],
        ].map(([title, value, desc, Icon]) => (
          <Card key={title} className="min-h-[190px]">
            <Icon className="mb-5 text-slate-950" size={24} />
            <h3 className="text-[20px] font-bold text-slate-950">{title}</h3>
            <p className="mt-5 text-6xl font-bold tracking-tight text-slate-950">{value}</p>
            <p className="mt-4 text-[15px] text-slate-600">{desc}</p>
          </Card>
        ))}
      </section>

      <section className="mt-5 grid grid-cols-2 gap-5">
        <Card className="min-h-[285px]">
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
              className="mb-3 rounded-2xl bg-slate-50 px-5 py-4 text-[15px] text-slate-700"
            >
              ✨ {item}
            </div>
          ))}

          <button
            onClick={() => setView("Reportes")}
            className="mt-4 rounded-2xl bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
          >
            Abrir Report Explorer
          </button>
        </Card>

        <Card className="min-h-[285px] border-0 bg-[#102033] text-white shadow-2xl">
          <h3 className="mb-5 text-3xl font-bold tracking-tight">
            Perfil adaptativo de rol
          </h3>
          <p className="mb-7 text-[16px] leading-relaxed text-slate-200">
            Cognora transforma contexto organizacional en mapas de inteligencia adaptativa y trayectorias interpretativas multicapa.
          </p>

          <Bar label="Flexibilidad adaptativa" value={86} dark />
          <div className="mt-5" />
          <Bar label="Complejidad estratégica" value={91} dark />
          <div className="mt-5" />
          <Bar label="Colaboración" value={84} dark />
        </Card>
      </section>
    </Page>
  );
}

function ReportExplorer() {
  const [selected, setSelected] = useState(0);
  const perfil = perfiles[selected];

  return (
    <Page>
      <div className="mb-5 flex flex-wrap gap-3">
        {perfiles.map((p, i) => (
          <button
            key={p.nombre}
            onClick={() => setSelected(i)}
            className={`rounded-2xl px-5 py-3 text-[14px] font-semibold transition ${
              selected === i
                ? "bg-[#102033] text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {p.nombre}
          </button>
        ))}
      </div>

      <section className="mb-5 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="mb-2 text-[15px] font-medium text-slate-600">
              Reporte interpretativo / Cognora Select
            </p>
            <h2 className="text-6xl font-bold tracking-tight text-slate-950">
              {perfil.nombre}
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">{perfil.rol}</p>

            <p className="mt-5 text-2xl font-semibold text-[#102033]">
              {perfil.configuracion}
            </p>

            <p className="mt-5 max-w-4xl text-[18px] leading-relaxed text-slate-700">
              {perfil.resumen}
            </p>
          </div>

          <div className="w-80 shrink-0 rounded-3xl bg-[#102033] p-6 text-white shadow-xl">
            <div className="mb-5 flex items-center gap-2 text-[16px] font-bold">
              <ShieldCheck size={18} />
              Confianza interpretativa
            </div>

            <div className="space-y-4 text-[14px] text-slate-200">
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

      <section className="grid grid-cols-3 gap-5">
        <Card className="col-span-2">
          <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950">
            <Brain size={22} />
            Mapa de configuración adaptativa
          </div>

          <div className="space-y-5">
            {perfil.ejes.map(([label, value]) => (
              <Bar key={label} label={label} value={value} />
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950">
            <Sparkles size={22} />
            Síntesis interpretativa
          </div>

          {perfil.ejes.slice(0, 4).map(([label, value]) => (
            <div
              key={label}
              className="mb-3 rounded-2xl bg-slate-50 p-4 text-[15px] text-slate-700"
            >
              {label}: <b>{value}%</b>
            </div>
          ))}
        </Card>
      </section>

      <Card className="mt-5 border-0 bg-[#102033] text-white shadow-2xl">
        <div className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Layers size={22} />
          Motor de tensiones adaptativas
        </div>

        <div className="grid grid-cols-3 gap-5">
          {perfil.tensiones.map(([titulo, texto]) => (
            <motion.div
              key={titulo}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 transition-all duration-300 hover:bg-white/15"
            >
              <h3 className="mb-3 text-lg font-bold">{titulo}</h3>
              <p className="text-[15px] leading-relaxed text-slate-200">{texto}</p>
            </motion.div>
          ))}
        </div>
      </Card>

      <section className="mt-5 grid grid-cols-2 gap-5">
        <Card>
          <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950">
            <Eye size={22} />
            Evidencia interpretativa
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["Estabilidad semántica", "Reencuadre adaptativo", "Modulación colaborativa", "Coherencia discursiva"].map((e) => (
              <div key={e} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-[15px] text-slate-600">{e}</p>
                <p className="mt-1 text-lg font-bold text-slate-950">Alta</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-6 border-l-2 border-[#102033] pl-4 text-[15px] leading-relaxed text-slate-700">
            “La respuesta muestra integración contextual y búsqueda de sentido antes que cierre prematuro.”
          </blockquote>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950">
            <Compass size={22} />
            Trayectoria adaptativa
          </div>

          {["Consolidación estratégica", "Fortalecimiento regulatorio", "Mayor coordinación contextual"].map((t) => (
            <div key={t} className="mb-3 rounded-2xl bg-slate-50 p-4 text-[15px] text-slate-700">
              {t}
            </div>
          ))}
        </Card>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-5">
        <Card>
          <div className="mb-5 flex items-center gap-2 text-2xl font-bold text-slate-950">
            <Target size={22} />
            Alineación organizacional
          </div>
          <div className="flex flex-wrap gap-2">
            {["Innovación adaptativa", "Equipos interdisciplinarios", "Autonomía estratégica", "Cultura de aprendizaje"].map((a) => (
              <span key={a} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                {a}
              </span>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-5 flex items-center gap-2 text-2xl font-bold text-slate-950">
            <Network size={22} />
            Zonas de fricción potencial
          </div>
          <div className="flex flex-wrap gap-2">
            {["Jerarquías rígidas", "Micromanagement", "Baja tolerancia a la ambigüedad", "Procedimientos excesivos"].map((a) => (
              <span key={a} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                {a}
              </span>
            ))}
          </div>
        </Card>
      </section>
    </Page>
  );
}

function Placeholder({ title }) {
  return (
    <Page>
      <h2 className="text-5xl font-bold tracking-tight text-slate-950">{title}</h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
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
      {view === "Reportes" && <ReportExplorer />}
      {!["Dashboard", "Reportes"].includes(view) && <Placeholder title={view} />}
    </>
  );
}
