import React, { useState, useRef, useEffect }from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carte from "./Carte";
import Modal from "./Modals";

interface CartesProps {
  selectedOption: string | null; // Prop - value of option selected
}

const Cartes: React.FC<CartesProps> = ({ selectedOption }) => {
  const options = [
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles.",
    "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio.",
    "El trozo de texto estándar de Lorem Ipsum usado desde el año 1500.",
    "El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras."
  ];

  const [submittedCount, setSubmittedCount] = useState(0); // count number of carte submitted
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false); 
  const sliderRef = useRef<Slider>(null);

  const cartesData = Array.from({ length: 3 }, (_, index) => {
    const shuffleOptions = options.sort(() => Math.random() - 0.5).slice(0, 5);
    return {
      id: index + 1,
      name: `Carte ${index + 1}`,
      options: shuffleOptions
    };
  });

  const handleNextCard = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); //auto change slide when submit
    }
  };

//   const handleOptionSelect = (option: string) => {
//     setSelectedOptions(prevOptions => [...prevOptions, option]); 
//   };

  useEffect(() => {
    if (submittedCount === 3) {
      setShowModal(true);
    }
  }, [submittedCount]);

  const handleCardSubmit = (selectedOption: string) => {
    setSubmittedCount(prevCount => prevCount + 1);
    setSelectedOptions(prevOptions => [...prevOptions, selectedOption]);
    console.log(selectedOptions);
  };
  
  
  
  const settings = {
    dots: true,               
    infinite: true,           
    speed: 500,               
    slidesToShow: 2.3,          
    slidesToScroll: 1,        
    centerMode: true,         
    focusOnSelect: true,     
    initialSlide: 0,          
    arrows: true,
    className: "myCustomCarousel"
  };
  
  return (
    <div className="w-full ">
        <h1 className="font-sans font-normal text-xl leading-[130%] text-center text-blue-600 justify-center items-center" style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}>{selectedOption} dolorem ipsum quia dolor sit amet</h1>

        <h2 className="text-center justify-center items-center">No hay nadie que ame el dolor mismo, que lo busque</h2>
        <div className="w-full h-screen flex justify-center mt-10">
            <Slider {...settings} className="w-4/5 h-2/3 " ref={sliderRef}>
                {cartesData.map((carte) => (
                <div key={carte.id} className="mx-auto">
                    <Carte data={carte} onNextCard={handleNextCard} onCardSubmit={handleCardSubmit} />

                </div>
                ))}
            </Slider>
        </div>
        {showModal && submittedCount > 0 && <Modal selectedOptions={selectedOptions}/>}

    </div>
  );
};

export default Cartes;
