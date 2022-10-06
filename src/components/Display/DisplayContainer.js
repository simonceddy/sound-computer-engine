import './DisplayContainer.css';

function DisplayContainer({ children }) {
  return (
    <div className="display-container">
      {children}
    </div>
  );
}

export default DisplayContainer;
