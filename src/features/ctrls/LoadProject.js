/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadProjects } from '../../util/storage';

function LoadProject() {
  const [projects, setProjects] = useState([]);
  const { darkMode } = useSelector((state) => state.kernel);
  const [selectedProject, setSelectedProject] = useState(0);
  useEffect(() => {
    loadProjects()
      .then((data) => setProjects(Object.keys(data)))
      .catch(console.error);
  }, []);
  return (
    <div>
      {projects.map((name, idx) => (
        <div
          key={`project-${name}-row-${idx}`}
          className={`${idx === selectedProject ? 'bg-blue-500 text-orange-300' : ''} flex flex-row justify-between items-center w-full border-b ${darkMode ? 'border-orange-300' : 'border-black'}`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default LoadProject;
