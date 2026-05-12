import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  Settings,
  Building2,
  ChevronRight,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const dimensions = [
  ["Adaptive Flexibility", 86],
  ["Strategic Complexity", 91],
  ["Collaboration", 84],
  ["Emotional Regulation", 78],
  ["Ambiguity Tolerance", 88],
];

const projects = [
  {
    name: "Leadership Team Expansion",
    role: "Head of Product",
    status: "In Progress",
    candidates: 12,
    pending: 3,
  },
  {
    name: "Clinical Coordination Unit",
    role: "Clinical Coordinator",
    status: "Completed",
    candidates: 8,
    pending: 0,
  },
  {
    name: "Learning Analytics Team",
    role: "Learning Analytics Manager",
    status: "In Progress",
    candidates: 6,
    pending: 2,
  },
];

function Sidebar({ view, setView }) {
  const items = [
    ["dashboard", "Dashboard", LayoutDashboard],
    ["projects", "Projects", BriefcaseBusiness],
    ["candidates", "Candidates", Users],
    ["reports", "Reports", FileText],
    ["organizations", "Organizations", Building2],
    ["settings", "Settings", Settings],
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="logo">Cognora</div>
        <div className="tagline">Adaptive human intelligence</div>

        <nav>
          {items.map(([key, label, Icon]) => (
            <button
              key={key}
              className={view === key ? "nav active" : "nav"}
              onClick={() => setView(key)}
            >
              <Icon size={17} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="userbox">
        <strong>Dr. Christian Soto</strong>
        <span>Altiora / Cognora</span>
      </div>
    </aside>
  );
}

function Page({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  );
}

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <button className="primary">New Evaluation</button>
    </div>
  );
}

function Dashboard({ setView }) {
  return (
    <Page>
      <Header
        title="Dashboard"
        subtitle="A calm overview of adaptive evaluations, organizational intelligence and interpretive activity."
      />

      <div className="metrics">
        <div className="card">
          <Brain />
          <h3>Active Projects</h3>
          <div className="big">3</div>
          <p>2 require interpretive review</p>
        </div>

        <div className="card">
          <Users />
          <h3>Candidates</h3>
          <div className="big">26</div>
          <p>5 reports pending</p>
        </div>

        <div className="card">
          <ShieldCheck />
          <h3>Interpretive Confidence</h3>
          <div className="big">High</div>
          <p>Based on multi-layer evidence</p>
        </div>
      </div>

      <div className="grid2">
        <div className="card">
          <h2>Recent Interpretive Activity</h2>

          {[
            "Leadership configuration updated.",
            "New compatibility report generated.",
            "Adaptive role map completed.",
          ].map((item) => (
            <div className="activity" key={item}>
              <Sparkles size={16} />
              {item}
            </div>
          ))}

          <button className="secondary" onClick={() => setView("reports")}>
            Open Report Explorer
          </button>
        </div>

        <div className="card dark">
          <h2>Adaptive Role Profile</h2>

          <p>
            Cognora transforms organizational context into adaptive intelligence
            maps.
          </p>

          {dimensions.slice(0, 3).map(([name, value]) => (
            <div className="barblock" key={name}>
              <div>
                <span>{name}</span>
                <span>{value}%</span>
              </div>

              <div className="bar">
                <i style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

function Projects() {
  return (
    <Page>
      <Header
        title="Projects"
        subtitle="Create and manage adaptive evaluation processes for specific roles and organizational contexts."
      />

      <div className="card">
        <h2>Active Evaluation Projects</h2>

        <div className="projectList">
          {projects.map((project) => (
            <div className="projectItem" key={project.name}>
              <div>
                <strong>{project.name}</strong>
                <span>{project.role}</span>
                <small>
                  {project.candidates} candidates · {project.pending} pending
                </small>
              </div>

              <em>{project.status}</em>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

function Candidates() {
  return (
    <Page>
      <Header
        title="Candidate Experience"
        subtitle="A reflective, serious and human-centered evaluation journey."
      />

      <div className="card candidateCard">
        <small>Adaptive Reflection 1/5</small>

        <h2>
          Describe a situation where you had to adapt quickly to an unexpected
          change in a team environment.
        </h2>

        <textarea placeholder="Write your reflection here..." />

        <div className="between">
          <span>There are no correct or incorrect answers.</span>
          <button className="primary">Continue</button>
        </div>
      </div>
    </Page>
  );
}

function Reports() {
  return (
    <Page>
      <Header
        title="Interpretation Report"
        subtitle="An executive, explainable and human-centered interpretation of adaptive compatibility."
      />

      <div className="gridReport">
        <div className="card">
          <div className="reportTop">
            <div>
              <h2>María Fernández</h2>
              <p>Leadership Team Expansion · Head of Product</p>
            </div>

            <span className="pill green">94% Fit</span>
          </div>

          <div className="tabs">
            <span className="tab active">Overview</span>
            <span className="tab">Configurations</span>
            <span className="tab">Evidence</span>
            <span className="tab">Recommendations</span>
          </div>

          <section className="configurationBox">
            <div>
              <h2>Strategic Regulated Leadership</h2>
              <span className="pill soft">Dominant Configuration</span>
            </div>

            <div className="scoreCircle">92%</div>
          </section>

          <p className="reportText">
            Stable regulation under adaptive pressure with strong strategic
            integration and collaborative leadership.
          </p>

          <h3>Configuration Landscape</h3>

          {dimensions.map(([name, value]) => (
            <div className="barblock light" key={name}>
              <div>
                <span>{name}</span>
                <span>{value}%</span>
              </div>

              <div className="bar">
                <i style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Interpretation Explorer</h2>

          <div className="explorerItem active">
            <Layers3 size={18} />
            <div>
              <strong>Strategic Integration</strong>
              <span>94% fit</span>
            </div>
            <ChevronRight size={18} />
          </div>

          <div className="explorerItem">
            <ShieldCheck size={18} />
            <div>
              <strong>Regulation Under Pressure</strong>
              <span>91% fit</span>
            </div>
            <ChevronRight size={18} />
          </div>

          <div className="evidenceBox">
            <h3>Supporting Evidence</h3>

            <blockquote>
              “I try to integrate different perspectives before making a final
              decision, especially when the team is under pressure.”
            </blockquote>

            <small>Associated pattern</small>
            <div className="chips">
              <span>Reflective regulation</span>
              <span>Collaborative integration</span>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

function Organizations() {
  return (
    <Page>
      <Header
        title="Organizations"
        subtitle="Future space for adaptive organizational memory, culture maps and longitudinal intelligence."
      />

      <div className="card emptyState">
        <Building2 size={34} />
        <h2>Organizational Intelligence Center</h2>
        <p>
          This module will evolve toward culture, teams, adaptive trajectories
          and organizational memory.
        </p>
      </div>
    </Page>
  );
}

function SettingsView() {
  return (
    <Page>
      <Header
        title="Settings"
        subtitle="Configure language, organization, evaluation preferences and future cultural calibration."
      />

      <div className="card settingsGrid">
        {[
          "Language: Spanish / English",
          "Region: LATAM",
          "Interpretive mode: Human-centered",
          "Evidence layer: Enabled",
        ].map((item) => (
          <div className="settingItem" key={item}>
            <CheckCircle2 size={18} />
            {item}
          </div>
        ))}
      </div>
    </Page>
  );
}

export default function App() {
  const [view, setView] = useState("dashboard");

  const views = {
    dashboard: <Dashboard setView={setView} />,
    projects: <Projects />,
    candidates: <Candidates />,
    reports: <Reports />,
    organizations: <Organizations />,
    settings: <SettingsView />,
  };

  return (
    <div className="app">
      <Sidebar view={view} setView={setView} />

      <main>{views[view]}</main>
    </div>
  );
}
