import { useSelector } from 'react-redux';

export default function useProject() {
  const { project, sequencer } = useSelector((state) => state);
  // const json = JSON.stringify({ project, sequencer });
  return { project, sequencer };
}
