import { ReactNode } from "react";
import { Link } from "wouter";
import { Printer, Instagram, Mail } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Printer className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Jutah<span className="text-primary">3D</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#gallery" className="hover:text-primary transition-colors">Galeria</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://instagram.com/jutah3d" target="_blank" rel="noopener noreferrer" className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:bg-secondary hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-secondary/30 py-12 mt-20">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
                <Printer className="h-3 w-3" />
              </div>
              <span className="font-display text-lg font-bold">Jutah3D</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transformando ideias digitais em realidade física. Impressões 3D de alta qualidade com precisão Bambu Lab.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Infantil</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Letreiros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chaveiros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quadros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vasos</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="font-display font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>jutah3d@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <span>@jutah3d</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/40 text-center text-xs text-muted-foreground">
          © 2025 Jutah 3D. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
