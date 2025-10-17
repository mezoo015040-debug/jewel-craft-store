import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg bg-gradient-gold bg-clip-text text-transparent">
                  مؤسسة فهد سمير
                </h3>
                <p className="text-sm text-secondary-foreground/70">للمجوهرات والذهب</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              متخصصون في تجارة الذهب والمجوهرات الفاخرة منذ سنوات طويلة. نقدم أفضل سبائك الذهب الخالص عيار 24.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  سبائك ذهب
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  مجوهرات
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  من نحن
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Phone className="h-5 w-5 text-primary" />
                <span>+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@fsmjewel.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <MapPin className="h-5 w-5 text-primary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 مؤسسة فهد سمير للمجوهرات والذهب. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
