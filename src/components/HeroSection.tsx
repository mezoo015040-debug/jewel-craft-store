import megaphone from "@/assets/megaphone.png";
import clouds from "@/assets/clouds.png";
export const HeroSection = () => {
  return <section className="relative overflow-hidden bg-[#0a0e3d]">
      <div className="relative min-h-[500px] flex items-center justify-center py-12">
        {/* White clouds - top left */}
        <img src={clouds} alt="" className="absolute top-8 left-8 w-48 opacity-90" />
        
        {/* White clouds - bottom right */}
        <img src={clouds} alt="" className="absolute bottom-16 right-8 w-56 opacity-90" />

        {/* Golden stars decorations */}
        <div className="absolute top-12 left-1/4 text-yellow-400 text-2xl">★</div>
        <div className="absolute top-32 left-1/3 text-yellow-400 text-xl">✦</div>
        <div className="absolute top-20 right-1/4 text-yellow-400 text-3xl">✦</div>
        
        <div className="absolute bottom-24 left-1/3 text-yellow-400 text-2xl">✦</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left side - Logo and text */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="text-yellow-400 text-3xl mb-2">★</div>
                <svg viewBox="0 0 120 120" className="h-28 w-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
                  {/* Laurel wreath circle */}
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3,3" />
                  
                  {/* Diamond */}
                  <path d="M60 30 L45 50 L60 70 L75 50 Z" fill="#D4AF37" stroke="#B8960D" strokeWidth="2" />
                  <path d="M52 50 L60 42 L68 50 L60 58 Z" fill="#FFF" opacity="0.4" />
                  
                  {/* Laurel leaves - left side */}
                  <path d="M35 45 Q30 50 30 55 Q30 50 35 48 Z" fill="#D4AF37" />
                  <path d="M33 55 Q28 60 28 65 Q28 60 33 58 Z" fill="#D4AF37" />
                  
                  {/* Laurel leaves - right side */}
                  <path d="M85 45 Q90 50 90 55 Q90 50 85 48 Z" fill="#D4AF37" />
                  <path d="M87 55 Q92 60 92 65 Q92 60 87 58 Z" fill="#D4AF37" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-primary mb-1">مؤسسة فهد</h2>
              <p className="text-base text-primary">سمير للمجوهرات</p>
              <div className="flex gap-1 mt-2">
                <span className="text-yellow-400 text-lg">✦</span>
                <span className="text-yellow-400 text-lg">✦</span>
              </div>
            </div>

            {/* Center - Main message */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                قسّم طلبك مع تابي أو تمارا
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-white">
                على 4 أو 6 دفعات
              </p>

              {/* Payment logos */}
              <div className="flex flex-col items-center gap-3 mt-6">
                <div className="bg-white px-8 py-3 rounded-lg shadow-lg">
                  <span className="text-2xl font-bold" style={{
                  color: '#3EBDB5'
                }}>tamara</span>
                </div>
                <div className="px-8 py-3 rounded-lg shadow-lg" style={{
                backgroundColor: '#3EBDB5'
              }}>
                  <span className="text-2xl font-bold text-white">tabby</span>
                </div>
              </div>
            </div>

            {/* Right side - Megaphone illustration */}
            <div className="flex justify-center">
              
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
          ‹
        </button>
        <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
          ›
        </button>
      </div>
    </section>;
};