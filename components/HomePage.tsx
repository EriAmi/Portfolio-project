import { useEffect, useState } from "react";
import IProject from "../interfaces/IProject";
import { getProjects, getScreenshot } from "../lib/client/callAPI";
import ProjectSummary from "./ProjectSummary";

export default function HomePage() {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const projectsFromDb = await getProjects();
    setProjects(projectsFromDb);
  };

  return (
    <div className="flex justify-center">
      {projects.map((project) => (
        <ProjectSummary project={project} />
      ))}
    </div>
  );
}
