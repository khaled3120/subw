import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const FullStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-[28px] h-[28px] text-[#00b67a] fill-current">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const HalfStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="w-[28px] h-[28px]">
    <defs>
      <linearGradient id="half-fill" x1="0" x2="1" y1="0" y2="0">
        <stop offset="50%" stopColor="#00b67a" />
        <stop offset="50%" stopColor="#e5e7eb" />
      </linearGradient>
    </defs>
    <path fill="url(#half-fill)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const recentClaims = [
  { name: "Ashley V.", amount: 100 },
  { name: "Samantha P.", amount: 100 },
  { name: "Jessica L.", amount: 100 },
  { name: "Amanda C.", amount: 100 },
  { name: "Brittany M.", amount: 100 },
  { name: "Sarah K.", amount: 100 },
  { name: "Matthew G.", amount: 100 },
  { name: "Megan T.", amount: 100 },
  { name: "Christopher N.", amount: 100 },
  { name: "Lauren D.", amount: 100 },
  { name: "Emily B.", amount: 100 },
  { name: "Daniel W.", amount: 100 },
  { name: "Rachel H.", amount: 100 }
];

export default function App() {
  const [timeLeft, setTimeLeft] = useState(14 * 60);
  const [claimIndex, setClaimIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const claimTimer = setInterval(() => {
      setShowNotification(false); // hide briefly to re-trigger animation
      setTimeout(() => {
        setClaimIndex((prev) => (prev + 1) % recentClaims.length);
        setShowNotification(true); // show next popup immediately
      }, 300); // quick 300ms swap so there is no empty waiting time
    }, 4000); // cycle every 4 seconds

    return () => clearInterval(claimTimer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="min-h-[100dvh] bg-[#f3f9f4] flex flex-col items-center justify-center py-2 sm:py-10 px-4 font-sans selection:bg-[#008C15]/20 selection:text-[#008C15] overflow-hidden">
      
      {/* Floating Notification Wrapper */}
      <div className="h-[40px] sm:h-[46px] w-[340px] max-w-full flex justify-center relative mb-3 sm:mb-8 shrink-0">
        {showNotification && (
          <div className="absolute top-0 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-1.5 sm:gap-2 animate-in fade-in slide-in-from-top-4 duration-500 transition-all w-full sm:w-auto justify-center">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC600] shrink-0" />
            <span className="text-gray-700 text-[13px] sm:text-[15px] whitespace-nowrap truncate">
              <span className="text-[#008C15] font-medium">{recentClaims[claimIndex].name}</span> claimed ${recentClaims[claimIndex].amount}!
            </span>
          </div>
        )}
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full max-w-[380px] p-5 sm:p-8 pt-6 sm:pt-10 flex flex-col items-center animate-in fade-in zoom-in-95 duration-700 max-h-[calc(100svh-80px)] overflow-y-auto noscrollbar">
        
        {/* Logo Layer */}
        <div className="flex items-center justify-center mb-4 sm:mb-8 shrink-0 pt-2 w-full">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg" 
            alt="Subway" 
            className="w-[160px] sm:w-[190px] h-auto object-contain drop-shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Prize Value */}
        <h1 className="text-[#008C15] text-[52px] sm:text-[72px] font-bold leading-none mb-1 sm:mb-3 tracking-tight shrink-0">
          $100
        </h1>
        <p className="text-gray-500 font-bold tracking-[0.2em] text-[11px] sm:text-[13px] mb-4 sm:mb-6 uppercase text-center shrink-0">
          Subway Gift Card
        </p>

        {/* Countdown Timer */}
        <div className="w-full bg-[#f3f9f4] border border-[#008C15]/20 rounded-full py-2 sm:py-3 flex items-center justify-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-8 px-2 shrink-0">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#008C15]" strokeWidth={2.5} />
          <span className="text-[#008C15] font-semibold text-[14px] sm:text-[15px]">
            Offer expires in {timeString}
          </span>
        </div>

        {/* Steps to Claim */}
        <div className="bg-[#f2f3f5] rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 w-full space-y-2.5 sm:space-y-4 mb-4 sm:mb-8 shrink-0">
          {[
            "Click \"Claim Now\"",
            "Enter your email and basic info",
            "Complete 4-5 deals",
            "Enjoy your $100 reward!"
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded-full bg-[#008C15] text-white flex items-center justify-center text-[12px] sm:text-[13px] font-bold shadow-sm">
                {i + 1}
              </div>
              <span className="text-gray-900 font-medium text-[14px] sm:text-[15px] leading-tight">{step}</span>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button 
          onClick={() => window.location.href = 'https://giftclick.org/aff_c?offer_id=3566&aff_id=144760'}
          className="w-full bg-[#008C15] hover:bg-[#006b10] transition-colors active:scale-[0.96] text-white rounded-full py-3 sm:py-4 px-4 text-[15px] sm:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-[#008C15]/20 mb-3 sm:mb-6 group shrink-0"
        >
          CLAIM YOUR GIFT CARD
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Review Badge */}
        <div className="flex flex-col items-center justify-center pt-1 shrink-0 scale-[0.85] sm:scale-100 transform origin-top">
          <div className="flex gap-[4px] mb-2">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
          <div className="text-[13px] font-bold text-[#031d36] mb-1.5 uppercase tracking-[0.02em] text-center">
            4.9 OUT OF 5 BASED ON 3,524 REVIEWS
          </div>
          <div className="flex items-center justify-center gap-[6px]">
            <svg width="24" height="24" viewBox="0 0 24 24" className="w-[18px] h-[18px] text-[#00b67a] fill-current">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-[#031d36] font-bold text-[16px] tracking-tight">Trustpilot</span>
          </div>
        </div>

      </div>
    </div>
  );
}
