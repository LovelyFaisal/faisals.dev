export default function Heading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1 hover:opacity-75 transition-opacity group">
      <h2 className="font-medium text-lg text-[#ededed]">{title}</h2>
      <svg
        width="18"
        height="18"
        className="rotate-180 group-hover:-translate-x-0.5 transition-transform"
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
  );
}
