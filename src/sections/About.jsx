import { motion } from 'framer-motion'
import aboutGym from '../assets/images/about.png'

const features = [
  { title: 'Certified Trainers' },
  { title: 'Modern Equipment' },
  { title: 'Nutrition Guidance' },
  { title: 'Personalized Coaching' },
]

function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#070707] px-4 py-16 sm:px-6 lg:px-12 xl:px-20"
    >
      <div className="pointer-events-none absolute left-6 top-0 hidden h-44 w-44 rounded-full bg-[#FF6B00]/8 blur-3xl lg:block" />

      <div className="relative mx-auto grid w-full max-w-screen-2xl gap-10 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]">
            <img
              src={aboutGym}
              alt="FitZone Gym Interior"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-flex rounded-full border border-[#FFD700]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD700]">
            WHY CHOOSE FITZONE
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Train Smarter.
            <span className="block">
              Achieve Faster Results.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#d1d5db]">
            FitZone combines expert coaching, modern facilities, and
            personalized fitness plans to help members achieve their goals
            efficiently and sustainably.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00]/30 hover:shadow-[0_24px_60px_rgba(255,107,0,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6B00]/20 bg-[#111111]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">
                    {f.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About