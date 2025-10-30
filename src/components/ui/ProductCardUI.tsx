import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"
import { Sparkles } from "lucide-react"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-y2k-black border-y2k-cyan/20 overflow-hidden group hover:y2k-glow transition-all duration-300">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-y2k-black/50 rounded-t-lg overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-y2k-cyan/40">
                    No image
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-y2k-cyan text-y2k-black text-xs px-3 py-1 rounded-full font-bold y2k-glow flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-y2k-cyan-light text-y2k-black text-xs px-3 py-1 rounded-full font-bold">
                      Featured
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-y2k-black/80 text-y2k-cyan-light text-xs px-3 py-1 rounded-full font-bold border border-y2k-cyan/30">
                      Out of stock
                    </span>
                  )}
                </div>
              </div>
            </Link>

            <div className="p-4 y2k-gradient-card">
              <Link to={`/products/${logic.product.slug}`}>
                <h3 className="text-y2k-cyan font-bold text-base mb-2 line-clamp-2 group-hover:y2k-text-glow transition-all">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-y2k-cyan-light/70 text-xs mb-3 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="mb-3 space-y-2">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-xs font-bold text-y2k-cyan/80 mb-1 uppercase tracking-wider">{opt.name}</div>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-6 w-6 rounded-full border-2 ${
                                  isSelected ? 'border-y2k-cyan y2k-glow' : 'border-y2k-cyan/30'
                                } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                                style={{ backgroundColor: swatch }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border rounded px-2 py-1 text-xs font-bold transition-all ${
                                isSelected 
                                  ? 'border-y2k-cyan bg-y2k-cyan text-y2k-black y2k-glow' 
                                  : logic.selected[opt.name] && !isSelected
                                    ? 'border-y2k-cyan/20 bg-transparent text-y2k-cyan-light/40'
                                    : 'border-y2k-cyan/30 bg-transparent text-y2k-cyan-light hover:border-y2k-cyan'
                              }`}
                              aria-pressed={isSelected}
                              aria-label={`${opt.name}: ${val}`}
                              title={`${opt.name}: ${val}`}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-y2k-cyan font-bold text-lg">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-y2k-cyan-light/40 text-xs line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="text-y2k-cyan border-y2k-cyan hover:bg-y2k-cyan hover:text-y2k-black font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  {logic.inStock ? 'Add' : 'Out of stock'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}