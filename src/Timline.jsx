function Timeline() {
  return (
    <div className="bg-main pt-[4.5rem] " dir="rtl">
      <div className="flex justify-center">
        <div className="container  mx-20 px-4 sm:px-2">
          <h1 className="text-main-text text-center sm:text-right text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-normal mb-8">
            خــــدمــاتــنــا
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col p-4 border-2 border-main-hover rounded-sm bg-[#1E293B]"
              >
                {index > 0 && (
                  <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[rgb(15,23,42)]"></span>
                )}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                  <img
                    className="w-20 flex-shrink-0 overflow-hidden p-2"
                    src={service.imgSrc}
                    alt={service.title}
                  />
                  <h5 className="font-expoBold text-lg sm:text-xl lg:text-2xl font-semibold leading-snug text-[rgb(14,165,233)] text-center sm:text-right">
                    {service.title}
                  </h5>
                </div>
                <p className="font-expoBook text-sm sm:text-base lg:text-lg leading-relaxed text-[#f0f9ff] text-center sm:text-right">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    imgSrc: "/src/assets/digital-marketing.png",
    title: "التسويق الإلكتروني",
    description:
      "على عكس التسويق التقليدي، التسويق الإلكتروني بيوصلك لعملاءك بسهولة وبيخليك تستهدف الفئة المهتمة بمجالك. وكمان فيه ميزة تفاعل الجمهور معاك بسهولة والاستفسار عن الخدمات والمنتجات من أي مكان في العالم! كل الميزات دي بتخلي التسويق الإلكتروني ضروري لكل أصحاب الأعمال اللي عايزين ينجحوا.",
  },
  {
    imgSrc: "/src/assets/identity.png",
    title: "الهوية التجارية",
    description:
      "هويتك التجارية هي بصمتك في العالم الإلكتروني. بمجرد ما يشوفها الناس، بتعكس كل مميزاتك وأفكارك وقاعدة جمهورك والثقة اللي اكتسبتها عبر الوقت. الهوية التجارية هي اللي بتدي خدماتك معنى وقيمة.",
  },
  {
    imgSrc: "/src/assets/ux.png",
    title: "تصميم وتطوير المواقع الإلكترونية",
    description:
      "الظروف العالمية والصراع على سوق العمل الإلكتروني بيخلق فرص جديدة لكل اللي عايزين ينجحوا ويوصلوا لعملائهم بطريقة احترافية. دلوقتي، الحصول على موقعك الإلكتروني الخاص بقى أسهل وأرخص من أي وقت فات، وكمان أفضل من أي وسيلة تسويق تقليدية في تحقيق الأرباح وبناء الهوية التجارية والثقة.",
  },
  {
    imgSrc: "/src/assets/coordinator.png",
    title: "إدارة صفحات السوشيال ميديا",
    description:
      "التواجد على السوشيال ميديا بقى ضروري جداً في الوقت الحالي. من خلال السوشيال ميديا، تقدر تجذب أكبر عدد من العملاء بتكلفة أقل من التسويق التقليدي وتدعم علامتك التجارية!",
  },
];

export default Timeline;
