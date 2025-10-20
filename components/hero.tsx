import ContactButtons from "./contactButtons";

export default function Hero() {
  return (
    <section className="pt-[100px] pb-16 flex flex-col gap-8" dir="rtl">
      <div className="text-[28px] leading-9 max-w-2/5">
        <h1>
          الخبير العالمي في بناء وتوسعة المشاريع الاستشاريّة وبيع الخبرات.
        </h1>
      </div>
      <ContactButtons />
      {/* <motion.div whileHover="hover" className="flex gap-4">
        <motion.div
          variants={{ hover: { x: `calc(-100% - 16px)` } }}
          className="box bg-red-500"
          transition={{
            type: "spring",
            stiffness: 2000,
            damping: 200,
            bounce: 0,
          }}
        ></motion.div>
        <motion.div
          variants={{ hover: { x: `calc(100% + 16px)` } }}
          className="box bg-blue-500"
          transition={{
            type: "spring",
            stiffness: 2000,
            damping: 200,
            bounce: 0,
          }}
        ></motion.div>
      </motion.div>

      <button
        className="bg-gray-500 w-fit p-2 rounded cursor-pointer"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        swap
      </button> */}
    </section>
  );
}
