import { createError } from "h3";
import { serverSupabaseClient } from "#supabase/server";
import type { Database } from "~/types/database";

export default defineEventHandler(async (event) => {
    const params = event.context.params

    // Return empty object if slug is empty
    if (!params) return {};

    const client = await serverSupabaseClient<Database>(event);

    const { data, error } = await client.from('works')
        .select('slug, name, description, background, services, example_title, example_link, work_screenshots (image), work_testimonials (testimony, reviewer, reviewer_role), work_metadata (name, type, content)')
        .eq('slug', params.slug)
        .limit(1)
        .single()

    if (error) {
        throw createError({ statusMessage: error.message })
    }

    return data;
})
