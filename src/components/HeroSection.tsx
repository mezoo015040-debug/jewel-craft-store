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