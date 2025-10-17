import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import tamaraLogo from "@/assets/tamara-logo.png";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function TamaraPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { orderData } = location.state || {};
  
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);

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
        variant: "destructive",
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
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "تم التحقق بنجاح",
      description: "جاري معالجة طلبك",
      className: "bg-green-600 text-white border-green-600",
    });

    // Here you would verify OTP and complete payment
    console.log("OTP verified:", otpCode);
  };

  const handleResendCode = () => {
    if (countdown > 0) return;
    
    setCountdown(30);
    toast({
      title: "تم إعادة الإرسال",
      description: "تم إرسال رمز جديد إلى رقم جوالك",
      className: "bg-green-600 text-white border-green-600",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/checkout')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
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
        {step === "phone" ? (
          <Card className="w-full max-w-md p-8 shadow-lg">
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
                    <img 
                      src="https://flagcdn.com/w40/sa.png" 
                      alt="Saudi Arabia" 
                      className="w-6 h-4 object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700">+966</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="5x xxx xxxx"
                    className="pl-4 pr-24 text-left"
                    dir="ltr"
                    maxLength={9}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base font-medium rounded-lg"
                disabled={isLoading}
              >
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
                  {(orderData.totalPrice / 6).toLocaleString("ar-SA", { maximumFractionDigits: 2 })} ر.س
                </span>
              </div>
            </div>
          </Card>
        ) : (
          <div className="w-full max-w-md">
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
                  <button 
                    onClick={() => setStep("phone")}
                    className="text-sm text-blue-600 hover:text-blue-700 underline"
                  >
                    تحتاج تغيير الرقم؟
                  </button>
                </div>

                <p className="text-gray-600 text-sm">
                  لقد أرسلنا للتو رمز التحقق عبر الرسائل القصيرة
                </p>
              </div>

              {/* OTP Inputs */}
              <div className="flex justify-center gap-3 mb-6" dir="ltr">
                {[0, 1, 2, 3].map((index) => (
                  <Input
                    key={index}
                    ref={(el) => (otpInputs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-14 h-14 text-center text-xl font-semibold border-2 focus:border-blue-600 rounded-lg"
                  />
                ))}
              </div>

              {/* Resend Timer */}
              <div className="text-center mb-6">
                {countdown > 0 ? (
                  <p className="text-sm text-gray-600">
                    إعادة الإرسال في {String(Math.floor(countdown / 60)).padStart(2, '0')}:{String(countdown % 60).padStart(2, '0')}
                  </p>
                ) : (
                  <button
                    onClick={handleResendCode}
                    className="text-sm text-blue-600 hover:text-blue-700 underline"
                  >
                    إعادة إرسال الرمز
                  </button>
                )}
              </div>

              <Button 
                onClick={handleVerifyOtp}
                className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base font-medium rounded-lg"
              >
                تحقق
              </Button>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 px-6 text-center">
        <p className="text-xs text-gray-500">
          معاملتك آمنة ومحمية بواسطة تمارا
        </p>
      </footer>
    </div>
  );
}
