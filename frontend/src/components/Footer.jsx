import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <section className="mx-5 mb-5 rounded-[2rem] bg-gradient-to-br from-brand-blue to-brand-green text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:flex items-end justify-between gap-10">
          <div>
            <p className="uppercase tracking-[.25em] text-xs font-bold mb-4">
              Start a conversation
            </p>
            <h2 className="display text-4xl md:text-6xl font-extrabold max-w-3xl">
              Have an idea? Let's build something remarkable.
            </h2>
          </div>
          <Link
            className="mt-8 md:mt-0 inline-flex rounded-full bg-white text-brand-ink px-6 py-4 font-bold items-center gap-2"
            to="/contact"
          >
            Start your project <FiArrowUpRight />
          </Link>
        </div>
      </section>
      <footer className="bg-brand-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="display text-2xl font-extrabold">
              <span className="text-brand-lime">HEX</span> SOFTWARES
            </div>
            <p className="mt-4 text-white/60">
              Engineering digital experiences for ambitious businesses.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <div className="space-y-2 text-white/60">
              <Link className="block" to="/about">
                About
              </Link>
              <Link className="block" to="/careers">
                Careers
              </Link>
              <Link className="block" to="/portfolio">
                Portfolio
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <p className="text-white/60">
              Web Development
              <br />
              Mobile Apps
              <br />
              AI Solutions
              <br />
              Cloud & SaaS
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <Link className="block text-white/60" to="/internships">
              Internships
            </Link>
            <Link
              className="block text-white/60 mt-2"
              to="/certificate-verification"
            >
              Certificate Verification
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/50">
          © HexSoftwares. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
