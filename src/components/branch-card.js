import React from 'react';
import { Link } from 'react-router-dom';

const BranchCard = ({ branch }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={branch.image} alt={branch.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{branch.name}</h3>
        <p className="text-gray-600">{branch.location}</p>
        <Link to={`/branch/${branch.id}`} className="text-blue-600 mt-2 inline-block">
          View Services & Book
        </Link>
      </div>
    </div>
  );
};

export default BranchCard;
