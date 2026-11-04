import Link from 'next/link'

interface PricingItemProps {
  title: string
  price: string
  description: string
}

const PricingItem: React.FC<PricingItemProps> = ({ title, price, description }) => (
  <div className="bg-white shadow-sm rounded-xl border border-slate-200 p-6">
    <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
    <p className="text-slate-600 text-sm mb-4">{description}</p>
    <div className="text-2xl font-bold text-electric-700 mb-4">{price}</div>
    <Link href="/kontakt" className="text-electric-700 hover:text-electric-800 font-medium">
      Zapytaj o wycenę
    </Link>
  </div>
)

export default PricingItem
