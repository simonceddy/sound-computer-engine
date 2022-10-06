import './PadsContainer.css';

function PadsContainer({ children }) {
  return (
    <div className="pads-container flex flex-row flex-wrap-reverse justify-around items-center">
      {children}
    </div>
  );
}

export default PadsContainer;
