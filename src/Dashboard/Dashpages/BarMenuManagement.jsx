import React, { useState } from 'react';
import TEQ from '../../assets/TEQ.jpg';
import DAWINE from '../../assets/DAWINE.jpg';
import DABEER from '../../assets/DABEER.jpg';
import DACOK from '../../assets/DACOK.jpg';

const BarMenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    setMenuItems([...menuItems, newItem]);
    setNewItem({
      name: '',
      description: '',
      price: '',
      category: '',
      image: ''
    });
  };

  const handleDeleteItem = (index) => {
    const updatedMenuItems = menuItems.filter((item, i) => i !== index);
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold mb-8 text-center text-[#352208]">🍸 Bar Menu Management</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-medium mb-4 text-[#352208]">Add New Menu Item</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
              placeholder="Enter item name"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              name="category"
              value={newItem.category}
              onChange={handleInputChange}
              placeholder="Enter category (e.g. Cocktail, Beer)"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <textarea
            name="description"
            value={newItem.description}
            onChange={handleInputChange}
            placeholder="Enter item description"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              value={newItem.price}
              onChange={handleInputChange}
              placeholder="Enter item price"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <select
              name="image"
              value={newItem.image}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select Image</option>
              <option value={DACOK}>Cocktail</option>
              <option value={DABEER}>Beer</option>
              <option value={DAWINE}>Wine</option>
              <option value={TEQ}>Spirit</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleAddItem}
            className="w-full bg-[#352208] text-[#e1bb80] py-3 rounded-lg hover:bg-gray-800 transition-all mt-4"
          >
            Add Item
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-2xl font-medium mb-4">Menu Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.length > 0 ? (
            menuItems.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
                <div className="text-center">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover mx-auto rounded-lg mb-4"
                    />
                  )}
                  <h4 className="font-semibold text-xl mb-2">{item.name}</h4>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="font-semibold mb-2">Price: ${parseFloat(item.price).toFixed(2)}</p>
                  <p className="italic text-gray-500">{item.category}</p>
                </div>
                <button
                  onClick={() => handleDeleteItem(index)}
                  className="text-red-500 hover:underline mt-4 w-full"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No menu items added yet. Please add your first item.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarMenuManagement;