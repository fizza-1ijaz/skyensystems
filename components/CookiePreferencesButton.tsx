"use client";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="mt-3 inline-flex rounded-lg border border-[#3150bf] px-4 py-2 text-sm font-semibold text-[#3150bf] transition-colors hover:bg-[#EFF8F8]"
    >
      Manage cookie preferences
    </button>
  );
}
