"use client";
import { useEffect, useState } from "react";

interface DataProps {
  id: number;
  name: string;
  age: number;
}

const useFetchUsersData = (initialData: DataProps[]) => {
  const [data, setData] = useState<DataProps[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        setData(initialData);
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialData]);

  return { data, loading, error };
};

export default useFetchUsersData;
