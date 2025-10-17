import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const TestimonialCard = ({ name, rating, comment, date }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-card hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Quote className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-lg">{name}</h4>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          
          <div className="flex items-center gap-1 mb-3">
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
            <span className="text-sm font-medium mr-2">{rating}</span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">{comment}</p>
        </div>
      </div>
    </Card>
  );
};
