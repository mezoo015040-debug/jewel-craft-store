import { Phone, Mail, MapPin } from "lucide-react";
import vatCertificate from "@/assets/vat-certificate.png";
import businessCenter from "@/assets/business-center.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 80 80"
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 25 L20 35 L30 30 L40 40 L50 30 L60 35 L65 25 L60 25 L60 45 L20 45 L20 25 Z"
                  fill="#D4AF37"
                  stroke="#B8960D"
                  strokeWidth="1"
                />
                <path
                  d="M40 50 L30 60 L40 70 L50 60 Z"
                  fill="#D4AF37"
                  stroke="#B8960D"
                  strokeWidth="1.5"
                />
              </svg>
              <div>
                <h3 className="font-bold text-primary">مؤسسة فهد سمير</h3>
                <p className="text-sm text-gray-600">للمجوهرات والذهب</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              متخصصون في تجارة الذهب والمجوهرات الفاخرة
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  سبائك ذهب
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  من نحن
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-primary" />
                <span>+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@fsmjewel.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-primary" />
                <span>الرياض، السعودية</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">الشهادات والتوثيق</h4>
            <div className="space-y-6">
              {/* VAT Certificate */}
              <div className="flex items-start gap-4 p-3 bg-white rounded-lg border border-gray-200">
                <img 
                  src={vatCertificate} 
                  alt="الرقم الضريبي" 
                  className="h-16 w-auto object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">الرقم الضريبي</p>
                  <p className="text-xs text-gray-500 mt-1">ضريبة القيمة المضافة</p>
                </div>
              </div>
              
              {/* Business Center Certificate */}
              <div className="flex items-start gap-4 p-3 bg-white rounded-lg border border-gray-200">
                <img 
                  src={businessCenter} 
                  alt="توثيق مركز الأعمال" 
                  className="h-16 w-auto object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">توثيق مركز الأعمال</p>
                  <p className="text-xs text-primary font-semibold mt-1 direction-ltr">1009208445</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © 2024 مؤسسة فهد سمير للمجوهرات والذهب. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
