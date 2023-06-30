// Data
import carsData from "@/data/carsData";

// Components (template)
import CarsPage from "@/components/templates/CarsPage";

function Cars() {
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
}

export default Cars;
