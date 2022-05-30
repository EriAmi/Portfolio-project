import React, { useEffect, useState } from "react";
import IProject from "../interfaces/IProject";
import { getProjects, getScreenshot } from "../lib/client/callAPI";

export default function ProjectSummary({ project }: { project: IProject }) {
  const [open, setOpen] = useState(false);
  const [screenshot, setScreenshot] = useState<string>();

  useEffect(() => {
    findScreenshot();
  }, []);

  const findScreenshot = async () => {
    const asd = await getScreenshot(project.url);
    setScreenshot(asd as string);
  };

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      <div
        className="w-80 h-60 border-black rounded-xl text-center  border-2 overflow-hidden m-10 hover:scale-125 transition transform duration-100 shadow-2xl bg-gradient-to-r from-indigo-500 to-violet-900"
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >
        {open ? (
          <img src={screenshot} className="object-fill" />
        ) : (
          <div>
            <p className="text-2xl font-bold  text-slate-200">{project.name}</p>
            <p className="text-md text-slate-200  font-thin py-8">{project.summary}</p>
          </div>
        )}
      </div>
    </a>
  );
}
