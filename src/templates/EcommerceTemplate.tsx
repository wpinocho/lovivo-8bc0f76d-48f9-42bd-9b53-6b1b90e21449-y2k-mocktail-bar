import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Sparkles } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-y2k-black border-b border-y2k-cyan/20 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-y2k-cyan/10 p-2 rounded-lg y2k-glow">
                <Sparkles className="h-6 w-6 text-y2k-cyan" />
              </div>
              <div>
                <div className="text-y2k-cyan font-black text-xl y2k-text-glow">ZERO PROOF</div>
                <div className="text-y2k-cyan-light text-xs font-semibold">Premium NA Bar</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-y2k-cyan-light hover:text-y2k-cyan transition-colors font-semibold"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="text-y2k-cyan-light hover:text-y2k-cyan transition-colors font-semibold"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-y2k-cyan/10 text-y2k-cyan"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-y2k-cyan text-y2k-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center y2k-glow">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-black text-y2k-cyan y2k-text-glow">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-y2k-black text-y2k-cyan-light py-12 border-t border-y2k-cyan/20 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-y2k-cyan/10 p-2 rounded-lg y2k-glow">
                <Sparkles className="h-6 w-6 text-y2k-cyan" />
              </div>
              <div>
                <div className="text-y2k-cyan font-black text-xl y2k-text-glow">ZERO PROOF</div>
                <div className="text-y2k-cyan-light text-xs font-semibold">Premium NA Bar</div>
              </div>
            </div>
            <p className="text-y2k-cyan-light/70">
              Your trusted source for premium non-alcoholic spirits and mocktails
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-y2k-cyan">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-y2k-cyan-light/70 hover:text-y2k-cyan transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="block text-y2k-cyan-light/70 hover:text-y2k-cyan transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4 text-y2k-cyan">Follow Us</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-y2k-cyan/20 text-center text-y2k-cyan-light/60">
          <p>&copy; 2024 Zero Proof Bar. All rights reserved.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}