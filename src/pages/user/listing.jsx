import React from 'react';
import NavBar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';

const Listing = () => {
  const cars = [
    {
      id: 1,
      name: "Tesla Model S",
      price: "$89,990",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Electric", "Autopilot", "Long Range"]
    },
    {
      id: 2,
      name: "BMW M4",
      price: "$74,900",
      image: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Sport", "Luxury", "High Performance"]
    },
    {
      id: 3,
      name: "Mercedes-Benz C-Class",
      price: "$43,550",
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Luxury", "Comfort", "Advanced Tech"]
    },
    {
      id: 4,
      name: "Audi A6",
      price: "$55,900",
      image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Quattro AWD", "Premium", "Spacious"]
    },
    {
      id: 5,
      name: "Porsche 911",
      price: "$101,200",
      image: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Sports Car", "Iconic", "Turbocharged"]
    },
    {
      id: 6,
      name: "Lexus ES",
      price: "$40,900",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Reliable", "Luxury", "Hybrid Available"]
    }
  ];

  const handleOrderNow = (carName) => {
    console.log(`Order placed for ${carName}`);
    window.location.href = "/order";
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <NavBar />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Premium Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our finest selection of luxury vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-4">{car.price}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <PrimaryButton 
                  label="Order Now"
                  onClick={() => handleOrderNow(car.name)}
                  type="primary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8 mt-12">
        <p className="text-sm">© 2025 Put your name here. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Listing;
