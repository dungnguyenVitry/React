import  { useState } from 'react';

import Header from "./components/Header";
import Categories from "./components/Categories";
import Cartes from "./components/Cartes";

const App = () => {
  const [step, setStep] = useState(1); 
  const [selectedOption, setSelectedOption] = useState<string | null>(null); 
  const handleNextStep = () => {
    setStep(step + 1);
  };
  return (
    <div className="App">
      <Header />
      <div className="w-full bg-[#F0F4FF] min-h-screen  flex justify-center ">  
        <div className="w-8/10 h-6/10 flex justify-center mt-20">
          {step === 1 && <Categories onNextStep={handleNextStep} />}
          {step === 2 && <Cartes selectedOption={selectedOption} />}
          {/* {step === 3 && <Modals />} */}
        </div>             
      </div>
     
    </div>
  );
};

export default App;
