import AnimatedItem from "./animatedItem";
import ContactButtons from "./contactButtons";

export default function Hero() {
  return (
    <section className="pt-[100px] pb-16 flex flex-col gap-8" dir="rtl">
      <div className="text-[28px] leading-9 max-w-2/5">
        <AnimatedItem delay={0}>
          <h1>
            الخبير في هندسة وبناء البنية التحتية الخلفية المؤمنة والموثوقة.
          </h1>
        </AnimatedItem>
      </div>
      <ContactButtons />
    </section>
  );
}
