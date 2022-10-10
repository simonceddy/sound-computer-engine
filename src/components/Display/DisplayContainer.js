import './DisplayContainer.css';

function DisplayContainer({ children }) {
  return (
    <div className="display-container relative">
      {children}
    </div>
  );
}

export default DisplayContainer;
