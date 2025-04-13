import React from 'react';
import PUPU from '../../assets/PUPU.jpg'

const UserProfile = ({ user = {} }) => {
  const {
    name = 'Unreal Pupu',
    email = 'aratorufauge@gmail.com',
    address = '123 Foodie Street',
    phone = '+234 7063818349',
  } = user;

  const rating = 5.0;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src={PUPU}
        alt="User Avatar"
        className="w-24 h-24 rounded-full object-cover mb-4"
      />

      <h4 className="text-lg font-semibold">{name}</h4>

      <div className="flex items-center justify-center mt-1 text-yellow-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 15l-5.878 3.09L5.59 12 1 7.91l6.09-.91L10 2l2.91 5 6.09.91L14.41 12l1.47 6.09z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>

      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p>{email}</p>
        <p>📞 {phone}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default UserProfile;