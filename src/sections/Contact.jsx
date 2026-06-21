import { motion } from 'framer-motion'

function TextField({ label, type = 'text', name, placeholder, required = true }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD700]" htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="min-h-[56px] rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 backdrop-blur-xl outline-none transition-colors focus:border-[#FF6B00]/50 focus:bg-white/7 focus:shadow-[0_0_0_4px_rgba(255,107,0,0.14)]"
            />
        </div>
    )
}

function TextAreaField({ label, name, placeholder, required = true }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD700]" htmlFor={name}>
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                required={required}
                rows={5}
                className="min-h-[160px] resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder:text-white/35 backdrop-blur-xl outline-none transition-colors focus:border-[#FF6B00]/50 focus:bg-white/7 focus:shadow-[0_0_0_4px_rgba(255,107,0,0.14)]"
            />
        </div>
    )
}

function Contact() {
    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden bg-[#070707] px-4 py-16 sm:px-6 lg:px-12 xl:px-20"
        >
            <div className="pointer-events-none absolute left-0 top-10 hidden h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl lg:block" />
            <div className="pointer-events-none absolute right-0 top-24 hidden h-56 w-56 rounded-full bg-[#FFD700]/5 blur-3xl lg:block" />

            <div className="relative mx-auto w-full max-w-screen-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start gap-4"
                >
                    <span className="inline-flex rounded-full border border-[#FFD700]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD700]">
                        GET IN TOUCH
                    </span>

                    <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                        Start Your Fitness Journey Today
                    </h2>

                    <p className="max-w-2xl text-base leading-7 text-[#d1d5db]">
                        Have questions about memberships, training programs, or facilities? Contact our team and we'll help
                        you get started.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-6 lg:grid-cols-12">
                    {/* Left: contact information */}
                    <motion.aside
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-5"
                    >
                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD700]">Contact</p>
                                    <div className="mt-3 space-y-3 text-sm text-white/85">
                                        <p className="flex flex-col gap-1">
                                            <span className="text-white/55">Phone</span>
                                            <a className="text-white transition-colors hover:text-[#FFD700]" href="tel:+919876543210">
                                                +91 98765 43210
                                            </a>
                                        </p>

                                        <p className="flex flex-col gap-1">
                                            <span className="text-white/55">Email</span>
                                            <a
                                                className="text-white transition-colors hover:text-[#FFD700]"
                                                href="mailto:info@fitzone.com"
                                            >
                                                info@fitzone.com
                                            </a>
                                        </p>

                                        <p className="flex flex-col gap-1">
                                            <span className="text-white/55">Location</span>
                                            <span>Salem, Tamil Nadu</span>
                                        </p>

                                        <p className="flex flex-col gap-1">
                                            <span className="text-white/55">Working Hours</span>
                                            <span>Mon - Sat · 5:00 AM - 10:00 PM</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-sm font-semibold text-white">Quick response</p>
                                    <p className="mt-1 text-sm leading-6 text-[#d1d5db]">
                                        Share your details and our team will respond with the best membership option for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.aside>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-7"
                    >
                        <form className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <TextField label="Full Name" name="fullName" placeholder="Your full name" />
                                <TextField label="Phone Number" name="phone" placeholder="Your phone number" type="tel" />
                                <TextField label="Email Address" name="email" placeholder="you@example.com" type="email" />
                            </div>

                            <div className="mt-5">
                                <TextAreaField
                                    label="Message"
                                    name="message"
                                    placeholder="Tell us what you need help with..."
                                />
                            </div>

                            <div className="mt-6 flex items-center justify-between gap-4">
                                <p className="text-xs leading-5 text-white/55">
                                    By sending this enquiry, you agree to be contacted about your membership.
                                </p>

                                <button
                                    type="button"
                                    className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#FF6B00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_20px_70px_rgba(255,107,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]"
                                >
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Maps placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="mt-10"
                >
                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD700]">Location Map</p>
                               <p className="mt-2 text-sm leading-6 text-[#d1d5db]">
                                </p>
                            </div>
                            
                                                    </div>
                    </div>
                    <div className="mt-6 h-[350px] w-full overflow-hidden rounded-[22px] border border-white/10">
    <iframe
        title="FitZone Location"
        src="https://maps.google.com/maps?q=Salem%20New%20Bus%20Stand&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
    />
</div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
