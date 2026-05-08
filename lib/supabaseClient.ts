import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const looksLikeJwt =
  typeof supabaseAnonKey === "string" &&
  supabaseAnonKey.split(".").length === 3 &&
  supabaseAnonKey.startsWith("eyJ");

export const supabase =
  supabaseUrl && supabaseAnonKey && looksLikeJwt
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;
