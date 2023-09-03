import { createClient } from '@supabase/supabase-js';
import { Database } from '../lib/types/supabase'

export const supabaseUrl = process.env['NEXT_PUBLIC_API_SUPABASE_URL'] || '';
export const supabaseKey = process.env['NEXT_PUBLIC_API_SUPABASE_KEY'] || '';

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
export default supabaseClient;
