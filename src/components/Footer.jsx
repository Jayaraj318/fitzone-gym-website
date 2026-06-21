import { motion } from 'framer-motion'
import logo from '../assets/images/logo.png'
function Footer() {
    return (
        <footer aria-label="Footer" className="relative border-t border-white/10 bg-[#0B0B0B]">
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute left-1/2 top-0 h-[220px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,107,0,0.18),_transparent_60%)]" />
            </div>

            <div className="relative mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-12 xl:px-20">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4"
                    >
                <div className="inline-flex items-center gap-4">
    <img
        src={logo}
        alt="FitZone Logo"
        className="h-16 w-auto"
    />

    <div>
        <p className="text-xl font-black tracking-[0.08em] text-white">
            FitZone
        </p>

        <p className="mt-1 text-sm leading-6 text-[#d1d5db]">
            Premium training • Modern facilities • Real results
        </p>
    </div>
</div>                    <p className="mt-6 text-sm leading-6 text-white/60">
                            Luxury fitness made simple—train with confidence, progress with purpose.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.06 }}
                        className="lg:col-span-3"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD700]">Quick Links</p>

                        <div className="mt-5 flex flex-col gap-3">
                            <a className="text-sm text-white/70 transition-colors hover:text-[#FFD700]" href="#home">
                                Home
                            </a>
                            <a className="text-sm text-white/70 transition-colors hover:text-[#FFD700]" href="#about">
                                About
                            </a>
                            <a className="text-sm text-white/70 transition-colors hover:text-[#FFD700]" href="#programs">
                                Programs
                            </a>
                            <a className="text-sm text-white/70 transition-colors hover:text-[#FFD700]" href="#membership">
                                Membership
                            </a>
                            <a className="text-sm text-white/70 transition-colors hover:text-[#FFD700]" href="#trainers">
                                Trainers
                            </a>
                            <a className="text-sm text-white/70 transition-colors hover:text-[#FFD700]" href="#contact">
                                Contact
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.12 }}
                        className="lg:col-span-5"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD700]">
                            Contact Information
                        </p>

                        <div className="mt-5 space-y-3 text-sm text-white/70">
                            <p className="flex flex-col gap-1">
                                <span className="text-white/55">Phone</span>
                                <a className="transition-colors hover:text-[#FFD700]" href="tel:+919876543210">
                                    +91 98765 43210
                                </a>
                            </p>
                            <p className="flex flex-col gap-1">
                                <span className="text-white/55">Email</span>
                                <a className="transition-colors hover:text-[#FFD700]" href="mailto:info@fitzone.com">
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

                        <div className="mt-6 rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                            <p className="text-sm font-semibold text-white">Fast enquiry response</p>
                            <p className="mt-1 text-sm leading-6 text-[#d1d5db]">
                                Send your details in the contact form and our team will get back to you quickly.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/55">© {new Date().getFullYear()} FitZone. All rights reserved.</p>
                    <p className="text-xs text-white/55">Privacy • Terms</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
