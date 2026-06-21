import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/images/logo.png'
const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Membership', href: '#membership' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Contact', href: '#contact' },
]

function Navbar() {
    const [open, setOpen] = useState(false)
    const [activeHref, setActiveHref] = useState('#home')

    return (
        <motion.header
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/92 backdrop-blur-xl"
        >
            <div className="w-full">
                <div className="mx-auto w-full max-w-screen-2xl flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-12 xl:px-20 py-4">
                    
                <div className="flex items-center gap-3">
    <img
        src={logo}
        alt="FitZone Logo"
        className="h-14 w-auto transition duration-300 hover:scale-105"
    />
</div>

                    <nav className="hidden items-center gap-8 md:flex">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="group relative text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:text-[#FFD700]"
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-[#FFD700] transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="hidden rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_24px_90px_rgba(255,107,0,0.24)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02] md:inline-flex"
                        >
                            Join Now
                        </button>

                        <button
                            type="button"
                            onClick={() => setOpen((value) => !value)}
                            aria-label="Toggle mobile menu"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-200 md:hidden"
                        >
                            {open ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent" />

            <AnimatePresence>
                {open ? (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                            className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm md:hidden"
                            onClick={() => setOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="fixed inset-x-3 top-[72px] z-50 overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0B0B]/98 backdrop-blur-2xl shadow-[0_40px_70px_rgba(0,0,0,0.45)] md:hidden"
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                        >
                            <div
                                className="space-y-4 px-4 pb-6 pt-5"
                                onKeyDown={(e) => {
                                    if (e.key === 'Escape') setOpen(false)
                                }}
                            >
                                {links.map((link) => {
                                    const isActive = activeHref === link.href
                                    return (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => {
                                                setOpen(false)
                                                setActiveHref(link.href)
                                            }}
                                            className={`block rounded-3xl border px-5 py-4 text-base font-medium uppercase tracking-[0.18em] transition duration-200 ${isActive
                                                ? 'border-[#FF6B00] bg-white/10 text-[#FFD700] shadow-[0_0_20px_rgba(255,107,0,0.18)]'
                                                : 'border-white/10 bg-white/5 text-white hover:border-[#FF6B00] hover:bg-[#111111]'
                                                }`}
                                        >
                                            {link.label}
                                        </a>
                                    )
                                })}

                                <button
                                    type="button"
                                    className="w-full min-h-[54px] rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(255,107,0,0.35)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_42px_rgba(255,107,0,0.5)]"
                                >
                                    Join Now
                                </button>
                            </div>
                        </motion.div>
                    </>
                ) : null}
            </AnimatePresence>
        </motion.header>
    )
}

export default Navbar
