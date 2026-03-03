---
title: "كيف تطلق موقعك للأنترنت خارج Kubernetes 🚀"
image: "Digital Global Network Map.png"
publishedAt: 2026-1-5
isPublished: true
slug: deploy-via-kubernetes
category:
    name: "DevOps"
    slug: "DevOps"
---

حين بدأت رحلتي في تعلم Kubernetes، واجهت مفهوماً كان يتسم ببعض التعقيد في البداية، وهو الـ Services. فبعد أن تنتهي من بناء الحاويات (Containers) داخل الـ Pod وتتأكد من عملها بشكل سليم، يبرز التحدي الأهم: كيف نتيح الوصول إليها من الخارج (Expose)؟ هنا تبدأ رحلة فهم الـ Services وأنواعها.

في Kubernetes، هناك أربعة أنواع، سأركز على أهم ثلاثة منها:

1. ClusterIP (الافتراضي): يقوم بإنشاء عنوان IP داخلي للـ Pods، مما يسمح لها بالتواصل حصرياً داخل (Cluster).
2. NodePort: يرتكز على ClusterIP ويقوم بفتح منفذ محدد على عنوان الـ IP الخاص بكل Node. تتيح لك هذه الطريقة الاتصال من خارج (Cluster)، لكنها تُعد وسيلة بدائية.
3. LoadBalancer: يقوم بنشر الخدمة خارجياً باستخدام External load balancer يوفره مزود السحابة (Cloud Provider) مثل AWS أو GCP.



---

## ولكن.. هل هذا يكفي؟

تخيل أنك تدير نظاماً مكوناً من خدمات مصغرة (Microservices) لمنصة تواصل اجتماعي:
* خدمة للمنشورات (feed)
* خدمة للبحث (search)
* خدمة للرسائل الخاصة (direct)

لنفترض أن جميعها تعمل بـ Express.js (للشرح فقط 😁). أنت هنا بحاجة إلى توجيه ذكي (Routing)؛ بحيث يوجهك النطاق (Domain) عبر المسار /feed إلى خدمة الـ feed، والمسار /search للبحث. 

مشكلة الـ Load Balancer التقليدي أنه يعمل على المستوى الرابع (L4 - TCP/UDP)، لذا فهو لا يفهم بروتول HTTP، وبالتالي لن يقوم بعمليات الـ Routing أو الـ TLS termination.

### هنا يأتي دور الـ Ingress

نحتاج nginx داخل Kubernetes، وهنا تبرز وظيفة الـ Ingress:

> "Make your HTTP (or HTTPS) network service available using a protocol-aware configuration mechanism, that understands web concepts like URIs, hostnames, paths, and more. The Ingress concept lets you map traffic to different backends based on rules you define via the Kubernetes API."



بإضافة nginx ingress controller، تُحل هذه المعضلات التقنية.

---

## مفاجأة: الـ NodePort والـ NAT

من خلال تجربتي الشخصية، عند إعداد nginx وتفعيل الـ load balancer، تم فتح خدمة NodePort على كافة الـ nodes. وحين حاولت الوصول إلى node لا تحتوي في الأصل على nginx كـ pod، استقبلتني صفحة nginx بنجاح!

استغربتُ في البداية، لأني فعلياً أتصل مع node لا يوجد بها pod للـ nginx. اكتشفتُ حينها أن الـ NodePort يرتبط بالـ pod في نهاية المطاف؛ فعندما تتصل بـ node لا تحتوي على ذلك الـ pod، يقوم النظام بتوجيهك إلى الـ node التي يتوفر فيها عبر تقنية NAT (Network Address Translation). 

هذا يعني أنك قد تتصل بـ IP معين، ليقوم النظام فعلياً بنقلك إلى سيرفر آخر تماماً عبر الشبكة، وليس مجرد عمله كـ proxy.

---

## آفاق أوسع: الأنظمة الموزعة

المجال واسع جداً؛ ففي بعض الأحيان تحتاج الخدمات للتواصل فيما بينها عبر TLS. هنا يبرز دور الـ reverse proxy الذي يعمل بجانب كل pod لإضافة طبقة أمان أو التحكم في صلاحيات التواصل بين الخدمات، وهو ما يُعرف بـ sidecar proxy.



لقد كانت تجربة Kubernetes والأنظمة الموزعة (Distributed Systems) ثرية جداً؛ تعلمتُ من خلالها الكثير عن الشبكات، والـ proxies، والـ Container Orchestration بشكل عام. لقد منحتني رؤية واضحة حول كيفية عمل الأنظمة الضخمة، وكانت رحلة مثيرة للأهتمام وتعلمت منها الكثير.