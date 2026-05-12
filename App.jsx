import { motion } from "framer-motion";
import {
  Brain,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div>
          <div className="logo">Cognora</div>
          <div className="tagline">
            Adaptive human intelligence
          </div>

          <nav>
            <button className="nav active">Dashboard</button>
            <button className="nav">Projects</button>
            <button className="nav">Candidates</button>
            <button className="nav">Reports</button>
          </nav>
        </div>

        <div className="userbox">
          <strong>Dr. Christian Soto</strong>
          <span>Altiora / Cognora</span>
        </div>
      </aside>

      <main>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="header">
            <div>
              <h1>Dashboard</h1>

              <p>
                A calm overview of adaptive evaluations,
                organizational intelligence and interpretive
                activity.
              </p>
            </div>

            <button className="primary">
              New Evaluation
            </button>
          </div>

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

              <div className="activity">
                <Sparkles size={16} />
                Leadership configuration updated.
              </div>

              <div className="activity">
                <Sparkles size={16} />
                New compatibility report generated.
              </div>

              <div className="activity">
                <Sparkles size={16} />
                Adaptive role map completed.
              </div>
            </div>

            <div className="card dark">
              <h2>Adaptive Role Profile</h2>

              <p>
                Cognora transforms organizational context
                into adaptive intelligence maps.
              </p>

              <div className="barblock">
                <div>
                  <span>Adaptive Flexibility</span>
                  <span>86%</span>
                </div>

                <div className="bar">
                  <i style={{ width: "86%" }} />
                </div>
              </div>

              <div className="barblock">
                <div>
                  <span>Strategic Complexity</span>
                  <span>91%</span>
                </div>

                <div className="bar">
                  <i style={{ width: "91%" }} />
                </div>
              </div>

              <div className="barblock">
                <div>
                  <span>Collaboration</span>
                  <span>84%</span>
                </div>

                <div className="bar">
                  <i style={{ width: "84%" }} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
