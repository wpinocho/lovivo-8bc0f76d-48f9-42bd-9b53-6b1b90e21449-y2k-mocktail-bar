import { Card, CardContent } from '@/components/ui/card'
import { Clock, Users } from 'lucide-react'

interface Recipe {
  title: string
  image: string
  time: string
  servings: number
  ingredients: string[]
}

interface RecipeCardProps {
  recipe: Recipe
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card className="bg-y2k-black border-y2k-cyan/20 overflow-hidden group hover:y2k-glow transition-all duration-300">
      <CardContent className="p-0">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-y2k-black via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="p-5">
          <h3 className="text-y2k-cyan font-bold text-xl mb-3 y2k-text-glow">
            {recipe.title}
          </h3>
          
          <div className="flex items-center gap-4 mb-4 text-y2k-cyan-light text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-y2k-cyan-light/70 text-xs font-semibold uppercase tracking-wider mb-2">
              Key Ingredients:
            </p>
            {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
              <p key={idx} className="text-y2k-cyan-light/90 text-sm">
                • {ingredient}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}