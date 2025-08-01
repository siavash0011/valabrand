import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

function Price() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-background text-foreground ">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden ">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-matrix-deep dark:opacity-10 opacity-5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-matrix-glow dark:opacity-10 opacity-5 blur-[150px] rounded-full pointer-events-none" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 dark:opacity-5 opacity-3"
             style={{
               backgroundImage: `radial-gradient(#1AFF66 1px, transparent 1px)`,
               backgroundSize: '30px 30px'
             }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 ">
        {/* Text Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold text-matrix-glow"
          >
            Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl"
          >
            Choose the right plan for <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-lime via-matrix-glow to-matrix-deep">you</span>
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8"
        >
          Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
        </motion.p>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {/* Hobby Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl backdrop-blur-md relative p-8 overflow-hidden sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl border border-foreground/20"
            style={{
              backgroundImage: 'radial-gradient(farthest-corner at top right, rgba(0, 180, 51, 0.3), transparent 60%)',
              backgroundBlendMode: 'overlay',
            }}
          >
            {/* Subtle glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-matrix-glow opacity-10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-matrix-deep opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 id="tier-hobby" className="text-base/7 font-semibold text-matrix-glow">Hobby</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight">$29</span>
                <span className="text-base text-muted-foreground">/month</span>
              </p>
              <p className="mt-6 text-base/7 text-muted-foreground">
                The perfect plan if you're just getting started with our product.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-muted-foreground sm:mt-10">
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-glow" />
                  25 products
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-glow" />
                  Up to 10,000 subscribers
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-glow" />
                  Advanced analytics
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-glow" />
                  24-hour support response time
                </li>
              </ul>
              <a
                href="#"
                aria-describedby="tier-hobby"
                className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white bg-matrix-deep hover:bg-matrix-glow transition-all duration-300 shadow-[0_0_15px_rgba(26,255,102,0.15)]"
              >
                Get started today
              </a>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl backdrop-blur-md relative p-8 overflow-hidden sm:mx-8 sm:rounded-t-none sm:p-10 lg:mx-0 lg:rounded-bl-none lg:rounded-tr-3xl border border-foreground/20"
            style={{
              backgroundImage: 'radial-gradient(farthest-corner at bottom left, rgba(26, 200, 102, 0.3), transparent 60%)',
              backgroundBlendMode: 'overlay',
            }}
          >
            {/* Subtle glow effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-matrix-lime opacity-10 rounded-full blur-3xl" />
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-matrix-glow opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 id="tier-enterprise" className="text-base/7 font-semibold text-matrix-lime">Enterprise</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight">$99</span>
                <span className="text-base text-muted-foreground">/month</span>
              </p>
              <p className="mt-6 text-base/7 text-muted-foreground">
                Dedicated support and infrastructure for your company.
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-muted-foreground sm:mt-10">
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-lime" />
                  Unlimited products
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-lime" />
                  Unlimited subscribers
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-lime" />
                  Advanced analytics and reporting
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-lime" />
                  1-hour, dedicated support response time
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-matrix-lime" />
                  Custom integrations
                </li>
              </ul>
              <a
                href="#"
                aria-describedby="tier-enterprise"
                className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white bg-matrix-lime hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(182,255,0,0.15)]"
              >
                Contact sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Price;
