import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search for superheroes"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <HeroStats />
      <SearchControls />
    </>
  );
};

export default SearchPage;
