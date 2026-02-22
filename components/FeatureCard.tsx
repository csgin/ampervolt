import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-dark-card rounded-xl p-6 border border-electric-500/20 hover:border-electric-500/50 card-hover text-center">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-electric-500/10 group-hover:bg-electric-500/20 transition-all duration-300">
        <div className="text-electric-500 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-electric-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
