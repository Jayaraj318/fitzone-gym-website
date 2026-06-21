import { motion } from 'framer-motion'

const plans = [
    {
        name: 'Basic',
        price: '₹999',
        period: 'month',
        features: ['Gym Access', 'Locker Access', 'Fitness Assessment'],
        cta: 'Join Now',
        popular: false,
    },
    {
        name: 'Pro',
        price: '₹1999',
        period: 'month',
        features: ['Gym Access', 'Personal Trainer', 'Diet Plan', 'Progress Tracking'],
        cta: 'Join Now',
        popular: true,
    },
    {
        name: 'Elite',
        price: '₹2999',
        period: 'month',
        features: ['All Pro Features', '1-on-1 Coaching', 'Priority Support', 'Premium Access'],
        cta: 'Join Now',
        popular: false,
    },
]

function Membership() {
    return (
        <section
            id="membership"
            className="relative w-full overflow-hidden bg-[#070707] px-4 py-16 sm:px-6 lg:px-12 xl:px-20"
        >
            {/* Orange glow orbs */}
            <div className="pointer-events-none absolute left-6 top-0 hidden h-56 w-56 rounded-full bg-[#FF6B00]/10 blur-3xl lg:block" />
            <div className="pointer-events-none absolute right-0 top-24 hidden h-64 w-64 rounded-full bg-[#FFD700]/5 blur-3xl lg:block" />

            <div className="relative mx-auto w-full max-w-screen-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Badge */}
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD700]">
                        MEMBERSHIP PLANS
                    </span>

                    {/* Heading */}
                    <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                        Choose The Perfect Plan
                    </h2>

                    {/* Subheading */}
                    <p className="mt-6 max-w-2xl text-base leading-7 text-[#d1d5db]">
                        Flexible plans designed for every fitness goal and budget.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06 * index, duration: 0.55 }}
                            className={`group relative overflow-hidden rounded-[26px] border p-8 backdrop-blur-xl transition-all duration-300 ${plan.popular
                                    ? 'border-[#FF6B00]/50 bg-white/5 shadow-[0_0_0_1px_rgba(255,107,0,0.35),0_45px_120px_rgba(255,107,0,0.22)]'
                                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:shadow-[0_30px_90px_rgba(255,107,0,0.10)]'
                                }`}
                        >
                            {/* Orange glow overlay */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background:
                                        'radial-gradient(circle at 30% 0%, rgba(255,107,0,0.35), transparent 55%), radial-gradient(circle at 90% 20%, rgba(255,107,0,0.18), transparent 55%)',
                                }}
                            />

                            {/* Highlight Pro */}
                            {plan.popular && (
                                <div className="absolute -right-10 top-6 rotate-45 transform">
                                    <span className="block rounded-full bg-[#FF6B00] px-10 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Glass highlight */}
                            <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/10 opacity-60" />
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-[#FF6B00]/0 via-[#FF6B00]/60 to-[#FF6B00]/0" />

                            {/* Card content */}
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                                className="relative z-10 flex h-full flex-col"
                            >
                                <h3 className="text-xl font-bold tracking-wide text-white sm:text-2xl">{plan.name}</h3>

                                {/* Pricing typography */}
                                <div className="mt-5 flex items-baseline gap-2">
                                    <span className="text-6xl font-black tracking-[-0.06em] text-white">{plan.price}</span>
                                    <span className="text-base text-[#d1d5db]">/{plan.period}</span>
                                </div>

                                {/* Features list (no icons, no emojis) */}
                                <ul className="mt-7 space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="text-sm leading-6 text-[#d1d5db]">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    className={`mt-8 w-full rounded-full py-3 px-6 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${plan.popular
                                            ? 'bg-[#FF6B00] text-white shadow-[0_20px_70px_rgba(255,107,0,0.22)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]'
                                            : 'border border-white/20 text-white hover:border-[#FF6B00]/50 hover:bg-white/5'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Membership
