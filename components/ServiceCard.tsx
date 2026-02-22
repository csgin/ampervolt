import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  slug: string
  image?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  slug,
  image,
}) => {
  return (
    <div className="group bg-dark-card rounded-xl overflow-hidden border border-electric-500/20 hover:border-electric-500/50 card-hover">
      {/* Image placeholder or actual image */}
      <div className="relative h-48 bg-gradient-to-br from-electric-500/20 to-transparent overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-electric-500 opacity-20 group-hover:opacity-30 transition-opacity">
              {icon}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-electric-500">{icon}</div>
          <h3 className="text-xl font-bold text-white group-hover:text-electric-500 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-gray-400 mb-4">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-500">
              <span className="text-electric-500 mt-0.5 flex-shrink-0">✓</span>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/uslugi/${slug}`}
          className="inline-flex items-center gap-2 text-electric-500 hover:text-electric-400 font-medium transition-colors group/link"
        >
          <span>Sprawdź szczegóły</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
