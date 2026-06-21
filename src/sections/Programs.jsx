import { motion } from 'framer-motion'

const programs = [
  {
    title: 'Weight Loss',
    description: 'Burn fat efficiently with structured workout plans and nutrition guidance.',
  
  },
  {
    title: 'Muscle Building',
    description: 'Build lean muscle mass through progressive strength training.',
    
  },
  {
    title: 'Strength Training',
    description: 'Increase power, performance, and overall fitness.',
  
  },
  {
    title: 'Cardio Fitness',
    description: 'Improve stamina, endurance, and heart health.',
   
  },
  {
    title: 'Personal Training',
    description: 'One-on-one coaching customized to your fitness goals.',
   
  },
  {
    title: 'Nutrition Coaching',
    description: 'Personalized meal plans and expert dietary guidance.',
   
  },
]

function Programs() {
  return (
    <section id="programs" className="relative w-full overflow-hidden bg-[#070707] px-4 py-16 sm:px-6 lg:px-12 xl:px-20">
      <div className="pointer-events-none absolute right-12 top-20 hidden h-52 w-52 rounded-full bg-[#FFD700]/6 blur-3xl lg:block" />
      <div className="relative mx-auto w-full max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex rounded-full border border-[#FFD700]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD700]">
            OUR PROGRAMS
          </span>

          <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
            Programs Designed For Every Fitness Goal
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#d1d5db]">
            Whether your goal is weight loss, muscle gain, endurance, or personalized coaching, FitZone offers expert-led programs tailored to your needs.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.5 }}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#FF6B00]/35 hover:shadow-[0_30px_90px_rgba(255,107,0,0.14)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FF6B00]/20 bg-[#111111] transition-all duration-300 group-hover:border-[#FF6B00]/50">
  <span className="text-3xl font-black text-[#FF6B00]">
    0{index + 1}
  </span>
</div>
              <h3 className="mt-5 text-lg font-bold text-white">
                <span className="block leading-snug">{program.title}</span>
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-[#d1d5db]">
                {program.description}
              </p>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#FF6B00] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            Ready to Start Your Transformation?
          </h3>
          <button className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#FF6B00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_20px_70px_rgba(255,107,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]">
            Explore Membership Plans
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs
