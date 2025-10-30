import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, Sparkles } from 'lucide-react'

interface Bundle {
  title: string
  description: string
  image: string
  price: number
  originalPrice: number
  items: number
}

interface BundleCardProps {
  bundle: Bundle
}

export const BundleCard = ({ bundle }: BundleCardProps) => {
  const savings = bundle.originalPrice - bundle.price
  const savingsPercent = Math.round((savings / bundle.originalPrice) * 100)

  return (
    <Card className="bg-y2k-black border-y2k-cyan/30 overflow-hidden group hover:y2k-glow-strong transition-all duration-300 relative">
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-y2k-cyan text-y2k-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 y2k-glow">
          <Sparkles className="h-3 w-3" />
          SAVE {savingsPercent}%
        </div>
      </div>
      
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={bundle.image} 
            alt={bundle.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-y2k-black via-y2k-black/50 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-y2k-cyan-light mb-2">
              <Package className="h-4 w-4" />
              <span className="text-sm font-semibold">{bundle.items} Items Included</span>
            </div>
          </div>
        </div>
        
        <div className="p-5 y2k-gradient-card">
          <h3 className="text-y2k-cyan font-bold text-xl mb-2 y2k-text-glow">
            {bundle.title}
          </h3>
          
          <p className="text-y2k-cyan-light/80 text-sm mb-4 line-clamp-2">
            {bundle.description}
          </p>
          
          <div className="flex items-end justify-between mb-4">
            <div>
              <div className="text-y2k-cyan font-bold text-2xl">
                ${bundle.price.toFixed(2)}
              </div>
              <div className="text-y2k-cyan-light/50 text-sm line-through">
                ${bundle.originalPrice.toFixed(2)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-y2k-cyan text-sm font-semibold">
                You save
              </div>
              <div className="text-y2k-cyan-light font-bold">
                ${savings.toFixed(2)}
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full bg-y2k-cyan hover:bg-y2k-cyan/90 text-y2k-black font-bold y2k-glow"
          >
            Add Bundle to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}