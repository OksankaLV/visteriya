import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanityClient'

const builder = imageUrlBuilder(client)

import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export function urlFor(source: SanityImageSource){
    return builder.image(source)
}