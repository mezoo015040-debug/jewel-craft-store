import { ProductCard } from "@/components/ProductCard";
import goldBar from "@/assets/gold-bar.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 9,
    name: "سبيكة ذهب 5 جرام عيار 24",
    category: "سبائك ذهب",
    price: 2200,
    rating: 4.5,
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
    id: 7,
    name: "سبيكة ذهب 10 جرام عيار 24",
    category: "سبائك ذهب",
    price: 4000,
    rating: 4.6,
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
    id: 3,
    name: "سبيكة ذهب 20 جرام عيار 24",
    category: "سبائك ذهب",
    price: 20700,
    rating: 4.7,
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
  {
    id: 1,
    name: "سبيكة ذهب 116.6 جرام عيار 24",
    category: "سبائك ذهب",
    price: 31050,
    rating: 4.7,
    image: goldBar,
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">سبائك ذهب</h2>
        </div>

        {/* Products Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              direction: "rtl",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <ProductCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="right-auto left-0" />
            <CarouselNext className="left-auto right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
