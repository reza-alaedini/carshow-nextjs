// Data
import carsData from "@/data/carsData";

// Components 
// (templates)
import CarsPage from "@/components/templates/CarsPage";
// (modules)
import Categories from "@/components/modules/Categories";

function Cars() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Cars;
