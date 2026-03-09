import { useQuery } from "@tanstack/react-query";
import {
  searchHeroesAction,
  type Options,
} from "../actions/search-heroes.action";

export const useSearchHeroes = ({ name, strength }: Options) => {
  return useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
