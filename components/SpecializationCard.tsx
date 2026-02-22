import React from 'react'

interface SpecializationCardProps {
  title: string
  description: string
  items: string[]
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({ title, description, items }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-electric-500/20 hover:border-electric-500/50 card-hover electric-border">
      <h3 className="text-2xl font-bold mb-3 text-electric-500">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <svg
              className="w-6 h-6 text-electric-500 flex-shrink-0 mt-0.5"
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
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SpecializationCard
