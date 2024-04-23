import React, { useState } from "react";

interface CarteProps {
  data: {
    id: number;
    name: string;
    options: string[];
  };
  onNextCard: () => void;
  onCardSubmit: (option: string) => void; 
}

const Carte: React.FC<CarteProps> = ({ data, onNextCard, onCardSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setShowErrorMessage(false);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onCardSubmit(selectedOption); 
      setSelectedOption(null); 
      setSubmitted(true);
      setTimeout(() => {
        onNextCard();
      }, 1000);
    }
    else{
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="relative w-full mx-auto" style={{ backgroundColor: submitted ? "#8a63f5" : "white", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", marginBottom: "20px", padding: "20px", opacity: submitted ? 0.2 : 1 }}>
      <h3 className="text-md font-bold text-black-800">{data.id} No sólo sobrevivió 500 años, sino que tambien ingresó como texto </h3>
      <ul>
        {data.options.map((option, index) => (
          <li key={index}>
            <label className="option-label">
              <input
                type="radio"
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {showErrorMessage && ( 
        <p style={{ color: "red" }}>Veuillez choisir une option</p>
      )}
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded mx-auto block" onClick={handleSubmit}>Submit</button>

      {submitted && (
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      )}
    </div>
  );
};

export default Carte;
