import React from 'react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="group bg-gray-900 rounded-lg p-6 card-hover border border-electric-500/20 hover:border-electric-500/50">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-electric-500/10 group-hover:bg-electric-500/20 transition-colors">
        <div className="text-electric-500 group-hover:animate-pulse-glow">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-gray-500">
              <span className="text-electric-500 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard
