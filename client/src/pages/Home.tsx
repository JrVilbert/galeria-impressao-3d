import { CategoryFilter } from "@/components/CategoryFilter";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { Category, Product, products } from "@/data/products";
import { ArrowDown, Sparkles, Printer } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>O Futuro da Manufatura</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1]">
              Materialize <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Suas Ideias
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore nossa galeria exclusiva de impressões 3D. De brinquedos articulados a decoração de alto padrão, descubra o que a tecnologia pode criar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#gallery" 
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:translate-y-[-2px]"
              >
                Ver Catálogo
                <ArrowDown className="h-4 w-4" />
              </a>
              <button className="h-12 px-8 rounded-full border border-border bg-background/50 backdrop-blur-sm font-medium hover:bg-secondary transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>

          <div className="relative lg:h-[600px] w-full flex items-center justify-center">
            {/* Abstract 3D shapes or Hero Image */}
            <div className="relative w-full aspect-square max-w-md lg:max-w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <img 
                src="/images/products/hero-banner.jpg" 
                alt="Impressão 3D em destaque" 
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-700"
              />
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Precisão</p>
                    <p className="font-bold">0.4mm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-secondary/30 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Nossa Coleção</h2>
            <p className="text-muted-foreground">
              Navegue por nossas categorias e encontre a inspiração perfeita para seu próximo projeto ou presente.
            </p>
          </div>

          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Alta Qualidade</h3>
              <p className="text-muted-foreground">
                Utilizamos as melhores impressoras e filamentos do mercado para garantir acabamento premium.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                <Printer className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Personalização</h3>
              <p className="text-muted-foreground">
                Cada peça pode ser adaptada em tamanho, cor e material para atender sua necessidade.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                <ArrowDown className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Variedade</h3>
              <p className="text-muted-foreground">
                Do PLA biodegradável ao PETG resistente, temos o material certo para cada aplicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Layout>
  );
}
