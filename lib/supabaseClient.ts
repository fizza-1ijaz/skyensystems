import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function readSupabaseEnv() {
  const url =
    process.env.SUPABASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
    "";
  const anonKey =
    process.env.SUPABASE_ANON_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    "";
  const looksLikeJwt =
    anonKey.split(".").length === 3 && anonKey.startsWith("eyJ");

  return { url, anonKey, looksLikeJwt };
}

let cachedClient: SupabaseClient | null | undefined;

/**
 * Lazily creates the Supabase client using runtime env vars.
 * Prefer SUPABASE_URL + SUPABASE_ANON_KEY in production so deploy builds
 * without CMS secrets still fetch blogs at request time.
 */
export function getSupabase(): SupabaseClient | null {
  if (cachedClient !== undefined) return cachedClient;

  const { url, anonKey, looksLikeJwt } = readSupabaseEnv();
  cachedClient =
    url && anonKey && looksLikeJwt
      ? createClient(url, anonKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        })
      : null;

  return cachedClient;
}

export function isSupabaseConfigured(): boolean {
  return getSupabase() !== null;
}
