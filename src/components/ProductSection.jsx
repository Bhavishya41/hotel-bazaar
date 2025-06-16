
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const ProductSection = () => {
  const products = [
    {
      id: "1",
      name: "Glass Cleaner - Professional Grade Crystal Clear Formula",
      price: "199.00",
      originalPrice: "299.00",
      image: "/lovable-uploads/30315751-a916-433d-857a-e5d75106d2cd.png",
      isOnSale: true,
    },
    {
      id: "2",
      name: "Premium Shampoo - Luxury Hotel Grade Hair Care",
      price: "299.00",
      originalPrice: "399.00",
      image: "/lovable-uploads/c331aa5e-a4f7-49ee-a87f-2579961e6679.png",
      isOnSale: true,
    },
    {
      id: "3",
      name: "Toilet Cleaner - Heavy Duty Bathroom Sanitizer",
      price: "179.00",
      originalPrice: "249.00",
      image: "/lovable-uploads/ba988972-5746-4196-ac76-150124d63bd0.png",
      isOnSale: true,
      isSoldOut: true,
    },
    {
      id: "4",
      name: "Multi-Purpose Surface Cleaner - Hotel Professional",
      price: "229.00",
      originalPrice: "329.00",
      image: "/lovable-uploads/30315751-a916-433d-857a-e5d75106d2cd.png",
      isOnSale: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2 className="px-6 text-3xl font-bold text-gray-900">
              CLEARANCE SALE
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <Button variant="outline" className="mt-4">
            View All
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button onClick={() => window.location.href = "/catalog"} size="lg" className="px-8">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
