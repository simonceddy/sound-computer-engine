function DisplayModal({ children }) {
  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default DisplayModal;
