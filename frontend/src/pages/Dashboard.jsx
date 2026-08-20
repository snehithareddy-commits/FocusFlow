import { useState } from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Welcome to Focus<span>Flow</span>👋</h1>
          <p>Your workspace for managing projects and tasks.</p>
        </div>

        <button
          className="create-btn"
          onClick={() => setShowForm(true)}
        >
          + Create Project
        </button>
      </div>

      {showForm && (
        <div className="project-form">
          <h2>Create New Project</h2>

          <input
            type="text"
            placeholder="Project Name"
          />

          <textarea
            placeholder="Project Description"
          />

          <div className="form-buttons">
            <button className="save-btn">
              Create
            </button>

            <button
              className="cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="projects-section">
        <h2>My Projects</h2>

        <div className="empty-projects">
          <div className="empty-icon">📁</div>
          <h3>No projects yet</h3>
          <p>Create your first project to get started.</p>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;