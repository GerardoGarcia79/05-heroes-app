import { useQuery } from "@tanstack/react-query";
import {
  searchHeroesAction,
  type Options,
} from "../actions/search-heroes.action";

export const useSearchHeroes = ({ name }: Options) => {
  return useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchHeroesAction({ name }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
