import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import xIcon from "../../assets/twitter.png";

const Footer = () => {
  const iconClass =
    "w-10 h-10 object-contain hover:scale-105 transition-transform cursor-pointer";

  return (
    <footer className="bg-[#244D3F] text-white pt-16 pb-8 px-10 font-geist">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold mb-4 tracking-tighter">KeenKeeper</h2>

        <p className="max-w-xl mb-8 font-medium text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-white-300">
            Social Links
          </span>

          <div className="flex gap-4">
            <img src={instagramIcon} alt="Instagram" className={iconClass} />

            <img src={facebookIcon} alt="Facebook" className={iconClass} />

            <img src={xIcon} alt="X (formerly Twitter)" className={iconClass} />
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-8 tracking-widest">
            <span className="cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-white transition-colors">
              Terms of Service
            </span>

            <span className="cursor-pointer hover:text-white transition-colors">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
