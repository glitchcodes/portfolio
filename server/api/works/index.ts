import { createError } from "h3";
import { serverSupabaseClient } from "#supabase/server";
import type { Database } from "~/types/database";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient<Database>(event);

    const { data, error } = await client.from('works')
        .select('slug, name, background, created_at')
        .eq('is_hidden', false)
        .order('created_at', { ascending: false });

    if (error) {
        throw createError({ statusMessage: error.message })
    }

    return data;
})
