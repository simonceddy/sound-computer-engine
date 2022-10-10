function DisplayRow({
  children, darkMode, selected, onClick
}) {
  return (
    <div
      className={`border-b px-0.5 ${darkMode ? 'border-orange-400' : 'border-black'} ${selected ? 'bg-blue-900 text-orange-400' : ''}`}
      style={{ marginBottom: '2px' }}
      role="presentation"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default DisplayRow;
