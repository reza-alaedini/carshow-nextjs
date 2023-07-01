import { useRouter } from "next/router";

// Data
import carsData from "@/data/carsData";

// components(template)
import CarDetails from "@/components/templates/CarDetails";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const selectedCar = carsData[carId - 1];

  return (
    <>
      <CarDetails {...selectedCar} />
    </>
  );
}

export default CarDetail;
