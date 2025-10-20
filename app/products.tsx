import ProductCard from "./productCard";
export default function Products() {
  return (
    <div className="flex flex-col gap-6 py-10">
      <div className="flex items-center gap-1">
        <h2 className="font-medium text-lg text-[#ededed]">Products</h2>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 9L14.25 9M14.25 9L9 3.75M14.25 9L9 14.25"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
      <div className="flex gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
