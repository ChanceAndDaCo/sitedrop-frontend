import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Contractor Dashboard</h1>
      <h2>Active Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <strong>{job.material}</strong> → {job.site} ({job.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
