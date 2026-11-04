import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  slug: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, slug }) => (
  <Link
    href={`/uslugi/${slug}`}
    className="group block h-full bg-white shadow-sm rounded-xl border border-slate-200 hover:border-electric-600 p-6 transition-colors"
  >
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
    <span className="inline-flex items-center gap-2 text-electric-700 font-medium">
      Szczegóły
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </span>
  </Link>
)

export default ServiceCard
