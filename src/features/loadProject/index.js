/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProjects } from '../../util/storage';
import { setSelectedProject } from './loadProjectSlice';

function LoadProject() {
  const [projects, setProjects] = useState([]);
  const { darkMode } = useSelector((state) => state.kernel);
  const { selectedProject } = useSelector((state) => state.loadProject);
  const dispatch = useDispatch();
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
          role="presentation"
          onClick={() => {
            if (idx !== selectedProject) {
              dispatch(setSelectedProject(idx));
            }
          }}
          onDoubleClick={() => {
            console.log('load project into state');
          }}
          className={`${idx === selectedProject ? 'bg-blue-700 text-orange-300' : ''} flex flex-row justify-between items-center w-full border-b ${darkMode ? 'border-orange-300' : 'border-black'}`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default LoadProject;
