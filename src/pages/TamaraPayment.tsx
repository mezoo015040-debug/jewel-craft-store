import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import tamaraLogo from "@/assets/tamara-logo.png";
import { ArrowRight, CheckCircle2, CreditCard, ChevronLeft } from "lucide-react";
export default function TamaraPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    toast
  } = useToast();
  const {
    orderData
  } = location.state || {};
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"phone" | "otp" | "installment-plan" | "payment">("phone");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  // Countdown timer for resend
  useEffect(() => {
    if (step === "otp" && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, countdown]);

  // Redirect if no order data
  if (!orderData) {
    navigate('/checkout');
    return null;
  }
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 9) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال رقم جوال صحيح",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    // Simulate sending verification code
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      setCountdown(30);
    }, 1500);
  };
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 3) {
      otpInputs.current[index + 1]?.focus();
    }
  };
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };
  const handleVerifyOtp = () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 4) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال رمز التحقق كاملاً",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      setStep("installment-plan");
      toast({
        title: "تم التحقق بنجاح",
        description: "جاري معالجة طلبك",
        className: "bg-green-600 text-white border-green-600"
      });
    }, 1000);
  };
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || cardNumber.length < 16) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال رقم بطاقة صحيح",
        variant: "destructive"
      });
      return;
    }
    if (!cardExpiry || cardExpiry.length < 5) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال تاريخ انتهاء البطاقة",
        variant: "destructive"
      });
      return;
    }
    if (!cardCVV || cardCVV.length < 3) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال CVV",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "تم الدفع بنجاح",
        description: "شكراً لك! تم إتمام عملية الدفع",
        className: "bg-green-600 text-white border-green-600"
      });

      // Navigate back after successful payment
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 2000);
  };
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };
  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };
  const handleResendCode = () => {
    if (countdown > 0) return;
    setCountdown(30);
    toast({
      title: "تم إعادة الإرسال",
      description: "تم إرسال رمز جديد إلى رقم جوالك",
      className: "bg-green-600 text-white border-green-600"
    });
  };
  return <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={() => navigate('/checkout')} className="text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowRight className="h-6 w-6" />
          </button>
          <img src={tamaraLogo} alt="تمارا" className="h-8 object-contain" />
          <button className="text-sm text-gray-600 hover:text-gray-900">
            English
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {step === "installment-plan" ? <Card className="w-full max-w-md p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                خطة الدفع بالتقسيط
              </h1>
              <p className="text-gray-600 text-sm">
                قسّط مشترياتك على 6 أشهر بدون فوائد
              </p>
            </div>

            {/* Total Amount */}
            

            {/* Installment Details */}
            <div className="space-y-3 mb-6">
              <p className="font-semibold text-gray-900 text-right mb-4">تفاصيل الأقساط:</p>
              
              {[0, 1, 2, 3, 4, 5].map(index => {
            const installmentAmount = orderData.totalPrice / 6;
            const date = new Date();
            date.setMonth(date.getMonth() + index);
            const monthName = date.toLocaleDateString('ar-SA', {
              month: 'long',
              year: 'numeric'
            });
            return <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-2 ${index === 0 ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${index === 0 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {installmentAmount.toLocaleString("ar-SA", {
                      maximumFractionDigits: 2
                    })} ر.س
                        </p>
                        <p className="text-xs text-gray-600">{monthName}</p>
                      </div>
                    </div>
                    {index === 0 && <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        ادفع الآن
                      </span>}
                  </div>;
          })}
            </div>

            {/* First Payment Highlight */}
            <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm">القسط الأول (الآن)</span>
                <span className="text-2xl font-bold">
                  {(orderData.totalPrice / 6).toLocaleString("ar-SA", {
                maximumFractionDigits: 2
              })} ر.س
                </span>
              </div>
            </div>

            {/* Continue Button */}
            <Button onClick={() => setStep("payment")} className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base font-medium rounded-lg">
              متابعة إلى الدفع
            </Button>

            {/* Info */}
            <p className="text-center text-xs text-gray-500 mt-4">
              بدون فوائد • بدون رسوم إضافية • دفع آمن ومحمي
            </p>
          </Card> : step === "payment" ? <Card className="w-full max-w-md p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                التأكيد والدفع
              </h1>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              {/* Add New Card Section */}
              <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-purple-600 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                    </div>
                    <span className="font-semibold text-gray-900">أضف بطاقة جديدة</span>
                  </div>
                  <CreditCard className="h-5 w-5 text-gray-600" />
                </div>

                {/* Card Logos */}
                <div className="flex gap-2 mb-4">
                  <div className="w-12 h-8 bg-white rounded border flex items-center justify-center text-xs font-bold">VISA</div>
                  <div className="w-12 h-8 bg-white rounded border flex items-center justify-center">
                    <div className="flex gap-0.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-orange-400 -ml-1.5"></div>
                    </div>
                  </div>
                  <div className="w-12 h-8 bg-white rounded border flex items-center justify-center text-xs font-bold">MADA</div>
                </div>

                {/* Card Number */}
                <div className="mb-3">
                  <Label htmlFor="cardNumber" className="text-right block mb-2 text-sm text-gray-600">
                    رقم البطاقة
                  </Label>
                  <Input id="cardNumber" type="text" value={cardNumber} onChange={e => setCardNumber(formatCardNumber(e.target.value))} placeholder="1234 5678 9012 3456" className="text-left" dir="ltr" maxLength={19} required />
                </div>

                {/* CVV and Expiry */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="cvv" className="text-right block mb-2 text-sm text-gray-600">
                      CVV
                    </Label>
                    <Input id="cvv" type="text" value={cardCVV} onChange={e => setCardCVV(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="123" className="text-left" dir="ltr" maxLength={4} required />
                  </div>
                  <div>
                    <Label htmlFor="expiry" className="text-right block mb-2 text-sm text-gray-600">
                      MM/YY
                    </Label>
                    <Input id="expiry" type="text" value={cardExpiry} onChange={e => setCardExpiry(formatExpiry(e.target.value))} placeholder="12/25" className="text-left" dir="ltr" maxLength={5} required />
                  </div>
                </div>
              </div>

              {/* Choose Plan Button */}
              <button type="button" className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-600 text-sm">اختر الخطة</span>
                <ChevronLeft className="h-5 w-5 text-gray-400" />
              </button>

              {/* Payment Details */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    {(orderData.totalPrice / 4).toLocaleString("ar-SA", {
                  maximumFractionDigits: 2
                })} ر.س/شهرياً
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    4 دفعات - الإجمالي: {orderData.totalPrice.toLocaleString("ar-SA")} ر.س
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-6 text-base font-medium rounded-lg" disabled={isLoading}>
                {isLoading ? "جاري المعالجة..." : `ادفع ${(orderData.totalPrice / 4).toLocaleString("ar-SA", {
              maximumFractionDigits: 2
            })} ر.س`}
              </Button>
            </form>
          </Card> : step === "phone" ? <Card className="w-full max-w-md p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                أدخل رقم الجوال
              </h1>
              <p className="text-gray-600 text-sm">
                سيتم إرسال رمز تحقق للمتابعة
              </p>
            </div>

            <form onSubmit={handleSendCode} className="space-y-6">
              <div>
                <Label htmlFor="phone" className="text-right block mb-2">
                  رقم الجوال
                </Label>
                <div className="relative">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 border-l pl-3">
                    <img src="https://flagcdn.com/w40/sa.png" alt="Saudi Arabia" className="w-6 h-4 object-cover" />
                    <span className="text-sm font-medium text-gray-700">+966</span>
                  </div>
                  <Input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="5x xxx xxxx" className="pl-4 pr-24 text-left" dir="ltr" maxLength={9} required />
                </div>
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base font-medium rounded-lg" disabled={isLoading}>
                {isLoading ? "جاري الإرسال..." : "أرسل الرمز"}
              </Button>
            </form>

            {/* Order Summary */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">إجمالي الطلب</span>
                <span className="font-bold text-lg text-gray-900">
                  {orderData.totalPrice.toLocaleString("ar-SA")} ر.س
                </span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="text-gray-600">القسط الشهري</span>
                <span className="font-semibold text-gray-900">
                  {(orderData.totalPrice / 6).toLocaleString("ar-SA", {
                maximumFractionDigits: 2
              })} ر.س
                </span>
              </div>
            </div>
          </Card> : <div className="w-full max-w-md">
            {/* Success Message */}
            <div className="mb-6 flex justify-center">
              <div className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">تم إرسال الرمز عبر الرسائل القصيرة</span>
              </div>
            </div>

            <Card className="p-8 shadow-lg">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  تحقق من رقمك
                </h1>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg font-semibold text-gray-900">
                    966 {phone}
                  </span>
                  <button onClick={() => setStep("phone")} className="text-sm text-blue-600 hover:text-blue-700 underline">
                    تحتاج تغيير الرقم؟
                  </button>
                </div>

                <p className="text-gray-600 text-sm">
                  لقد أرسلنا للتو رمز التحقق عبر الرسائل القصيرة
                </p>
              </div>

              {/* OTP Inputs */}
              <div className="flex justify-center gap-3 mb-6" dir="ltr">
                {[0, 1, 2, 3].map(index => <Input key={index} ref={el => otpInputs.current[index] = el} type="text" inputMode="numeric" maxLength={1} value={otp[index]} onChange={e => handleOtpChange(index, e.target.value.replace(/\D/g, ''))} onKeyDown={e => handleOtpKeyDown(index, e)} className="w-14 h-14 text-center text-xl font-semibold border-2 focus:border-blue-600 rounded-lg" />)}
              </div>

              {/* Resend Timer */}
              <div className="text-center mb-6">
                {countdown > 0 ? <p className="text-sm text-gray-600">
                    إعادة الإرسال في {String(Math.floor(countdown / 60)).padStart(2, '0')}:{String(countdown % 60).padStart(2, '0')}
                  </p> : <button onClick={handleResendCode} className="text-sm text-blue-600 hover:text-blue-700 underline">
                    إعادة إرسال الرمز
                  </button>}
              </div>

              <Button onClick={handleVerifyOtp} className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base font-medium rounded-lg" disabled={isLoading}>
                {isLoading ? "جاري التحقق..." : "تحقق"}
              </Button>
            </Card>
          </div>}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 px-6 text-center">
        <p className="text-xs text-gray-500">
          معاملتك آمنة ومحمية بواسطة تمارا
        </p>
      </footer>
    </div>;
}