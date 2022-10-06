function TrackDisplayRow({
  index, track = {}, sequence = [], darkMode = false
}) {
  return (
    <div className={`flex flex-row justify-between items-center w-full border-b ${darkMode ? 'border-orange-300' : 'border-black'}`}>
      <span className={`mr-1 pr-1 border-r ${darkMode ? 'border-orange-300' : 'border-black'}`}>
        {(index + 1).toLocaleString(
          'en-US',
          {
            minimumIntegerDigits: 2,
            useGrouping: false
          }
        )}. {track.name}
      </span>
      <span className={`mr-1 pr-1 border-r ${darkMode ? 'border-orange-300' : 'border-black'}`}>
        {track.clockMult}X
      </span>
      <span className="flex-1 ml-1 flex flex-row">
        {sequence && sequence.map((step, idx) => (
          <span key={`track-${index}-summary-step-${idx}`}>
            {!step.active ? '.' : '*'}
          </span>
        ))}
      </span>
    </div>
  );
}

export default TrackDisplayRow;
