import { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import { useState } from "react";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]?.value || '');

  const images = product.images || [product.image];
  const currentImage = images[selectedImageIndex];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleWhatsApp = () => {
    const phoneNumber = '5551980176735'; // Altere para seu número
    const selectedSizeLabel = product.sizes?.find(s => s.value === selectedSize)?.label || '';
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: *${product.name}*${selectedSizeLabel ? ` (${selectedSizeLabel})` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card shadow-2xl border border-border/50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary/30 border border-border/50">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={cn(
                      "h-16 w-16 rounded-lg overflow-hidden border-2 transition-all",
                      selectedImageIndex === idx
                        ? "border-primary"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider mb-3">
                {product.category}
              </span>
              <h2 className="text-3xl font-display font-bold mb-2">{product.name}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-sm font-medium mb-3">Tamanho / Variação</label>
                <div className="grid grid-cols-2 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size.value)}
                      className={cn(
                        "p-3 rounded-lg border-2 transition-all text-sm font-medium",
                        selectedSize === size.value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background hover:border-primary/50"
                      )}
                    >
                      <div className="font-semibold">{size.label}</div>
                      {size.description && (
                        <div className="text-xs text-muted-foreground">{size.description}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            <div className="bg-secondary/30 rounded-lg p-4 border border-border/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">Precisão</p>
                  <p className="font-semibold text-primary">0.4mm</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">Máquina</p>
                  <p className="font-semibold">Bambu Lab</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full h-12 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/25"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Orçamento via WhatsApp
            </button>

            <button
              onClick={onClose}
              className="w-full h-12 rounded-lg border border-border bg-background hover:bg-secondary transition-colors font-semibold"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
