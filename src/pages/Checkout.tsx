import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronUp } from "lucide-react";
import tamaraLogo from "@/assets/tamara-logo.png";
import tabbyLogo from "@/assets/tabby-logo.png";
import { addMonths, format } from "date-fns";
import { ar } from "date-fns/locale";

export default function Checkout() {
  const { items, totalPrice } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [expandedPayment, setExpandedPayment] = useState<string>("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    iban: "",
    bankName: "",
  });

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items.length, navigate]);

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
    const requiredFields = ['fullName', 'phone', 'iban', 'bankName'];
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
    const orderDate = new Date();
    console.log('Order data:', { formData, paymentMethod, items, totalPrice, orderDate });
  };

  const orderDate = new Date();

  return (
    <SidebarProvider>
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
                      <Label htmlFor="iban">رقم الآيبان *</Label>
                      <Input
                        id="iban"
                        name="iban"
                        value={formData.iban}
                        onChange={handleInputChange}
                        placeholder="SA0000000000000000000000"
                        required
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <Label htmlFor="bankName">اسم البنك *</Label>
                      <Input
                        id="bankName"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        placeholder="أدخل اسم البنك"
                        required
                        dir="rtl"
                      />
                    </div>
                  </div>
                </Card>

                {/* Payment Methods */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">طريقة الدفع</h2>
                  
                  <div className="space-y-4">
                    {/* Tamara Payment */}
                    <Collapsible 
                      open={expandedPayment === 'tamara'}
                      onOpenChange={(open) => {
                        setExpandedPayment(open ? 'tamara' : '');
                        if (open) setPaymentMethod('tamara');
                      }}
                    >
                      <div 
                        className={`border-2 rounded-xl overflow-hidden transition-all ${
                          paymentMethod === 'tamara' ? 'border-primary shadow-md' : 'border-border'
                        }`}
                      >
                        <CollapsibleTrigger asChild>
                          <div 
                            className={`p-4 cursor-pointer transition-all ${
                              paymentMethod === 'tamara' ? 'bg-primary/5' : 'hover:bg-muted/50'
                            }`}
                            onClick={() => setPaymentMethod('tamara')}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  paymentMethod === 'tamara' ? 'border-primary' : 'border-border'
                                }`}>
                                  {paymentMethod === 'tamara' && (
                                    <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                                  )}
                                </div>
                                <div className="flex items-center gap-3">
                                  <img 
                                    src={tamaraLogo} 
                                    alt="Tamara" 
                                    className="w-24 h-10 object-contain"
                                  />
                                  <div className="text-right">
                                    <p className="font-semibold text-sm">قسّط على 6 أشهر</p>
                                    <p className="text-xs text-muted-foreground">بدون فوائد أو رسوم إضافية</p>
                                  </div>
                                </div>
                              </div>
                              {expandedPayment === 'tamara' ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent>
                          <div className="p-4 bg-muted/30 border-t">
                            <h4 className="font-semibold mb-3 text-sm">خطة التقسيط - 6 أشهر</h4>
                            <div className="space-y-2">
                              {[1, 2, 3, 4, 5, 6].map((month) => {
                                const paymentDate = addMonths(orderDate, month - 1);
                                return (
                                  <div key={month} className="flex justify-between items-center py-2 px-3 bg-background rounded-lg">
                                    <div className="flex flex-col">
                                      <span className="text-sm text-muted-foreground">القسط {month}</span>
                                      <span className="text-xs text-muted-foreground">
                                        {format(paymentDate, "d MMMM yyyy", { locale: ar })}
                                      </span>
                                    </div>
                                    <span className="font-semibold text-foreground">
                                      {(totalPrice / 6).toLocaleString("ar-SA", { maximumFractionDigits: 2 })} ر.س
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 text-center">
                              الدفعة الأولى عند الشراء، والباقي يُقسّم على 5 أشهر
                            </p>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>

                    {/* Tabby Payment */}
                    <Collapsible 
                      open={expandedPayment === 'tabby'}
                      onOpenChange={(open) => {
                        setExpandedPayment(open ? 'tabby' : '');
                        if (open) setPaymentMethod('tabby');
                      }}
                    >
                      <div 
                        className={`border-2 rounded-xl overflow-hidden transition-all ${
                          paymentMethod === 'tabby' ? 'border-primary shadow-md' : 'border-border'
                        }`}
                      >
                        <CollapsibleTrigger asChild>
                          <div 
                            className={`p-4 cursor-pointer transition-all ${
                              paymentMethod === 'tabby' ? 'bg-primary/5' : 'hover:bg-muted/50'
                            }`}
                            onClick={() => setPaymentMethod('tabby')}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  paymentMethod === 'tabby' ? 'border-primary' : 'border-border'
                                }`}>
                                  {paymentMethod === 'tabby' && (
                                    <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                                  )}
                                </div>
                                <div className="flex items-center gap-3">
                                  <img 
                                    src={tabbyLogo} 
                                    alt="Tabby" 
                                    className="w-24 h-10 object-contain"
                                  />
                                  <div className="text-right">
                                    <p className="font-semibold text-sm">قسّط على 6 أشهر</p>
                                    <p className="text-xs text-muted-foreground">بدون فوائد أو رسوم إضافية</p>
                                  </div>
                                </div>
                              </div>
                              {expandedPayment === 'tabby' ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent>
                          <div className="p-4 bg-muted/30 border-t">
                            <h4 className="font-semibold mb-3 text-sm">خطة التقسيط - 6 أشهر</h4>
                            <div className="space-y-2">
                              {[1, 2, 3, 4, 5, 6].map((month) => {
                                const paymentDate = addMonths(orderDate, month - 1);
                                return (
                                  <div key={month} className="flex justify-between items-center py-2 px-3 bg-background rounded-lg">
                                    <div className="flex flex-col">
                                      <span className="text-sm text-muted-foreground">القسط {month}</span>
                                      <span className="text-xs text-muted-foreground">
                                        {format(paymentDate, "d MMMM yyyy", { locale: ar })}
                                      </span>
                                    </div>
                                    <span className="font-semibold text-foreground">
                                      {(totalPrice / 6).toLocaleString("ar-SA", { maximumFractionDigits: 2 })} ر.س
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 text-center">
                              الدفعة الأولى عند الشراء، والباقي يُقسّم على 5 أشهر
                            </p>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
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
