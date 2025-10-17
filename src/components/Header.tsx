import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  
  return <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Right side - Menu */}
          <div className="flex items-center gap-3">
            <SidebarTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
                <Menu className="h-5 w-5" />
              </Button>
            </SidebarTrigger>
          </div>

          {/* Center - Logo */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="text-yellow-600 text-lg mb-1">★</div>
                <div className="relative">
                  <svg viewBox="0 0 80 80" className="h-14 w-14" xmlns="http://www.w3.org/2000/svg">
                    {/* Crown */}
                    <path d="M15 25 L20 35 L30 30 L40 40 L50 30 L60 35 L65 25 L60 25 L60 45 L20 45 L20 25 Z" fill="#D4AF37" stroke="#B8960D" strokeWidth="1" />
                    {/* Diamond in center */}
                    <path d="M40 50 L30 60 L40 70 L50 60 Z" fill="#D4AF37" stroke="#B8960D" strokeWidth="1.5" />
                    <path d="M35 60 L40 55 L45 60 L40 65 Z" fill="#FFF" opacity="0.3" />
                    {/* Laurel wreath - left */}
                    <path d="M25 55 Q20 50 20 45 Q20 40 25 38 Q20 45 25 50 Z" fill="#D4AF37" />
                    {/* Laurel wreath - right */}
                    <path d="M55 55 Q60 50 60 45 Q60 40 55 38 Q60 45 55 50 Z" fill="#D4AF37" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center mt-1">
              <h1 className="text-sm font-bold text-primary leading-tight">مؤسسة فهد</h1>
              <p className="text-xs text-gray-600 leading-tight">سمير للمجوهرات</p>
            </div>
          </div>

          {/* Left side - Cart and User */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-gray-600 hover:text-primary"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                  {totalItems}
                </Badge>}
            </Button>
            <div className="text-sm font-medium text-gray-700">
              {totalPrice.toLocaleString("ar-SA")} ر.س
            </div>
          </div>
        </div>

        {/* Navigation below logo */}
        <nav className="flex items-center justify-center border-t border-gray-100 py-3">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-4">
            سبائك
          </a>
        </nav>
      </div>
    </header>;
};