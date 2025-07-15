// components/ClientCard.tsx
import React from "react";

interface ClientCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ title, description, image, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-lg p-4 max-w-md m-4 transform hover:scale-105 transition-transform duration-300 block"
    >
      <img
        src={image}
        alt={`${title} preview`}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-4 text-black">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </a>
  );
};

export default ClientCard;
