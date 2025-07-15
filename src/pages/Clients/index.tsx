// pages/Clients.tsx or app/pages/Clients.tsx depending on your project structure
import React from "react";
import ClientCard from "../../components/cards/ClientCard"; // Adjust path as needed

interface Client {
  title: string;
  description: string;
  image: string;
  url: string; // Optional URL for more details
}

const clients: Client[] = [
  {
    title: "Water Polo Authority",
    description:
      "Added features and updates for an interactive Water polo whiteboard application using React and the WordPress REST API.",
    image: "/images/waterpoloauthority-screenshot.png",
    url: "https://waterpoloauthority.com",
  },
  // Add more clients to array as needed
];

const Clients: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c] py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Client Work</h1>
      <div className="flex flex-wrap justify-center">
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            title={client.title}
            description={client.description}
            image={client.image}
            url={client.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;