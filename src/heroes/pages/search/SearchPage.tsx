import { useSearchParams } from "react-router";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useSearchHeroes } from "@/heroes/hooks/useSearchHeroes";
import { SearchControls } from "./ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? "";
  const strength = searchParams.get("strength") ?? "";
  const { data: searchHeroesData } = useSearchHeroes({ name, strength });

  return (
    <>
      <CustomJumbotron
        title="Search for characters"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <CustomBreadcrumbs
        currentPage="Search for characters"
        // breadcrumbs={[
        //   { label: "Home", to: "/" },
        //   { label: "Home2", to: "/" },
        //   { label: "Home3", to: "/" },
        // ]}
      />
      <HeroStats />
      <SearchControls />
      <HeroGrid heroes={searchHeroesData} />
    </>
  );
};

export default SearchPage;
