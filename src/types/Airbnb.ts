export interface AirbnbApi{
    accommodation: Accommodation[] // Acomodação é uma lista
    icons: Photo[] // Também é uma lista de fotos
}

export interface Accommodation {
    id: string
    title: string
    date: string
    testimonials: Testimonials []
    hasBadge: boolean
    host: string
    slug: string
    location: string
    price: number
    rating: number
    photos: Photo []
}

export interface Testimonials {
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number
    createdAt: number
    stayedAt: number
}

export interface Photo { // Através da chamada de icons, ele puxa as fotos e respeita o formato dos dados inseridos
    id: string
    source: string
    description: string
    url: string
}

export interface Location {
    description: string
    city: string
    state: string

}