function DisplayRow({
  children, darkMode, selected, onClick
}) {
  return (
    <div
      className={`border-b px-0.5 ${darkMode ? 'border-orange-300' : 'border-black'} ${selected ? 'bg-blue-900 text-orange-300' : ''}`}
      style={{ marginBottom: '2px' }}
      role="presentation"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default DisplayRow;
