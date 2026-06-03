"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const FALLBACK_PKR_PER_USD = 278.92;

export type FxSnapshot = {
  pkrPerUsd: number;
  lastUpdateUtc: string | null;
  usedFallback: boolean;
};

export function useExchangeRate() {
  const [fx, setFx] = useState<FxSnapshot | null>(null);
  const [rateLoading, setRateLoading] = useState(true);
  const [panelBusy, setPanelBusy] = useState(false);
  const initialFetch = useRef(true);

  const loadRate = useCallback((opts?: { isRefresh?: boolean }) => {
    const isRefresh = opts?.isRefresh ?? false;
    if (isRefresh) setPanelBusy(true);
    else if (initialFetch.current) setRateLoading(true);

    fetch("/api/exchange-rate")
      .then((r) => r.json())
      .then(
        (j: {
          ok?: boolean;
          pkrPerUsd?: number;
          lastUpdateUtc?: string | null;
        }) => {
          if (j.ok && typeof j.pkrPerUsd === "number" && Number.isFinite(j.pkrPerUsd)) {
            setFx({
              pkrPerUsd: j.pkrPerUsd,
              lastUpdateUtc: typeof j.lastUpdateUtc === "string" ? j.lastUpdateUtc : null,
              usedFallback: false,
            });
          } else {
            setFx({
              pkrPerUsd: FALLBACK_PKR_PER_USD,
              lastUpdateUtc: null,
              usedFallback: true,
            });
          }
        },
      )
      .catch(() => {
        setFx({
          pkrPerUsd: FALLBACK_PKR_PER_USD,
          lastUpdateUtc: null,
          usedFallback: true,
        });
      })
      .finally(() => {
        if (isRefresh) setPanelBusy(false);
        else if (initialFetch.current) {
          setRateLoading(false);
          initialFetch.current = false;
        }
      });
  }, []);

  useEffect(() => {
    loadRate();
  }, [loadRate]);

  return { fx, rateLoading, panelBusy, loadRate };
}
