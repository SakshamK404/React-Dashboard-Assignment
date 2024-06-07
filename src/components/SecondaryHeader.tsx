import React from "react";

interface SecondaryHeaderProps {
  title: string;
}

const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({ title }) => {
  return (
    <div className="secondary-header">
      <h2>{title}</h2>
    </div>
  );
};

export default SecondaryHeader;
