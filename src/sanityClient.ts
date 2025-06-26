import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'i4h93kld',
    dataset: 'production',
    apiVersion: '2025-06-19',
    useCdn: true
})