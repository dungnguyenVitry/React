import React, { useState } from "react";
import image2 from "../images/image2.png";
import OptionCategory from "./OptionCategory";
import Cartes from "./Cartes";

interface CategoriesProps {
  onNextStep: () => void;
}

const Categories: React.FC<CategoriesProps> = ({ onNextStep }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCartes, setShowCartes] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false); 

  const options = [
    "Yorem Ipsum is",
    "Porem to popular",
    "Quorem a long established",
    "Rorem standard chunk",
    "Torem are many",
    "Vorem desktop publishing",
    "Kotem McClintock",
    "Lorem ipsum dolor sit amet"
  ];

  const handleNextStep = () => {
    if (selectedOption) {
      setShowCartes(true);
      setShowError(false);
    }
    else{
      setShowError(true);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center h-screen">
      {!showCartes && (
        <>
          <h1 className="font-sans font-normal text-xl leading-[130%] text-center text-blue-600" style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", width: "1536px", height: "42px" }}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </h1>

          <div className="flex flex-col items-center p-8 gap-6 w-[1130px] h-[400px] bg-white">
            <div className="flex flex-wrap w-full gap-y-2">
              {options.map((option, index) => (
                <OptionCategory
                  key={index}
                  label={option}
                  isSelected={selectedOption === option}
                  onSelect={(selected) => {
                    if (selected) {
                      setSelectedOption(option);
                    } else {
                      setSelectedOption(null);
                    }
                  }}
                />
              ))}
            </div>
            {showError && (
              <p className="text-red-500">Veuillez sélectionner un thème</p>
            )}
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded" onClick={handleNextStep}>
            Suivant
          </button>
            <img src={image2} className="absolute w-[393.4px] h-[456.8px] -right-[55.1px] bottom-[3.11px] transform rotate-[-7.8]" />
        </>
      )}
      {showCartes && <Cartes selectedOption={selectedOption} />}
    </div>
  );
};

export default Categories;
