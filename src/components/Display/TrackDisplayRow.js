function TrackDisplayRow({
  index, track = {}, sequence = [], darkMode = false, selected, onClick, onDoubleClick
}) {
  // if (selected) console.log(index);
  return (
    <div
      role="presentation"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`${selected ? 'bg-blue-700 text-orange-400' : ''} flex flex-row justify-between items-center w-full border-b ${darkMode ? 'border-orange-400' : 'border-black'}`}
    >
      <span className={`mr-1 pr-1 border-r ${darkMode ? 'border-orange-400' : 'border-black'}`}>
        {(index + 1).toLocaleString(
          'en-US',
          {
            minimumIntegerDigits: 2,
            useGrouping: false
          }
        )}. {track.name}
      </span>
      <span className={`mr-1 pr-1 border-r ${darkMode ? 'border-orange-400' : 'border-black'}`}>
        {track.clockMult.toLocaleString(
          'en-US',
          {
            minimumIntegerDigits: 2,
            maximumFractionDigits: 1,
            minimumFractionDigits: 1,
            useGrouping: false
          }
        )}X
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
