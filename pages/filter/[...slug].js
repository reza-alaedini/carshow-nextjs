import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import Link from "next/link";

// (template)
import CarsList from "@/components/templates/CarsList";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filteredData = carsData.filter(
    (car) => car.price * 50000 > min && car.price * 50000 < max
  );

  if (!filteredData.length)
    return (
      <div style={{ textAlign: "center", marginTop: "120px" }}>
        <h3>در این بازه قیمت، ماشینی پیدا نشد !</h3>
        <Link href="/cars" style={{ color: "green" }}>
          رفتن به صفحه تمامی ماشین ها
        </Link>
      </div>
    );
  return <CarsList data={filteredData} />;
}

export default FilteredCars;
