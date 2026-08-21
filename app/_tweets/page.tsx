import AnimatedItem from "@/components/animated-item";
import { Tweet } from "@/components/tweet";

const tweets = [
  "2027866444680032260",
  "1654706200838275072",
  "1667758582262120448",
  "1668090775383465984",
  "1994048451026538758",
];
export default function Page() {
  return (
    <div className="container">
      <div className="pt-20 pb-6">
        <div className="flex flex-col gap-2.5">
          <AnimatedItem delay={0}>
            <h1 className="text-4xl font-bold text-white">
              أفكار <span className="text-primary italic">تستحق</span> المشاركة
            </h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-[#94A3B8]">
              استكشف مجموعة من التغريدات التي لفتت انتباهي وألهمتني
            </p>
          </AnimatedItem>
        </div>
      </div>
      <AnimatedItem delay={0.3}>
        <div className="gap-4 mb-6 h-auto responsive-columns">
          {tweets.map((tweet) => {
            return <Tweet key={tweet} id={tweet} />;
          })}
        </div>
      </AnimatedItem>
    </div>
  );
}
