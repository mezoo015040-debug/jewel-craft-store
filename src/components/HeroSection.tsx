import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative h-[400px] md:h-[500px] bg-gradient-hero flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/90"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-block animate-float">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-1 w-12 bg-gradient-gold rounded"></div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-10 w-10 text-primary"
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
                <div className="h-1 w-12 bg-gradient-gold rounded"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
              قسّم طلبك مع{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                تابي أو تمارا
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-6">
              على 4 أو 6 دفعات بدون فوائد
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-elegant">
                <span className="text-2xl font-bold text-secondary">tamara</span>
              </div>
              <div className="bg-primary px-6 py-3 rounded-lg shadow-elegant">
                <span className="text-2xl font-bold text-secondary">tabby</span>
              </div>
            </div>

            <p className="text-sm text-secondary-foreground/70 mt-4">
              فخامة لا تُقاوم - استثمر في الذهب الخالص
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-75"></div>
      </div>
    </section>
  );
};
