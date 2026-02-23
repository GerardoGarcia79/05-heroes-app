import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
