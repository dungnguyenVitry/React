import React from "react";
import termine from "../images/termine.png";

interface ModalProps {
  selectedOptions: string[];
}

const Modal: React.FC<ModalProps> = ({ selectedOptions }) => {
  const handleTerminerClick = () => {
    window.location.reload(); // reload when click terminer
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg w-3/4 h-2/3 overflow-y-auto p-6 shadow-lg">
        <img src={termine} className="mx-auto mb-4" alt="Bravo"  />
        <p className="text-center text-lg font-bold">Bravo!</p>
        {selectedOptions.map((option, index) => (
          <p className="text-center" key={index}>{index+1}- {option}</p>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded mx-auto block" onClick={handleTerminerClick}>Terminer</button>
      </div>
    </div>
  );
};

export default Modal;
