import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { useHomePage } from "@/heroes/hooks/useHomePage";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { use } from "react";

export const HomePage = () => {
  const { page, limit, selectedTab, category, setSearchParams } = useHomePage();
  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();
  const { favoriteCount, favorites } = use(FavoriteHeroContext);

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Superhero Universe"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />

        <CustomBreadcrumbs currentPage="Superheroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  prev.set("category", "all");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  // prev.set("category", "favorites");
                  return prev;
                })
              }
            >
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  prev.set("category", "hero");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  prev.set("category", "villain");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* All characters */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            {/* All favorite characters */}
            <HeroGrid heroes={favorites ?? []} />
          </TabsContent>
          <TabsContent value="heroes">
            {/* All heroes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="villains">
            {/* All villains */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {selectedTab !== "favorites" && (
          <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
        )}
      </>
    </>
  );
};
