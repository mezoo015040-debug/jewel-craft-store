import { ProductCard } from "@/components/ProductCard";
import goldBar from "@/assets/gold-bar.jpg";

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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-gold rounded"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              سبائك الذهب
            </h2>
            <div className="h-1 w-12 bg-gradient-gold rounded"></div>
          </div>
          <p className="text-muted-foreground text-lg">
            استثمر في أفضل سبائك الذهب الخالص عيار 24
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
