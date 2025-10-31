import { Button } from "@/components/ui/button"
import { ProductCardUI } from "@/components/ProductCardUI"
import { Link } from "react-router-dom"
import { Sparkles, TrendingUp, Gift, Zap } from "lucide-react"
import type { Product, Collection } from "@/lib/supabase"

interface IndexUIProps {
  featuredProducts: Product[]
  collections: Collection[]
  isLoading: boolean
}

export const IndexUI = ({ featuredProducts, collections, isLoading }: IndexUIProps) => {
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-y2k-black">
        <div className="text-y2k-cyan text-xl font-bold animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-y2k-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden y2k-gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-y2k-cyan/10 px-4 py-2 rounded-full border border-y2k-cyan/30">
                <Sparkles className="h-4 w-4 text-y2k-cyan" />
                <span className="text-y2k-cyan text-sm font-bold">Premium NA Bar</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-y2k-cyan y2k-text-glow leading-tight">
                Zero Proof,
                <br />
                <span className="text-y2k-cyan-light">Full Flavor</span>
              </h1>
              
              <p className="text-xl text-y2k-cyan-light/80 leading-relaxed">
                Discover premium non-alcoholic spirits and mocktails that don't compromise on taste. 
                Elevate your drinking experience, minus the hangover.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-y2k-cyan text-y2k-black hover:bg-y2k-cyan-light font-bold text-lg px-8 y2k-glow"
                >
                  Shop Now
                  <Zap className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-y2k-cyan text-y2k-cyan hover:bg-y2k-cyan hover:text-y2k-black font-bold text-lg px-8"
                >
                  View Recipes
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden y2k-glow-strong">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop"
                  alt="Premium Mocktails"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-y2k-cyan text-y2k-black p-6 rounded-xl y2k-glow font-black text-center">
                <div className="text-3xl">100+</div>
                <div className="text-sm">Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-y2k-cyan/10 px-4 py-2 rounded-full border border-y2k-cyan/30 mb-4">
              <TrendingUp className="h-4 w-4 text-y2k-cyan" />
              <span className="text-y2k-cyan text-sm font-bold">Trending Now</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-y2k-cyan y2k-text-glow mb-4">
              vamos a tomar
            </h2>
            <p className="text-y2k-cyan-light/70 text-lg max-w-2xl mx-auto">
              Handpicked selection of our most popular zero-proof spirits
            </p>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCardUI key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-y2k-cyan-light/60">No products available yet</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20 bg-y2k-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-y2k-cyan y2k-text-glow mb-4">
              Signature Recipes
            </h2>
            <p className="text-y2k-cyan-light/70 text-lg">
              Craft bar-quality mocktails at home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Neon Sunset",
                image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=400&fit=crop",
                time: "5 min",
                difficulty: "Easy"
              },
              {
                name: "Cyber Mojito",
                image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=400&fit=crop",
                time: "7 min",
                difficulty: "Medium"
              },
              {
                name: "Electric Spritz",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=400&fit=crop",
                time: "3 min",
                difficulty: "Easy"
              }
            ].map((recipe) => (
              <div key={recipe.name} className="y2k-gradient-card rounded-xl overflow-hidden group hover:y2k-glow transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-y2k-cyan mb-2">{recipe.name}</h3>
                  <div className="flex items-center gap-4 text-y2k-cyan-light/70 text-sm mb-4">
                    <span>⏱️ {recipe.time}</span>
                    <span>📊 {recipe.difficulty}</span>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-y2k-cyan text-y2k-cyan hover:bg-y2k-cyan hover:text-y2k-black font-bold"
                  >
                    View Recipe
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starter Bundles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-y2k-cyan/10 px-4 py-2 rounded-full border border-y2k-cyan/30 mb-4">
              <Gift className="h-4 w-4 text-y2k-cyan" />
              <span className="text-y2k-cyan text-sm font-bold">Best Value</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-y2k-cyan y2k-text-glow mb-4">
              Starter Bundles
            </h2>
            <p className="text-y2k-cyan-light/70 text-lg">
              Everything you need to start your zero-proof journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="y2k-gradient-card rounded-2xl p-8 y2k-glow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black text-y2k-cyan mb-2">Mixology Starter</h3>
                  <p className="text-y2k-cyan-light/70">3 spirits + recipe book</p>
                </div>
                <div className="text-right">
                  <div className="text-y2k-cyan-light/40 line-through text-sm">$89</div>
                  <div className="text-3xl font-black text-y2k-cyan">$69</div>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {["Zero-proof Gin", "NA Whiskey", "Botanical Aperitif", "50+ Recipe Book"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-y2k-cyan-light">
                    <Sparkles className="h-4 w-4 text-y2k-cyan flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-y2k-cyan text-y2k-black hover:bg-y2k-cyan-light font-bold text-lg y2k-glow">
                Add to Cart
              </Button>
            </div>

            <div className="y2k-gradient-card rounded-2xl p-8 y2k-glow-strong border-2 border-y2k-cyan">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-y2k-cyan text-y2k-black px-6 py-2 rounded-full font-black text-sm">
                MOST POPULAR
              </div>
              <div className="flex items-start justify-between mb-6 mt-4">
                <div>
                  <h3 className="text-3xl font-black text-y2k-cyan mb-2">Complete Bar Set</h3>
                  <p className="text-y2k-cyan-light/70">6 spirits + premium tools</p>
                </div>
                <div className="text-right">
                  <div className="text-y2k-cyan-light/40 line-through text-sm">$179</div>
                  <div className="text-3xl font-black text-y2k-cyan">$129</div>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "6 Premium Spirits",
                  "Professional Shaker Set",
                  "Glassware Collection",
                  "100+ Recipe Book",
                  "Free Shipping"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-y2k-cyan-light">
                    <Sparkles className="h-4 w-4 text-y2k-cyan flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-y2k-cyan text-y2k-black hover:bg-y2k-cyan-light font-bold text-lg y2k-glow">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 y2k-gradient-hero opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sparkles className="h-16 w-16 text-y2k-cyan mx-auto mb-6 y2k-text-glow" />
          <h2 className="text-4xl md:text-6xl font-black text-y2k-cyan y2k-text-glow mb-6">
            Discover Your Flavor
          </h2>
          <p className="text-xl text-y2k-cyan-light/80 mb-8 max-w-2xl mx-auto">
            Join thousands who've upgraded their drinking experience. 
            Premium taste, zero compromise.
          </p>
          <Button 
            size="lg"
            className="bg-y2k-cyan text-y2k-black hover:bg-y2k-cyan-light font-bold text-xl px-12 py-6 y2k-glow-strong"
          >
            Start Shopping
            <Zap className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>
  )
}