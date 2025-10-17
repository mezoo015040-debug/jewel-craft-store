import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export const ProductCard = ({ name, category, price, rating, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        <div className="relative overflow-hidden bg-muted aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Badge className="absolute top-3 right-3 bg-gradient-gold text-secondary font-bold border-0 shadow-gold">
            {category}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground mr-2">{rating}</span>
          </div>

          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                {price.toLocaleString("ar-SA")} ر.س
              </p>
            </div>
          </div>
        </div>

        <Button variant="luxury" className="w-full" size="lg">
          <ShoppingCart className="h-5 w-5 ml-2" />
          إضافة للسلة
        </Button>
      </CardFooter>
    </Card>
  );
};
