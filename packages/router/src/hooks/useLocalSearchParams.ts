import { useParams, useSearch } from '@tanstack/react-router';
import type { LocalSearchParams } from '../types';

/**
 * Expo-compatible useLocalSearchParams for web.
 *
 * Combines:
 * - path params from useParams()
 * - query params from useSearch()
 */
export function useLocalSearchParams<
  T extends LocalSearchParams = LocalSearchParams
>(): T {
  const params = useParams({ strict: false }) as Record<
    string,
    string | string[] | undefined
  >;

  const search = useSearch({ strict: false }) as Record<
    string,
    string | string[] | undefined
  >;

  return {
    ...params,
    ...search,
  } as T;
}