import carsData from "@/data/carsData";

// (templates)
import CarsPage from "@/components/templates/CarsPage";
// (modules)
import Categories from "@/components/modules/Categories";
import SearchBar from "@/components/modules/SearchBar";
import SeeAllButton from "@/components/modules/SeeAllButton";

function Index() {
  const slicedCars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <SeeAllButton />
      <CarsPage data={slicedCars} />
    </div>
  );
}

export default Index;
