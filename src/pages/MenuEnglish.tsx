import { useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, FileText } from "lucide-react";
import { toast } from "sonner";
import MenuSection from "@/components/MenuSection";

const menuData = [
  {
    title: "Main 🍟",
    items: [
      { name: "Fries", price: "10.00 SR" },
      { name: "Animal Style Fries", price: "20.00 SR" },
      { name: "Shrimp Fries", price: "25.00 SR" },
    ],
  },
  {
    title: "Drinks 🥤",
    items: [
      { name: "Vimto", price: "7.00 SR" },
      { name: "Dried Peaches", price: "10.00 SR" },
      { name: "Water", price: "1.50 SR" },
    ],
  },
  {
    title: "Sides 🥒",
    items: [{ name: "Mixed Pickles", price: "Free" }],
  },
  {
    title: "Sauces 🌶️",
    items: [
      { name: "Garlic" },
      { name: "Thousand Island" },
      { name: "Ketchup" },
      { name: "Tahini" },
      { name: "Tamarind" },
      { name: "Hot Sauce (Red)" },
      { name: "Spicy Sauce (Green)" },
    ],
  },
];

const MenuEnglish = () => {
  const navigate = useNavigate();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied!");
    } catch {
      toast.error("Could not copy link");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-5 py-6 animate-fade-in">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              title="Copy link"
            >
              <Share2 size={16} className="text-muted-foreground" />
            </button>
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              title="View PDF"
            >
              <FileText size={16} className="text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">MENU</h1>
          <p className="text-sm font-medium text-muted-foreground mt-1 tracking-widest uppercase">Arial Stand</p>
        </div>

        {/* Menu sections */}
        <div className="space-y-6">
          {menuData.map((section) => (
            <MenuSection key={section.title} title={section.title} items={section.items} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-[10px] text-muted-foreground/50 mt-10 mb-4">
          Open everyday • 10:00 PM – 2:30 AM
        </p>
      </div>
    </div>
  );
};

export default MenuEnglish;
