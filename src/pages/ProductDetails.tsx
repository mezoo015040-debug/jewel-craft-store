import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import goldBar from "@/assets/gold-bar-new.png";

const products = [
  {
    id: 9,
    name: "سبيكة ذهب 5 جرام عيار 24",
    category: "سبائك ذهب",
    price: 2200,
    weight: "5 جرام",
    rating: 4.5,
    image: goldBar,
    description: "سبيكة الذهب الخالص من الذهب الأصفر من 24 قيراطاً تتميز بأنها تحتوي على أدنى مستوى من الذهب المستخدم في السبيكة وهذا يعني أن جميع أوزان الذهب الأخرى تحتوي على نسبة ذهب عيار 24. وهذا يعني أن السبيكة بأكملها مصنوعة من الذهب الخالص، ولكنها قابلة للانحناء بسهولة وسريعة الخدش.",
  },
  {
    id: 7,
    name: "سبيكة ذهب 10 جرام عيار 24",
    category: "سبائك ذهب",
    price: 4000,
    weight: "10 جرام",
    rating: 4.6,
    image: goldBar,
    description: "سبيكة الذهب الخالص من الذهب الأصفر من 24 قيراطاً تتميز بأنها تحتوي على أدنى مستوى من الذهب المستخدم في السبيكة.",
  },
  {
    id: 4,
    name: "سبيكة ذهب 50 جرام عيار 24",
    category: "سبائك ذهب",
    price: 6210,
    weight: "50 جرام",
    rating: 4.3,
    image: goldBar,
    description: "سبيكة الذهب الخالص من الذهب الأصفر من 24 قيراطاً تتميز بأنها تحتوي على أدنى مستوى من الذهب المستخدم في السبيكة.",
  },
  {
    id: 5,
    name: "سبيكة ذهب 15.55 جرام عيار 24",
    category: "سبائك ذهب",
    price: 8280,
    weight: "15.55 جرام",
    rating: 4.8,
    image: goldBar,
    description: "سبيكة الذهب الخالص من الذهب الأصفر من 24 قيراطاً تتميز بأنها تحتوي على أدنى مستوى من الذهب المستخدم في السبيكة.",
  },
  {
    id: 3,
    name: "سبيكة ذهب 20 جرام عيار 24",
    category: "سبائك ذهب",
    price: 20700,
    weight: "20 جرام",
    rating: 4.7,
    image: goldBar,
    description: "سبيكة الذهب الخالص من الذهب الأصفر من 24 قيراطاً تتميز بأنها تحتوي على أدنى مستوى من الذهب المستخدم في السبيكة.",
  },
  {
    id: 6,
    name: "سبيكة ذهب 100 جرام عيار 24",
    category: "سبائك ذهب",
    price: 26550,
    weight: "100 جرام",
    rating: 4.9,
    image: goldBar,
    description: "سبيكة الذهب الخالص من الذهب الأصفر من 24 قيراطاً تتميز بأنها تحتوي على أدنى مستوى من الذهب المستخدم في السبيكة.",
  },
  {
    id: 1,
    name: "سبيكة ذهب 116.6 جرام عيار 24",
    category: "سبائك ذهب",
    price: 31050,
    weight: "116.6 جرام",
    rating: 4.7,
    image: goldBar,
    description: "سبيكة الذهب الخالص من الذهب الأصفر من 24 قيراطاً تتميز بأنها تحتوي على أدنى مستوى من الذهب المستخدم في السبيكة.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
          <Button onClick={() => navigate("/")}>العودة للرئيسية</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
      });
    }
  };

  const totalPrice = product.price * quantity;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <button onClick={() => navigate("/")} className="hover:text-primary">
                    الرئيسية
                  </button>
                  <span>/</span>
                  <button onClick={() => navigate("/")} className="hover:text-primary">
                    سبائك الذهب
                  </button>
                  <span>/</span>
                  <span className="text-primary">{product.name}</span>
                </div>
              </div>
            </div>

            {/* Product Section */}
            <div className="container mx-auto px-4 py-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="bg-black rounded-3xl p-8 relative">
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                    فخامة لا تُقاوم
                  </div>
                  <div className="aspect-square flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-white text-center text-2xl font-bold mt-4">سبيكة ذهب</h3>
                </div>

                {/* Product Info */}
                <div className="bg-white rounded-3xl p-8">
                  <p className="text-sm text-gray-500 mb-2">السعر شامل الضريبة</p>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                  <div className="bg-red-600 text-white inline-block px-4 py-2 rounded-lg font-bold mb-6">
                    فخامة لا تُقاوم
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {totalPrice.toLocaleString("ar-SA")} ر.س
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Weight */}
                  <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">الوزن 🏅</span>
                    <span className="text-primary font-bold">{product.weight}</span>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">الكمية</label>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="rounded-full w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Minus className="h-5 w-5" />
                      </Button>
                      <span className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                        className="rounded-full w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-primary/10 rounded-lg">
                    <span className="text-gray-700 font-medium">السعر</span>
                    <span className="text-2xl font-bold text-primary">
                      {totalPrice.toLocaleString("ar-SA")} ر.س
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      onClick={handleAddToCart}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold rounded-xl"
                    >
                      إضافة للسلة
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-14 h-14 rounded-xl border-2 border-gray-300 hover:bg-gray-50"
                    >
                      <Heart className="h-6 w-6 text-gray-400" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-14 h-14 rounded-xl border-2 border-gray-300 hover:bg-gray-50"
                    >
                      <Share2 className="h-6 w-6 text-gray-400" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProductDetails;
