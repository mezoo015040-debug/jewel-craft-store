import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    street: "",
    buildingNumber: "",
  });

  // Redirect if cart is empty
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      toast({
        title: "خطأ",
        description: "الرجاء اختيار طريقة الدفع",
        variant: "destructive",
      });
      return;
    }

    // Validate form
    const requiredFields = ['fullName', 'phone', 'city', 'district'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (emptyFields.length > 0) {
      toast({
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "جاري معالجة الطلب",
      description: "سيتم تحويلك لصفحة الدفع",
      className: "bg-green-600 text-white border-green-600",
    });

    // Here you would typically process the payment
    console.log('Order data:', { formData, paymentMethod, items, totalPrice });
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="min-h-screen flex flex-col w-full bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8" dir="rtl">
            إتمام الطلب
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8" dir="rtl">
              {/* Order Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Customer Information */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">بيانات المستلم</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">الاسم الكامل *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="أدخل الاسم الكامل"
                        required
                        dir="rtl"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">رقم الجوال *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="05xxxxxxxx"
                          required
                          dir="rtl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">البريد الإلكتروني (اختياري)</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@email.com"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <Separator className="my-6" />
                    
                    <h3 className="text-lg font-semibold mb-3">عنوان الشحن</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">المدينة *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="أدخل المدينة"
                          required
                          dir="rtl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="district">الحي *</Label>
                        <Input
                          id="district"
                          name="district"
                          value={formData.district}
                          onChange={handleInputChange}
                          placeholder="أدخل الحي"
                          required
                          dir="rtl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="street">الشارع (اختياري)</Label>
                        <Input
                          id="street"
                          name="street"
                          value={formData.street}
                          onChange={handleInputChange}
                          placeholder="أدخل اسم الشارع"
                          dir="rtl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="buildingNumber">رقم المبنى (اختياري)</Label>
                        <Input
                          id="buildingNumber"
                          name="buildingNumber"
                          value={formData.buildingNumber}
                          onChange={handleInputChange}
                          placeholder="رقم المبنى"
                          dir="rtl"
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Payment Methods */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">طريقة الدفع</h2>
                  
                  <div className="space-y-3">
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'tamara' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setPaymentMethod('tamara')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === 'tamara' ? 'border-primary' : 'border-border'
                          }`}>
                            {paymentMethod === 'tamara' && (
                              <div className="w-3 h-3 rounded-full bg-primary" />
                            )}
                          </div>
                          <span className="font-medium">تمارا - قسّم فاتورتك على 4 دفعات بدون فوائد</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Tamara</div>
                      </div>
                    </div>

                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'tabby' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setPaymentMethod('tabby')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === 'tabby' ? 'border-primary' : 'border-border'
                          }`}>
                            {paymentMethod === 'tabby' && (
                              <div className="w-3 h-3 rounded-full bg-primary" />
                            )}
                          </div>
                          <span className="font-medium">تابي - قسّم مشترياتك على 4 دفعات</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Tabby</div>
                      </div>
                    </div>

                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'credit' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setPaymentMethod('credit')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === 'credit' ? 'border-primary' : 'border-border'
                          }`}>
                            {paymentMethod === 'credit' && (
                              <div className="w-3 h-3 rounded-full bg-primary" />
                            )}
                          </div>
                          <span className="font-medium">بطاقة الائتمان / مدى</span>
                        </div>
                        <div className="text-sm text-muted-foreground">💳</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4">تفاصيل الطلب</h2>
                  
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">الكمية: {item.quantity}</span>
                            <span className="text-sm font-semibold text-primary">
                              {(item.price * item.quantity).toLocaleString("ar-SA")} ر.س
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>ملخص السلة</span>
                      <span>{totalPrice.toLocaleString("ar-SA")} ر.س</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>تكلفة الشحن</span>
                      <span className="text-green-600">مجاني</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>إجمالي الطلب</span>
                      <span className="text-primary">{totalPrice.toLocaleString("ar-SA")} ر.س</span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    تأكيد الدفع
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    بالنقر على "تأكيد الدفع"، أنت توافق على شروط وأحكام الموقع
                  </p>
                </Card>
              </div>
            </div>
          </form>
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
