import { motion } from 'framer-motion';
import { CheckCircle, MessagesSquare, Puzzle, Target, Award } from "lucide-react";

const ComparisonItem = ({ text, checked }: { text: string; checked: boolean }) => {
  const iconsMap: Record<string, JSX.Element> = {
    "Constant, proactive communication": <CheckCircle className="text-matrix-glow w-6 h-6" />,
    "Omni-channel approach": <MessagesSquare className="text-matrix-deep w-6 h-6" />,
    "Tailored best-fit solutions": <Puzzle className="text-matrix-lime w-6 h-6" />,
    "Provides industry specific expertise": <Target className="text-matrix-deep w-6 h-6" />,
    "Experts with 4+ years of experience": <Award className="text-matrix-glow w-6 h-6" />,
  };

  return (
    <div className="flex items-center gap-3 py-2">
      {checked ? (
        <span className="flex-shrink-0">{iconsMap[text] || <CheckCircle className="w-6 h-6 text-matrix-glow" />}</span>
      ) : (
        <span className="w-6 h-6 flex-shrink-0 text-red-500">✗</span>
      )}
      <span className={checked ? "text-foreground dark:text-white" : "text-muted-foreground dark:text-gray-500"}>{text}</span>
    </div>
  );
};

const Comparison = () => {
  const otherAgencyFeatures = [
    { text: "ارتباط کند و ضعیف", checked: false },
    { text: "فقط یک کانال ارتباطی", checked: false },
    { text: "استراتژی‌های رشد قدیمی", checked: false },
    { text: "عدم تحقیق تخصصی در صنعت", checked: false },
    { text: "برون‌سپاری به افراد غیرحرفه‌ای", checked: false },
  ];

  const matrixFeatures = [
    { text: "ارتباط دائم و فعال با مشتری", checked: true },
    { text: "استفاده از چندین کانال ارتباطی", checked: true },
    { text: "راه‌حل‌های اختصاصی و متناسب با نیاز شما", checked: true },
    { text: "ارائه تخصص ویژه هر صنعت", checked: true },
    { text: "تیم متخصص با بیش از ۴ سال تجربه", checked: true },
  ];

  return (
    <section id="comparison" className="py-24 bg-background dark:bg-matrix-bg text-foreground dark:text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-matrix-deep opacity-5 dark:opacity-10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-matrix-glow opacity-5 dark:opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            چرا باید <span className="text-matrix-glow">با ما</span> کار کنید؟
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Matrix */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-center">والابرند</h3>
            <motion.div
              className="backdrop-blur-md relative p-8 rounded-2xl border border-matrix-green/30 dark:border-matrix-green shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: `radial-gradient(ellipse at top right, rgba(255,255,255,0.1) 0%, rgba(${parseInt('00', 16)},${parseInt('CC', 16)},${parseInt('33', 16)},0.08) 20%, rgba(${parseInt('00', 16)},${parseInt('33', 16)},${parseInt('00', 16)},0.1) 50%, rgba(${parseInt('0B', 16)},${parseInt('0C', 16)},${parseInt('08', 16)},0.95) 100%)`,
                boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(${parseInt('1A', 16)},${parseInt('FF', 16)},${parseInt('66', 16)},0.2), inset 0 1px 1px rgba(255, 255, 255, 0.07)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-matrix-green/20 via-transparent to-matrix-glow/10 mix-blend-overlay" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-matrix-glow opacity-10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-matrix-deep opacity-10 rounded-full blur-3xl" />

              <div className="relative z-10">
                {matrixFeatures.map((feature, index) => (
                  <ComparisonItem key={`matrix-${index}`} text={feature.text} checked={feature.checked} />
                ))}
              </div>
            </motion.div>
          </div>
          {/* Other Agencies */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-semibold text-center text-muted-foreground dark:text-gray-400">آژانس‌های دیگر</h3>
            <motion.div
              className="backdrop-blur-sm bg-foreground/5 dark:bg-matrix-black/40 dark:bg-gradient-to-br dark:from-matrix-black/80 dark:to-black/80 p-8 rounded-2xl border border-foreground/20 dark:border-gray-800 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              {otherAgencyFeatures.map((feature, index) => (
                <ComparisonItem key={`other-${index}`} text={feature.text} checked={feature.checked} />
              ))}
            </motion.div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Comparison;
