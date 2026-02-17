import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Search for superheroes"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <HeroStats />
    </>
  );
};

export default SearchPage;
