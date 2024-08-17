import { supabase } from './supabaseClient';

export async function loginWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            },
        },
        })
    return { data, error };
}