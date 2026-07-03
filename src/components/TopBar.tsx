import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy-dark py-2 px-4">
      <div className="container-custom flex justify-end">
        <a 
          href="https://wa.me/905325549292" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
        >
          <Phone className="h-3 w-3" />
          <span>Kurumsal Çözüm Merkezi: 0532 554 92 92</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
