import { motion } from 'framer-motion'
import p from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
const testimonials = [
    {
        name: 'Riya',
        review: 'The trainers are extremely supportive and the results have been amazing.',
      image: p2,
    },
    {
        name: 'Amit',
        review: 'Modern equipment, great atmosphere, and excellent coaching.',
     image: p,
    },
    {
        name: 'Priya',
        review: 'I lost 12kg in 4 months with their guidance.',
    image: p2,
    },
    {
        name: 'Karan',
        review: 'The personalized workout plans made a huge difference.',
    image: p,
    },
    {
        name: 'Neha',
        review: 'Professional trainers and outstanding facilities.',
    image: p2,
    },
    {
        name: 'Siddharth',
        review: "Best fitness experience I've ever had.",
      image: p2,
    },
]

function StarRow() {
    return (
        <div className="flex items-center gap-1" aria-label="Rating: 5 out of 5">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#FFD700] text-base leading-none">
                    ★
                </span>
            ))}
        </div>
    )
}

function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative w-full overflow-hidden bg-[#070707] px-4 py-16 sm:px-6 lg:px-12 xl:px-20"
        >
            <div className="pointer-events-none absolute left-0 top-10 hidden h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl lg:block" />
            <div className="pointer-events-none absolute right-0 top-24 hidden h-56 w-56 rounded-full bg-[#FFD700]/5 blur-3xl lg:block" />

            <div className="relative mx-auto w-full max-w-screen-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    <span className="inline-flex rounded-full border border-[#FFD700]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD700]">
                        SUCCESS STORIES
                    </span>

                    <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                        What Our Members Say
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-[#d1d5db]">
                        Hear from members who transformed their fitness journey with FitZone.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.article
                            key={t.name}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06 * index, duration: 0.55 }}
                            className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* orange glow overlay (hover) */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background:
                                        'radial-gradient(circle at 15% 0%, rgba(255,107,0,0.30), transparent 55%), radial-gradient(circle at 85% 30%, rgba(255,216,0,0.16), transparent 58%)',
                                }}
                            />

                            <div className="flex items-center gap-4 px-6 pt-6">
                                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">
    <img
        src={t.image}
        alt={t.name}
        className="h-full w-full object-cover"
    />
</div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FFD700]">Member</p>
                                    <h3 className="mt-1 truncate text-lg font-bold text-white">{t.name}</h3>
                                </div>
                            </div>

                            <div className="px-6 pt-4">
                                <div className="flex items-center justify-between gap-4">
                                    <StarRow />
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">★★★★★</span>
                                </div>
                            </div>

                            <p className="px-6 pt-4 text-sm leading-7 text-[#d1d5db]">
                                “{t.review}”
                            </p>

                            <div className="mt-auto px-6 pb-6">
                                <div className="h-[1px] w-full bg-gradient-to-r from-[#FF6B00]/0 via-[#FF6B00]/60 to-[#FF6B00]/0" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
