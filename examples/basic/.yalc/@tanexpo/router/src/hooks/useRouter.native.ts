import { useRouter as useExpoRouter } from "expo-router";

export function useRouter() {
  const router = useExpoRouter();

  return {
    push: router.push,
    replace: router.replace,
    back: router.back,
    prefetch: router.prefetch,
    navigate: router.push,
  };
}
