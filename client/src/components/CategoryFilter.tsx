import { categories, Category } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onSelectCategory: (category: Category | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-8">
      <button
        onClick={() => onSelectCategory('all')}
        className={cn(
          "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
          selectedCategory === 'all'
            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
            : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
        )}
      >
        Todos
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={cn(
            "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
            selectedCategory === category.id
              ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
              : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
