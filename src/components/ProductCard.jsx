
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProductCard = ({ id, name, price, originalPrice, image, isOnSale, isSoldOut }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {isOnSale && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
              Sale
            </span>
          )}
          {isSoldOut && (
            <span className="bg-gray-500 text-white px-2 py-1 text-xs font-semibold rounded">
              Sold Out
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="outline"
            className="w-8 h-8 p-0 bg-white"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-8 h-8 p-0 bg-white"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div className="text-sm text-gray-500 font-medium">HOTEL BAZAR</div>
        <h3 className="font-medium text-gray-900 line-clamp-2 leading-tight">
          {name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2">
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              Rs. {originalPrice}
            </span>
          )}
          <span className="text-red-500 font-bold text-lg">
            Rs. {price}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          {isSoldOut ? (
            <Button className="flex-1" disabled>
              NOTIFY ME
            </Button>
          ) : (
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              <ShoppingCart className="w-4 h-4 mr-2" />
              QUICK ADD
            </Button>
          )}
        </div>

        {/* Size Options */}
        <div className="flex space-x-2">
          <div className="w-6 h-6 bg-gray-800 rounded border-2 border-gray-300"></div>
          <div className="w-6 h-6 bg-gray-300 rounded border-2 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
