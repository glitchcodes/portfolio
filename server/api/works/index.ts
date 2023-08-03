import { createError } from "h3";
import { Database } from "~/types/database";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient<Database>(event);

    const { data, error } = await client.from('works')
        .select('slug, name, background')
        .eq('is_hidden', false)
        .order('id')

    if (error) {
        throw createError({ statusMessage: error.message })
    }

    return data;
})
