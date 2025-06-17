import { useEffect, useState } from "react";

type QueryParams<T> = {
  queryFn: () => Promise<T>;
};

type QueryState<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  isError: boolean;
};

export function useQuery<T>(params: QueryParams<T>) {
  const [state, setState] = useState<QueryState<T>>({
    data: null,
    isLoading: true,
    error: null,
    isError: false,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const data = await params.queryFn();
        if (isMounted) {
          setState({ data, isLoading: false, error: null, isError: false });
        }
      } catch (error) {
        if (isMounted) {
          setState({ data: null, isLoading: false, error, isError: true });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [params.queryFn]);

  return state;
}

// Example

export function useExampleQuery() {
  const { data, isLoading, error, isError } = useQuery({
    queryFn: async () => {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
  });

  return { data, isLoading, error, isError };
}

// Example Usage

export function ExampleComponent() {
  const { data, isLoading, error, isError } = useExampleQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Example Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
