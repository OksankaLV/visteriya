import { Category } from "../data/bouquets";
import { client } from "../sanityClient";

export async function getCategories(): Promise<Category[]> {
    const query = `*[_type == "category"]{
        _id,
        title}`

        const data = await client.fetch(query);

        return data;
}