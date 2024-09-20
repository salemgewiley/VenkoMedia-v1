import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function CardWithContent({ title, info, imageUrl }) {
  return (
    <Card className="mt-6 bg-secondary-back text-main-text" dir="rtl">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-20 mx-auto my-3 h-auto object-cover rounded-t-lg"
        />
      </div>
      <CardBody className="text-center">
        <Typography
          variant="h5"
          color="inherit"
          className="mb-2 text-secondary-text font-expoBold text-center"
        >
          {title}
        </Typography>
        <Typography color="inherit" className="font-expoBook text-center">
          {info}
        </Typography>
      </CardBody>
    </Card>
  );
}

// PropTypes validation
CardWithContent.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default function WhyUs() {
  return (
    <section
      className="py-20 px-5 sm:px-5 md:px-10 xl:px-20  mx-0  bg-main"
      dir="rtl"
    >
      <h1 className="z-50 bg-main text-main-text text-center text-5xl font-semibold leading-tight tracking-normal my-1 p-0">
        ليه احنا ؟
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <CardWithContent
          title="خبرتنا"
          info='"في Venko Media، خبرتنا في مجال السوشيال ميديا مش بس كبيرة، لكن كمان متنوعة. إحنا شغالين في كل حاجة من إدارة الحملات الإعلانية، لإنشاء محتوى جذاب، لغاية تحليل الأداء وتحسينه. يعني لو محتاج دعم شامل، إحنا هنا عشانك."'
          imageUrl="/src/assets/rating.png"
        />
        <CardWithContent
          title="أفكارنا"
          info='"إحنا في Venko Media مش بنقف عند الأفكار التقليدية. دايمًا بنبحث عن طرق جديدة ومبتكرة لخلق محتوى يجذب انتباه الجمهور ويحقق نتائج فعالة. معانا هتلاقي أفكار جديدة بتناسب كل احتياجاتك."'
          imageUrl="/src/assets/idea.png"
        />
        <CardWithContent
          title="التصميمات الجذابة"
          info='"تصميماتنا دايمًا جذابة ومُلفتة، مصممة بشكل احترافي عشان تعكس هوية علامتك التجارية بأحسن شكل. نستخدم أحدث أدوات التصميم لضمان أن كل تصميم يكون مميز ويناسب أهدافك."'
          imageUrl="/src/assets/design-thinking.png"
        />
        <CardWithContent
          title="مواقع وتطبيقات احترافية"
          info='"نقدم لك مواقع وتطبيقات بتصميم احترافي وبأداء عالي. بنحرص على أن كل مشروع نشتغل عليه يكون مُصمم بشكل يضمن لك تجربة مستخدم ممتازة ويحقق أقصى استفادة."'
          imageUrl="/src/assets/web-programming.png"
        />
        <CardWithContent
          title="تحليلتنا ونتائجنا"
          info='"احنا متخصصين في تحليل البيانات ونتائج الحملات. بنستخدم أدوات تحليل متقدمة عشان نوفر لك تقارير دقيقة تساعدك على فهم أداء الحملات وتحديد المجالات اللي تحتاج تحسين."'
          imageUrl="/src/assets/business.png"
        />
        <CardWithContent
          title="التنفيذ في الوقت المطلوب"
          info='"في Venko Media، بنقدر أهمية الوقت. عشان كده، بنلتزم بتنفيذ المشاريع في الوقت المحدد وبجودة عالية، عشان تضمن إن كل حاجة ماشية حسب خطتك."'
          imageUrl="/src/assets/clock.png" // Replace with your image path
        />
      </div>
    </section>
  );
}
