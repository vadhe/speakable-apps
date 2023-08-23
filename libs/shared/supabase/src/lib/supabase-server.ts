import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { supabaseKey, supabaseUrl } from './supabase-client'

export const supabaseServer = createClientComponentClient({
  supabaseKey: supabaseKey,
  supabaseUrl: supabaseUrl
})

export default supabaseServer;
