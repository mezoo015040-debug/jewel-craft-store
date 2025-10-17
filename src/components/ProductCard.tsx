import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export const ProductCard = ({ name, category, price, rating, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 rounded-xl">
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-8">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-3 right-3 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
          فخامة لا تُقاوم
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-bold text-base text-gray-900 hover:text-primary transition-colors cursor-pointer">
          {name}
        </h3>

        <p className="text-sm text-gray-600">{category}</p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            {price.toLocaleString("ar-SA")} <span className="text-lg">ر.س</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
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
          <span className="text-sm text-gray-600 mr-2">{rating}</span>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-lg h-11"
        >
          إضافة للسلة
        </Button>
      </div>
    </Card>
  );
};
