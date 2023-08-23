import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = process.env['NEXT_PUBLIC_API_SUPABASE_URL'] || '';
export const supabaseKey = process.env['NEXT_PUBLIC_API_SUPABASE_KEY'] || '';

export const supabaseClient = createClient(supabaseUrl, supabaseKey);
export default supabaseClient;
