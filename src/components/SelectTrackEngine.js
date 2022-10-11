import { engines } from '../features/engines';

function SelectTrackEngine({ value, onChange }) {
  const opts = Object.keys(engines);
  return (
    <select value={value} onChange={onChange}>
      {opts.map((key) => (
        <option
          key={`engine-opt-${key}`}
          value={engines[key]}
          label={key}
        />
      ))}
    </select>
  );
}

export default SelectTrackEngine;
