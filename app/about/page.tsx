"use client";
import AnimatedItem from "@/components/animatedItem";
import Link from "next/link";
export default function Page() {
  return (
    <div className="container theme-dark">
      <AnimatedItem delay={0}>
        <div
          className="prose
    prose-h1:text-3xl
    prose-h1:font-normal
    prose-h2:text-[32px]
    max-w-none
    prose-h2:text-white
    prose-a:text-primary
    prose-h2:mb-4
    prose-p:text-slate-300
    prose-p:m-0
    prose-p:text-lg
    prose-li:text-slate-300
    prose-ul:pl-0
    pb-5
    dark:prose-invert
    "
        >
          <div>
            <h2>فيصل الحربي</h2>
            <p>
              بدأت رحتلي وعمري 12 وأنا أطقطق على كود Lua عشان أبني سيرفري الخاص
              في قراند
            </p>
            <p>كنت أبي أشوف خيالي يتحول لواقع قدامي، وهناك تعلمت أول درس:</p>
            <p>"العلم يجي بالممارسة، والخطأ هو أكبر معلم."</p>
            <p>
              ثم مررت مع لغة VB.NET اللي علمتني كيف أحوّل الفكرة لبرنامج ملموس
              وصولاً لليوم متخصص في هندسة البرمجيات
            </p>
            <p className="py-4">
              أؤمن تماماً إن المعرفة حق مشاع لكل إنسان، مو حكر على أحد. عشان كذا
              فتحت قناتي على اليوتيوب أقدم محتوى حقيقي و أصيل يلهم العرب يتعلمون
              البرمجه
            </p>
            <p>بعض المشاريع التي عملت عليها:</p>
            <ul>
              <li>
                <p>
                  عملت على اول مشروع كبير في 2023 وهو ثيم على منصة سلة صممته ثم
                  برمجته بنفسي واستغرق مني 3 أشهر لانهائه وهو أكبر مشروع عملت
                  عليه ويستخدم الثيم 50 تاجر على منصة سلة الى اليوم.
                </p>
              </li>
              <li>
                <p>
                  برمجت موقعي الحالي ونشرته مفتوح المصدر كقالب يستطيع المبرمجون
                  يستخدمونه وهو أول قالب موقع شخصي مفتوح المصدر بمميزات عديدة
                  مبني على Next.js باللغة العربية
                </p>
              </li>
              <li>
                <p>
                  صممت ونفذت نظاماً متكاملاً لإدارة الهياكل الشجرية (Tree
                  Structures) باستخدام Spring Boot حيث هندستُ خوارزمية List to
                  Tree لتحويل البيانات من نموذج Adjacency List المسطح إلى هيكل
                  شجري في الذاكرة (In-memory Processing)، ومعالجة الـ Recursion
                  برمجياً بعيداً عن المكتبات الجاهزة؛ لضمان أقصى كفاءة في
                  استهلاك الموارد{" "}
                  <Link href={"/blog/tree_data_structure"}>المقالة هنا</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedItem>
    </div>
  );
}
