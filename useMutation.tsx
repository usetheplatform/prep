import { useCallback, useState } from "react";

type MutationParams<T> = {
  mutationFn: () => Promise<T>;
};

export function useMutation<T>(params: MutationParams<T>) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<Error | null>(null);

  const mutate = useCallback(async () => {
    setStatus("loading");
    try {
      await params.mutationFn();
      setStatus("success");
    } catch (err) {
      setError(err as Error);
      setStatus("error");
    }
  }, [params.mutationFn]);

  return { mutate, status, error };
}
