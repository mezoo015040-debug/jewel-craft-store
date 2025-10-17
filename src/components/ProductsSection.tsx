import { ProductCard } from "@/components/ProductCard";
import goldBar from "@/assets/gold-bar.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "سبيكة ذهب 116.6 جرام عيار 24",
    category: "سبائك ذهب",
    price: 31050,
    rating: 4.7,
    image: goldBar,
  },
  {
    id: 2,
    name: "سبيكة ذهب 31.1 جرام عيار 24",
    category: "سبائك ذهب",
    price: 3105,
    rating: 4.8,
    image: goldBar,
  },
  {
    id: 3,
    name: "سبيكة ذهب 20 جرام عيار 24",
    category: "سبائك ذهب",
    price: 20700,
    rating: 4.7,
    image: goldBar,
  },
  {
    id: 4,
    name: "سبيكة ذهب 50 جرام عيار 24",
    category: "سبائك ذهب",
    price: 6210,
    rating: 4.3,
    image: goldBar,
  },
  {
    id: 5,
    name: "سبيكة ذهب 15.55 جرام عيار 24",
    category: "سبائك ذهب",
    price: 8280,
    rating: 4.8,
    image: goldBar,
  },
  {
    id: 6,
    name: "سبيكة ذهب 100 جرام عيار 24",
    category: "سبائك ذهب",
    price: 26550,
    rating: 4.9,
    image: goldBar,
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900">سبائك ذهب</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
