import React from 'react'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
  service: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  text,
  service,
}) => {
  return (
    <div className="bg-dark-card rounded-xl p-6 border border-electric-500/20 hover:border-electric-500/40 transition-all duration-300">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'text-electric-500 fill-electric-500'
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300 mb-4 italic">
        "{text}"
      </p>
      <div className="flex items-center justify-between border-t border-gray-800 pt-4">
        <div>
          <p className="text-white font-bold">{name}</p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
        <div className="text-electric-500 text-sm font-medium">
          {service}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
