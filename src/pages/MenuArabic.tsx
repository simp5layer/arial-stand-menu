import { useNavigate } from "react-router-dom";
import { ArrowRight, Share2, FileText } from "lucide-react";
import { toast } from "sonner";
import MenuSection from "@/components/MenuSection";

const menuData = [
  {
    title: "الاساس 🍟",
    items: [
      { name: "بطاطس", price: "١٠ ريال" },
      { name: "بطاطس للحلوين", price: "١٥ ريال" },
      { name: "بطاطس الوحوش", price: "٢٥ ريال" },
      { name: "بطاطس جمبري", price: "٣٠ ريال" },
    ],
  },
  {
    title: "المشروبات 🥤",
    items: [
      { name: "فيمتو", price: "٧ ريال" },
      { name: "قمر الدين", price: "١٠ ريال" },
      { name: "مويه", price: "١.٥ ريال" },
    ],
  },
  {
    title: "جانب 🥒",
    items: [{ name: "مخلل", price: "مجاني" }],
  },
  {
    title: "صوصات 🌶️",
    items: [
      { name: "ثوم" },
      { name: "كوكتيل" },
      { name: "كاتشاب" },
      { name: "طحينه" },
      { name: "حمر" },
      { name: "شطة حمراء" },
      { name: "شطة خضراء" },
    ],
  },
];

const MenuArabic = () => {
  const navigate = useNavigate();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("تم نسخ الرابط!");
    } catch {
      toast.error("تعذر نسخ الرابط");
    }
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-md mx-auto px-5 py-6 animate-fade-in font-arabic">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            رجوع <ArrowRight size={18} />
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              title="نسخ الرابط"
            >
              <Share2 size={16} className="text-muted-foreground" />
            </button>
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              title="عرض PDF"
            >
              <FileText size={16} className="text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">منيو</h1>
          <p className="text-sm font-medium text-muted-foreground mt-1">بسطة اريال</p>
        </div>

        {/* Menu sections */}
        <div className="space-y-6">
          {menuData.map((section) => (
            <MenuSection key={section.title} title={section.title} items={section.items} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-[10px] text-muted-foreground/50 mt-10 mb-4">
          فاتحين كل يوم • ١٠ مساءً إلى ٢:٣٠ صباحاً
        </p>
      </div>
    </div>
  );
};

export default MenuArabic;
