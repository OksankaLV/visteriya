import { client } from "../sanityClient";
import { urlFor } from "../imageUrl";
import { Bouquet } from "../data/bouquets";

export async function getBouquets(): Promise<Bouquet[]> {
    const query = `*[_type == "bouquet"]{
        _id,
        name,
        description,
        price,
        categories[]->{_id, title},
        image}`

        const data = await client.fetch(query)

        return data.map((b:any)=>({
            ...b,
            imageUrl: b.image ? urlFor(b.image).width(500).url(): ''
        }))
}
export async function getBouquetById(id:string|undefined): Promise<Bouquet[]> {
    const query = `*[_type == "bouquet" && _id == $id]{
        _id,
        name,
        description,
        price,
        categories[]->{_id,title},
        image}`

        return await client.fetch(query, {id})
        

}
