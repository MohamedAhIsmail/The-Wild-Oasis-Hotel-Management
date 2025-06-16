import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wbedqfotipczlixysdgy.supabase.co";

//RSL is enabled so you can use the api key here => do not worry
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZWRxZm90aXBjemxpeHlzZGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNDEyMTIsImV4cCI6MjA2NTYxNzIxMn0.q30v8jq0d42UD7qXuZ29IKDKVYVYS29xE_Ec7Md3BA4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
