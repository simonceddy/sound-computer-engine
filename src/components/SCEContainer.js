import './SCEContainer.css';

function SCEContainer({ children }) {
  return (
    <div className="sce-container bg-black flex flex-col justify-between items-center">
      {children}
    </div>
  );
}

export default SCEContainer;
