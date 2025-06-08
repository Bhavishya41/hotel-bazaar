
import { Sparkles, Droplets, Zap, Shield } from "lucide-react";

const CategorySection = () => {
  const categories = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Bathroom Cleaners",
      description: "Professional toilet cleaners, sanitizers, and bathroom supplies",
      count: "15+ Products"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Glass & Surface",
      description: "Crystal clear glass cleaners and multi-surface solutions",
      count: "12+ Products"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Personal Care",
      description: "Premium shampoos, soaps, and guest amenities",
      count: "20+ Products"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Disinfectants",
      description: "Hospital-grade disinfectants and sanitizing solutions",
      count: "8+ Products"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions for every area of your hotel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-200 transition-colors">
                <div className="text-purple-600">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {category.description}
              </p>
              <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
