import { createClient } from '@/utils/supabase/server';

const supabase = await createClient();
const { data: posts } = await supabase.from("posts").select();
//const newPost = await supabase.from("posts").insert({ id: 1, caption: "test", description: "test"})

export default async function newPost(id: Int8Array, caption: string, description: string) {
    const newPost = await supabase.from("posts").insert({ id: id, caption: caption, description: description})

}

//{JSON.stringify(posts, null, 2)}