import { useNavigate } from "react-router-dom";
import arialLogo from "@/assets/arial-logo.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-background">
      <div className="flex flex-col items-center gap-6 animate-fade-in max-w-sm w-full">
        {/* Logo */}
        <img
          src={arialLogo}
          alt="Arial Stand Logo — fries bowl with leaf and lightning"
          className="w-48 h-48 object-contain rounded-2xl"
        />

        {/* Tagline */}
        <div className="text-center space-y-1">
          <p className="text-lg font-semibold text-primary tracking-wide">Simple & Friendly</p>
          <p className="text-lg font-semibold text-primary font-arabic" dir="rtl">بسيط وودود</p>
        </div>

        {/* Language buttons */}
        <div className="flex flex-col gap-3 w-full mt-4">
          <button
            onClick={() => navigate("/en")}
            className="w-full py-4 rounded-full bg-primary text-primary-foreground text-lg font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            English
          </button>
          <button
            onClick={() => navigate("/ar")}
            className="w-full py-4 rounded-full bg-card text-foreground border-2 border-primary text-lg font-semibold font-arabic transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            العربية
          </button>
        </div>

        {/* TikTok Embed */}
        <div className="w-full flex flex-col items-center my-2">
          <div className="text-center space-y-1 mb-2">
            <p className="text-sm font-medium text-primary">Watch Our Latest</p>
            <p className="text-sm font-medium text-primary font-arabic" dir="rtl">آخر فيديو</p>
          </div>
          <iframe
            src="https://www.tiktok.com/player/v1/7615800382727539986?music_info=1&description=1"
            style={{ width: '100%', height: 550, maxWidth: 325, border: 'none', borderRadius: '16px' }}
            allow="fullscreen"
            title="Arial Stand TikTok"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-12 pb-6 text-center space-y-2 max-w-xs">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Open everyday • 10:00 PM – 2:30 AM • Abhur Al Junoobiyah, behind Farsi Seven twin tower
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed font-arabic" dir="rtl">
          فاتحين كل يوم • ١٠ مساءً إلى ٢:٣٠ صباحاً • ابحر الجنوبية، خلف ابراج الفارسي ٧
        </p>
        <p className="text-[10px] text-muted-foreground/60 mt-4">Powered by Arial</p>
      </footer>
    </div>
  );
};

export default Landing;
