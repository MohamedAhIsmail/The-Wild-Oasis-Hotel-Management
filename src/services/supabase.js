import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wbedqfotipczlixysdgy.supabase.co";

//RSL is enabled so you can use the api key here => do not worry
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
