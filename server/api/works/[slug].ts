import { createError } from "h3";
import { Database } from "~/types/database";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const params = event.context.params

    // Return empty object if slug is empty
    if (!params) return {};

    const client = serverSupabaseClient<Database>(event);

    const { data, error } = await client.from('works')
        .select('slug, name, description, background, services, work_screenshots (image), work_testimonials (testimony, reviewer, reviewer_role)')
        .eq('slug', params.slug)
        .limit(1)
        .single()

    if (error) {
        throw createError({ statusMessage: error.message })
    }

    return data;
})
