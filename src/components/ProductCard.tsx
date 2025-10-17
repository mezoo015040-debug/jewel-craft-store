import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export const ProductCard = ({ name, category, price, rating, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-2 border-primary bg-white hover:shadow-xl transition-all duration-300 rounded-[2rem] relative">
      {/* Image Section with Dark Background */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-[2rem] p-4">
        {/* Red Badge */}
        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-bold z-10">
          فخامة لا تُقاوم
        </div>
        
        {/* Logo */}
        <div className="absolute top-3 right-3 w-12 h-12 z-10">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Product Image in Rounded Container */}
        <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 p-6 mt-8">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Title on Dark Background */}
        <h3 className="text-white font-bold text-xl text-center mt-4">
          سبيكة ذهب
        </h3>
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-700 text-center font-medium">{name}</p>
        <p className="text-xs text-gray-500 text-center">{category}</p>

        {/* Price */}
        <div className="text-center">
          <span className="text-primary text-2xl font-bold">
            {price.toLocaleString("ar-SA")}
          </span>
          <span className="text-primary text-base font-bold mr-1">ر.س</span>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 mr-1">{rating}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2">
          <button className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Heart className="h-5 w-5 text-gray-400" />
          </button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg h-11 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            إضافة للسلة
          </Button>
        </div>
      </div>
    </Card>
  );
};
