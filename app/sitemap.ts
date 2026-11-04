import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/uslugi`, priority: 0.9 },
    ...services.map((service) => ({
      url: `${SITE_URL}/uslugi/${service.slug}`,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/kontakt`, priority: 0.7 },
  ]
}
