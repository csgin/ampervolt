import { Phone } from 'lucide-react'
import { PHONE_HREF } from '@/lib/site'

const StickyCTA = () => (
  <a
    href={PHONE_HREF}
    className="md:hidden fixed bottom-4 right-4 z-40 flex items-center justify-center w-14 h-14 bg-electric-700 hover:bg-electric-800 text-white rounded-full shadow-lg"
    aria-label="Zadzwoń"
  >
    <Phone className="w-6 h-6" />
  </a>
)

export default StickyCTA
