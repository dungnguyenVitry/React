import React from "react";

interface OptionCategoryProps {
  label: string;
  isSelected: boolean;
  onSelect: (selected: boolean) => void;
}

const OptionCategory: React.FC<OptionCategoryProps> = ({ label, isSelected, onSelect }) => {
  return (
    <label className="option flex items-center bg-gray-200 rounded-md p-2 w-[521px] h-[60px] mb-3 ml-3">
      <input 
        type="checkbox" 
        className="mr-2" 
        checked={isSelected} 
        onChange={(e) => onSelect(e.target.checked)}
      />
      {label}
    </label>
  );
};

export default OptionCategory;
