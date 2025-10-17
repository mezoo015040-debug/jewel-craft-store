import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6" dir="rtl">
              <a href="/" className="hover:text-primary transition-colors">
                الرئيسية
              </a>
              <span>‹</span>
              <span className="text-foreground">ملخص الطلب</span>
            </div>

            <h1 className="text-3xl font-bold text-center mb-8" dir="rtl">
              ملخص الطلب
            </h1>

            {items.length === 0 ? (
              // Empty cart state
              <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-muted/20 rounded-full p-8 mb-6">
                  <ShoppingBag className="h-24 w-24 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3" dir="rtl">
                  السلة فارغة
                </h2>
                <Button 
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="mt-4"
                  dir="rtl"
                >
                  عودة للرئيسية
                </Button>
              </div>
            ) : (
              // Cart with items
              <div className="grid lg:grid-cols-3 gap-8" dir="rtl">
                {/* Cart items */}
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item) => (
                    <Card key={item.id} className="p-4">
                      <div className="flex gap-4">
                        {/* Product image */}
                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <div>
                              <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                                {item.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {item.category}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex justify-between items-center mt-4">
                            {/* Quantity controls */}
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>

                            {/* Price */}
                            <div className="text-left">
                              <p className="text-lg font-bold text-primary">
                                {(item.price * item.quantity).toLocaleString("ar-SA")} ر.س
                              </p>
                              {item.quantity > 1 && (
                                <p className="text-xs text-muted-foreground">
                                  {item.price.toLocaleString("ar-SA")} ر.س للقطعة
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Order summary */}
                <div className="lg:col-span-1">
                  <Card className="p-6 sticky top-24">
                    <h2 className="text-xl font-bold mb-6">ملخص الطلب</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-muted-foreground">
                        <span>المجموع الفرعي</span>
                        <span>{totalPrice.toLocaleString("ar-SA")} ر.س</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>الشحن</span>
                        <span className="text-green-600">مجاني</span>
                      </div>
                      <div className="border-t pt-4 flex justify-between text-lg font-bold">
                        <span>الإجمالي</span>
                        <span className="text-primary">{totalPrice.toLocaleString("ar-SA")} ر.س</span>
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      إتمام الطلب
                    </Button>

                    <Button 
                      variant="outline" 
                      className="w-full mt-3"
                      onClick={() => navigate('/')}
                    >
                      متابعة التسوق
                    </Button>
                  </Card>
                </div>
              </div>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
