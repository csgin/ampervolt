import React from 'react'

interface PricingItemProps {
  title: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

const PricingItem: React.FC<PricingItemProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
}) => {
  return (
    <div
      className={`
        relative bg-dark-card rounded-xl p-6 border 
        ${isPopular 
          ? 'border-electric-500 shadow-electric-lg' 
          : 'border-electric-500/20 hover:border-electric-500/40'
        }
        transition-all duration-300
      `}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-500 text-black text-sm font-bold px-4 py-1 rounded-full">
          Popularne
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="text-3xl font-bold text-electric-500 mb-2">
          {price}
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
            <svg
              className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#kontakt"
        className={`
          block text-center font-bold py-3 px-6 rounded-lg transition-all duration-300
          ${isPopular
            ? 'bg-electric-500 hover:bg-electric-400 text-black'
            : 'border-2 border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-black'
          }
        `}
      >
        Zamów teraz
      </a>
    </div>
  )
}

export default PricingItem
