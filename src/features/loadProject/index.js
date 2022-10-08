/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load, loadProjects } from '../../util/storage';
import { displayModes, setDisplayMode } from '../kernel/kernelSlice';
import { setNotification } from '../notifications/notificationsSlice';
import { loadProject } from '../project/projectSlice';
import { initSequencer } from '../sequencer/sequencerSlice';
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

  const loadProj = () => {
    console.log(projects[selectedProject]);
    load(projects[selectedProject])
      .then(({ project, sequencer }) => {
        dispatch(loadProject(project));
        dispatch(initSequencer(sequencer));
        dispatch(setDisplayMode(displayModes.PROJ));
        dispatch(setNotification('Project loaded'));
      })
      .catch(console.error);
  };
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
          onDoubleClick={loadProj}
          className={`${idx === selectedProject ? 'bg-blue-700 text-orange-300' : ''} flex flex-row justify-between items-center w-full border-b ${darkMode ? 'border-orange-300' : 'border-black'}`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default LoadProject;
