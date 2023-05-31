import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePLatforms = () =>
  useQuery({
    queryKey: ["Platform"],
    queryFn: apiClient.getAll,
    initialData: { count: platforms.length, results: platforms },
  });
export default usePLatforms;
