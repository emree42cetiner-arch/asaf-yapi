import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy-dark py-2 px-4">
      <div className="container-custom flex justify-end">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Phone className="h-3 w-3" />
          <span>Kurumsal Çözüm Merkezi: 444 0 999</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
