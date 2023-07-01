import { useRouter } from "next/router";
import carsData from "@/data/carsData";

// (template)
import CarsList from "@/components/templates/CarsList";

function CatPage() {
  const router = useRouter();
  const { carCatId } = router.query;
  console.log(carCatId);

  const selectedCat = carsData.filter((car) => car.category === carCatId);

  return (
    <div>
      <CarsList data={selectedCat} />
    </div>
  );
}

export default CatPage;
