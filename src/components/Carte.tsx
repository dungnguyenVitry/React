import React, { useState } from "react";

interface CarteProps {
  data: {
    id: number;
    name: string;
    options: string[];
  };
  onNextCard: () => void;
  onCardSubmit: () => void; // Callback function to move to next card
  onOptionSelect: (option: string) => void;
}

const Carte: React.FC<CarteProps> = ({ data, onNextCard, onCardSubmit, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);


  const handleOptionChange = (option: string) => {
    if (selectedOption.includes(option)) {
      setSelectedOption(prevOptions => prevOptions.filter(item => item !== option));
    } else {
      setSelectedOption(prevOptions => [...prevOptions, option]);
    }
    onOptionSelect(option);
  };
  
  const handleSubmit = () => {
    if (selectedOption.length > 0) {
      // onOptionSelect(selectedOption.join(',')); // Gửi chuỗi được nối từ mảng các chuỗi
      setSelectedOption([]); // Đặt lại selectedOption về mảng rỗng sau khi đã submit
    }
    setSubmitted(true);
    if (onCardSubmit) {
      onCardSubmit();
    }
    setTimeout(() => {
      onNextCard();
    }, 1000);
    console.log(selectedOption)
  };
  

  return (
    <div className="relative w-full mx-auto" style={{ backgroundColor: submitted ? "#8a63f5" : "white", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", marginBottom: "20px", padding: "20px", opacity: submitted ? 0.2 : 1 }}>
      <h3 className="text-md font-bold text-black-800">{data.id} No sólo sobrevivió 500 años, sino que tambien ingresó como texto </h3>
      <ul>
        {data.options.map((option, index) => (
          <li key={index}>
            <input className="mr-2" type="checkbox" checked={selectedOption && selectedOption.includes(option)} onChange={() => handleOptionChange(option)} />
            {option}
          </li>
        ))}
      </ul>
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
