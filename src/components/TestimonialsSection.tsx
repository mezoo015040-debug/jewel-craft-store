import { TestimonialCard } from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    rating: 5,
    comment: "منتجات ممتازة وجودة عالية، التعامل كان احترافي جداً والتسليم سريع. أنصح الجميع بالشراء من هنا.",
    date: "منذ أسبوع",
    gender: "male" as const
  },
  {
    id: 2,
    name: "فاطمة السعيد",
    rating: 5,
    comment: "سبائك الذهب بجودة ممتازة وأسعار منافسة. خدمة العملاء رائعة ومتعاونة. تجربة مميزة جداً.",
    date: "منذ أسبوعين",
    gender: "female" as const
  },
  {
    id: 3,
    name: "خالد عبدالله",
    rating: 5,
    comment: "أفضل مكان لشراء الذهب! المنتجات أصلية والأسعار ممتازة. التوصيل سريع والتغليف احترافي.",
    date: "منذ ٣ أسابيع",
    gender: "male" as const
  },
  {
    id: 4,
    name: "نورة الحربي",
    rating: 4.5,
    comment: "تجربة رائعة، المنتجات عالية الجودة والخدمة ممتازة. سأكرر الشراء بالتأكيد.",
    date: "منذ شهر",
    gender: "female" as const
  },
  {
    id: 5,
    name: "سعد المالكي",
    rating: 5,
    comment: "ثقة وأمان في التعامل. الذهب أصلي ومطابق للمواصفات. خدمة عملاء متميزة.",
    date: "منذ شهر",
    gender: "male" as const
  },
  {
    id: 6,
    name: "منى القحطاني",
    rating: 5,
    comment: "أسعار منافسة جداً ومنتجات بجودة عالية. التوصيل كان سريع والتغليف ممتاز. شكراً لكم.",
    date: "منذ شهرين",
    gender: "female" as const
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-foreground">آراء عملائنا</h2>
          <p className="text-muted-foreground text-lg">تجارب حقيقية من عملائنا الكرام</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            direction: "rtl",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-mr-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pr-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  name={testimonial.name}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                  date={testimonial.date}
                  gender={testimonial.gender}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="right-0" />
          <CarouselNext className="left-0" />
        </Carousel>
      </div>
    </section>
  );
};
