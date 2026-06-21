import { motion } from 'framer-motion'
import heroGym from '../assets/images/gym_hero.png'
function Hero() {
    const stats = [
        { value: '500+', label: 'Active Members' },
        { value: '20+', label: 'Professional Trainers' },
        { value: '10+', label: 'Years Experience' },
        { value: '95%', label: 'Client Satisfaction' },
    ]

    return (
        <section id="home" className="relative overflow-hidden bg-[#070707] w-full px-4 py-16 sm:px-6 lg:px-12 xl:px-20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(circle_at_top,_rgba(255,107,0,0.18),_transparent_50%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-2xl bg-[radial-gradient(circle_at_center,_rgba(255,216,0,0.08),_transparent_42%)] opacity-80" />
            <div className="relative mx-auto w-full max-w-screen-2xl flex flex-col gap-10 lg:flex-row lg:items-center">
                <motion.div
                    initial={{ opacity: 0, x: -48 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="z-10 flex-1 text-white"
                >
                    <span className="inline-flex rounded-full border border-[#FFD700]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD700] backdrop-blur-sm">
                        Salem's Premium Fitness Destination
                    </span>

                    <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-[-0.05em] text-white sm:text-6xl">
                        Transform Your Body,
                        <span className="block bg-gradient-to-r from-[#FF6B00] via-[#FFD700] to-[#FF6B00] bg-clip-text text-transparent">Transform Your Life</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-[#d1d5db] sm:text-lg">
                        Professional trainers, modern equipment, and personalized fitness programs designed to help you achieve your fitness goals.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <button className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_22px_80px_rgba(255,107,0,0.26)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_48px_rgba(255,107,0,0.42)]">
                            Join Now
                        </button>
                        <button className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-200 hover:bg-white/10">
                            View Plans
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
                        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
className="min-h-[180px] rounded-3xl border border-white/10 bg-white/5 px-5 py-6 flex flex-col items-center justify-center text-center backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_30px_90px_rgba(255,107,0,0.10)]"                                style={{ height: '100%' }}
                            >
                                <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[#d1d5db] leading-6">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                    className="relative z-10 flex-1"
                >
                   
                   <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]">
    <img
        src={heroGym}
        alt="FitZone Gym Athlete"
        className="h-full w-full object-cover"
    />
</div>

                    <div className="absolute left-4 top-6 hidden h-28 w-28 rounded-full bg-[#FF6B00]/10 blur-3xl lg:block" />
                    <div className="absolute right-6 top-20 hidden h-24 w-24 rounded-full bg-[#FFD700]/20 blur-3xl lg:block" />

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { label: 'Fat Loss Program' },
                            { label: 'Strength Training' },
                            { label: 'Premium Coaching' },
                        ].map((card, index) => (
                            <motion.div
                                key={card.label}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.08 + index * 0.08, duration: 0.45, ease: 'easeOut' }}
                                className="rounded-[28px] border border-white/10 bg-[#111111]/90 px-5 py-4 text-white shadow-[0_32px_80px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#FF6B00]/40 hover:shadow-[0_32px_90px_rgba(255,107,0,0.12)]"
                            >
                                <p className="text-xs uppercase tracking-[0.22em] text-[#FFD700]">
                                    {card.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
