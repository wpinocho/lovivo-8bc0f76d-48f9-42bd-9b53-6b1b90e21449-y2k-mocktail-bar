import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { RecipeCard } from '@/components/RecipeCard';
import { BundleCard } from '@/components/BundleCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Sparkles, Droplets, Heart, Zap } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

const recipes = [
  {
    title: "Neon Negroni",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=450&fit=crop",
    time: "5 min",
    servings: 1,
    ingredients: ["Ritual Gin Alternative", "Ghia Aperitif", "Sweet Vermouth NA", "Orange Peel"]
  },
  {
    title: "Cyber Spritz",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=450&fit=crop",
    time: "3 min",
    servings: 1,
    ingredients: ["Seedlip Garden", "Prosecco NA", "Soda Water", "Fresh Herbs"]
  },
  {
    title: "Digital Daiquiri",
    image: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?w=600&h=450&fit=crop",
    time: "4 min",
    servings: 1,
    ingredients: ["Monday Gin", "Fresh Lime", "Simple Syrup", "Mint Leaves"]
  }
];

const bundles = [
  {
    title: "Starter Kit",
    description: "Everything you need to begin your zero-proof journey. Perfect for mocktail beginners.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop",
    price: 89.99,
    originalPrice: 119.97,
    items: 3
  },
  {
    title: "Mixologist Bundle",
    description: "Premium spirits collection for crafting sophisticated zero-proof cocktails at home.",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=600&fit=crop",
    price: 149.99,
    originalPrice: 199.96,
    items: 5
  },
  {
    title: "Party Pack",
    description: "Ready-to-serve mocktails for your next gathering. Impress your guests with zero alcohol.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=600&fit=crop",
    price: 119.99,
    originalPrice: 159.96,
    items: 4
  }
];

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - Y2K Mocktails */}
      <section className="relative y2k-gradient-hero py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10 relative">
              <div className="inline-flex items-center gap-2 bg-y2k-cyan/10 border border-y2k-cyan/30 rounded-full px-4 py-2 y2k-glow">
                <Sparkles className="h-4 w-4 text-y2k-cyan animate-glow-pulse" />
                <span className="text-y2k-cyan text-sm font-bold uppercase tracking-wider">
                  Zero Proof • Full Flavor
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-y2k-cyan y2k-text-glow leading-tight">
                Sip the
                <br />
                <span className="text-y2k-cyan-light">Future</span>
              </h1>
              
              <p className="text-xl text-y2k-cyan-light/90 leading-relaxed max-w-lg">
                Premium non-alcoholic spirits and mocktails for the conscious drinker. 
                All the vibe, none of the hangover.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-y2k-cyan hover:bg-y2k-cyan/90 text-y2k-black font-bold text-lg px-8 y2k-glow-strong"
                >
                  <Droplets className="mr-2 h-5 w-5" />
                  Discover Flavors
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-y2k-cyan text-y2k-cyan hover:bg-y2k-cyan/10 font-bold text-lg px-8"
                >
                  View Bundles
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-y2k-cyan y2k-text-glow">50+</div>
                  <div className="text-sm text-y2k-cyan-light/70">NA Spirits</div>
                </div>
                <div className="h-12 w-px bg-y2k-cyan/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-y2k-cyan y2k-text-glow">100+</div>
                  <div className="text-sm text-y2k-cyan-light/70">Recipes</div>
                </div>
                <div className="h-12 w-px bg-y2k-cyan/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-y2k-cyan y2k-text-glow">0%</div>
                  <div className="text-sm text-y2k-cyan-light/70">Alcohol</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop" 
                  alt="Premium Mocktail"
                  className="rounded-2xl y2k-border-glow animate-glow-pulse"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-y2k-cyan/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-y2k-cyan-light/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-y2k-black border-y border-y2k-cyan/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-y2k-cyan/10 p-3 rounded-lg y2k-glow">
                <Droplets className="h-6 w-6 text-y2k-cyan" />
              </div>
              <div>
                <div className="text-y2k-cyan font-bold">0% Alcohol</div>
                <div className="text-y2k-cyan-light/60 text-sm">100% Taste</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-y2k-cyan/10 p-3 rounded-lg y2k-glow">
                <Heart className="h-6 w-6 text-y2k-cyan" />
              </div>
              <div>
                <div className="text-y2k-cyan font-bold">Premium</div>
                <div className="text-y2k-cyan-light/60 text-sm">Ingredients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-y2k-cyan/10 p-3 rounded-lg y2k-glow">
                <Zap className="h-6 w-6 text-y2k-cyan" />
              </div>
              <div>
                <div className="text-y2k-cyan font-bold">Fast</div>
                <div className="text-y2k-cyan-light/60 text-sm">Shipping</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-y2k-cyan/10 p-3 rounded-lg y2k-glow">
                <Sparkles className="h-6 w-6 text-y2k-cyan" />
              </div>
              <div>
                <div className="text-y2k-cyan font-bold">Curated</div>
                <div className="text-y2k-cyan-light/60 text-sm">Selection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NA Spirits Grid */}
      <section className="py-16 bg-y2k-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-y2k-cyan mb-4 y2k-text-glow">
              Non-Alcoholic Spirits
            </h2>
            <p className="text-y2k-cyan-light/80 text-lg max-w-2xl mx-auto">
              Premium zero-proof alternatives crafted for the modern mixologist
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="y2k-gradient-card rounded-lg h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-y2k-cyan-light/60">
                No products available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gradient-to-b from-y2k-black to-y2k-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-y2k-cyan mb-4 y2k-text-glow">
              Signature Recipes
            </h2>
            <p className="text-y2k-cyan-light/80 text-lg max-w-2xl mx-auto">
              Craft bar-quality mocktails at home with our expert recipes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe, idx) => (
              <RecipeCard key={idx} recipe={recipe} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              variant="outline"
              size="lg"
              className="border-y2k-cyan text-y2k-cyan hover:bg-y2k-cyan/10 font-bold"
            >
              View All Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* Starter Bundles */}
      <section className="py-16 bg-y2k-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-y2k-cyan/10 border border-y2k-cyan/30 rounded-full px-4 py-2 mb-4 y2k-glow">
              <Sparkles className="h-4 w-4 text-y2k-cyan animate-glow-pulse" />
              <span className="text-y2k-cyan text-sm font-bold uppercase tracking-wider">
                Best Value
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-y2k-cyan mb-4 y2k-text-glow">
              Starter Bundles
            </h2>
            <p className="text-y2k-cyan-light/80 text-lg max-w-2xl mx-auto">
              Curated collections to kickstart your zero-proof journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundles.map((bundle, idx) => (
              <BundleCard key={idx} bundle={bundle} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 y2k-gradient-hero" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-y2k-cyan mb-6 y2k-text-glow">
            Ready to Discover
            <br />
            <span className="text-y2k-cyan-light">New Flavors?</span>
          </h2>
          <p className="text-xl text-y2k-cyan-light/90 mb-8 max-w-2xl mx-auto">
            Join thousands of conscious drinkers enjoying premium zero-proof cocktails
          </p>
          <Button 
            size="lg"
            className="bg-y2k-cyan hover:bg-y2k-cyan/90 text-y2k-black font-bold text-xl px-12 py-6 y2k-glow-strong"
          >
            <Droplets className="mr-2 h-6 w-6" />
            Discover Flavors
          </Button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};