import { motion } from 'framer-motion'
import m1 from '../assets/images/m1.png'
import m2 from '../assets/images/m2.png'
import fm1 from '../assets/images/fm1.png'
import fm2 from '../assets/images/fm2.png'

const trainers = [
  {
    name: 'Arun Kumar',
    specialization: 'Strength Coach',
    experience: '8+ Years Experience',
    image: m1,
  },
  {
    name: 'Deepka',
    specialization: 'Fat Loss Specialist',
    experience: '6+ Years Experience',
    image: fm1,
  },
  {
    name: 'Anushka',
    specialization: 'Personal Trainer',
    experience: '5+ Years Experience',
    image: fm2,
  },
  {
    name: 'Karthik S',
    specialization: 'Nutrition & Fitness Coach',
    experience: '7+ Years Experience',
    image: m2,
  },
]

function Trainers() {
  return (
    <section
      id="trainers"
      className="relative w-full overflow-hidden bg-[#070707] px-4 py-16 sm:px-6 lg:px-12 xl:px-20"
    >
      <div className="pointer-events-none absolute right-12 top-10 hidden h-56 w-56 rounded-full bg-[#FFD700]/5 blur-3xl lg:block" />
      <div className="pointer-events-none absolute left-0 top-32 hidden h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl lg:block" />

      <div className="relative mx-auto w-full max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex rounded-full border border-[#FFD700]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD700]">
            EXPERT COACHES
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Meet Our Professional Trainers
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#d1d5db]">
            Our experienced coaches are committed to helping you achieve your fitness goals through personalized
            guidance and proven training methods.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.55 }}
              className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Orange glow overlay (hover) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 20% 0%, rgba(255,107,0,0.32), transparent 55%), radial-gradient(circle at 90% 25%, rgba(255,216,0,0.16), transparent 58%)',
                }}
              />

              {/* Premium image placeholder container */}
              <div className="relative mx-4 mt-4 overflow-hidden rounded-[22px] border border-white/10">
  <div className="relative aspect-[4/5] overflow-hidden">
    <img
      src={trainer.image}
      alt={trainer.name}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
  </div>
</div>
            

              <div className="flex flex-1 flex-col p-6 pt-5">
                <h3 className="text-xl font-bold text-white sm:text-2xl">{trainer.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#FFD700]">
                  {trainer.specialization}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#d1d5db]">{trainer.experience}</p>

                {/* Glass footer spacer to keep equal heights */}
                <div className="mt-auto">
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#FF6B00]/0 via-[#FF6B00]/60 to-[#FF6B00]/0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
