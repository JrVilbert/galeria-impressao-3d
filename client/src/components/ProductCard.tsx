import { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  className?: string;
  onViewDetails?: (product: Product) => void;
}

export function ProductCard({ product, className, onViewDetails }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = '5551980176735';
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: *${product.name}*`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl border border-border/50",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleWhatsApp}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
            title="Solicitar orçamento"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
          <button
            onClick={() => onViewDetails?.(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-primary hover:text-white transition-colors"
            title="Ver detalhes"
          >
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <h3 className="mb-2 font-display text-lg font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </div>
      
      {/* Decorative Tech Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
