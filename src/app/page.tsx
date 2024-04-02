import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import ListCard from "@/components/ListCard/ListCard";
import Pagination from "@/components/Pagination/Pagination";

export default function Home() {
  return (
    <div>
      <Banner />
      <ListCard
        title="Highly Recommended Roadtrips"
        subTitle="INSPIRATION"
      />
      <div className="mt-8 mb-10 md:mt-16 md:mb-20">
        <Pagination total={1000} />
      </div>
    </div>
  );
}
