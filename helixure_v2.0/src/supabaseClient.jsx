import {createClient} from "@supabase/supabase-js"

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonkey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseURL,supabaseAnonkey);
