interface MenuItem {
  name: string;
  price?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm border border-border">
      <h2 className="text-lg font-bold text-primary mb-3">{title}</h2>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.name} className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{item.name}</span>
            {item.price && (
              <span className="text-sm font-semibold text-accent-foreground bg-accent/30 px-2.5 py-0.5 rounded-full">
                {item.price}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
