import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiServer,
  FiCpu,
  FiGlobe,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";
import api from "../api/axios";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";

const fallbackServices = [
  [
    "Web Development",
    "Fast, scalable web products built around your business.",
  ],
  [
    "Mobile App Development",
    "Elegant mobile experiences from concept to launch.",
  ],
  [
    "Custom Software Development",
    "Purpose-built software that simplifies complex workflows.",
  ],
  [
    "AI Solutions",
    "Practical intelligent experiences that unlock business value.",
  ],
].map((x, i) => ({
  _id: String(i + 1),
  title: x[0],
  description: x[1],
  number: `0${i + 1}`,
}));
const tech = [
  ["React", FiCode],
  ["Node.js", FiServer],
  ["Express.js", FiCpu],
  ["MongoDB", FiDatabase],
  ["JavaScript", FiCode],
  ["Tailwind CSS", FiCode],
  ["AWS", FiGlobe],
  ["Git & GitHub", FiCode],
];
const industries = [
  "Healthcare",
  "Education",
  "Finance",
  "E-Commerce",
  "Startups",
  "SaaS",
  "Logistics",
  "Real Estate",
];

export default function Home() {
  const [services, setServices] = useState([]),
    [projects, setProjects] = useState([]),
    [testimonials, setTestimonials] = useState([]),
    [internships, setInternships] = useState([]);
  useEffect(() => {
    api
      .get("/services")
      .then((r) => setServices(r.data))
      .catch(() => setServices(fallbackServices));
    api
      .get("/projects")
      .then((r) => setProjects(r.data))
      .catch(() => {});
    api
      .get("/testimonials")
      .then((r) => setTestimonials(r.data))
      .catch(() => {});
    api
      .get("/internships")
      .then((r) => setInternships(r.data))
      .catch(() => {});
  }, []);
  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="border-y bg-[#17dec766] py-6 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-25%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-sm font-bold tracking-[.2em] text-slate-400"
        >
          REACT&nbsp;&nbsp; • &nbsp;&nbsp;NODE.JS&nbsp;&nbsp; •
          &nbsp;&nbsp;EXPRESS&nbsp;&nbsp; • &nbsp;&nbsp;MONGODB&nbsp;&nbsp; •
          &nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp; • &nbsp;&nbsp;TAILWIND
          CSS&nbsp;&nbsp; • &nbsp;&nbsp;AWS&nbsp;&nbsp; •
          &nbsp;&nbsp;DOCKER&nbsp;&nbsp; • &nbsp;&nbsp;REACT&nbsp;&nbsp; •
          &nbsp;&nbsp;NODE.JS&nbsp;&nbsp; • &nbsp;&nbsp;EXPRESS&nbsp;&nbsp; •
          &nbsp;&nbsp;MONGODB
        </motion.div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Who we are"
            title="We build technology that creates momentum."
            copy="Strategy, design and engineering aligned around one goal: turning ambitious ideas into durable digital products."
          />
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Expert Development Team",
              "Modern Technology",
              "Business-Focused Solutions",
              "Long-Term Support",
            ].map((x, i) => (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-brand-mist p-7"
                key={x}
              >
                <span className="text-brand-blue font-bold">0{i + 1}</span>
                <h3 className="display text-xl font-bold mt-12">{x}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-mist">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Capabilities"
            title="Built for modern businesses."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {(services.length ? services : fallbackServices)
              .slice(0, 8)
              .map((x, i) => (
                <ServiceCard key={x._id} item={{ ...x, number: `0${i + 1}` }} />
              ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Selected work"
            title="Real products. Real business impact."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((x) => (
              <ProjectCard item={x} key={x._id} />
            ))}
          </div>
          {!projects.length && (
            <div className="rounded-3xl border p-10 text-slate-500">
              Run the backend seed command to load portfolio case studies.
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-brand-mist">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Technology"
            title="A modern stack for products built to last."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tech.map(([name, Icon], i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border bg-white p-6 shadow-sm"
              >
                <Icon className="text-2xl text-brand-blue" />
                <div className="display font-bold mt-8">{name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-ink text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Why HexSoftwares"
            title="Engineering clarity into every stage."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Experienced Developers",
              "Fast Delivery",
              "Clean Architecture",
              "Client Focus",
              "Scalable Solutions",
              "Long-Term Support",
            ].map((x, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={x}
                className={`${i === 0 || i === 5 ? "md:col-span-2" : ""} rounded-3xl border border-white/10 bg-white/5 p-8 min-h-44`}
              >
                <div className="text-brand-lime text-sm font-bold">
                  0{i + 1}
                </div>
                <h3 className="display text-2xl font-bold mt-12">{x}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ["200+", "Projects Delivered"],
            ["150+", "Happy Clients"],
            ["15+", "Countries"],
            ["5+", "Years Experience"],
          ].map(([n, l], i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              key={l}
              className="rounded-3xl border p-7"
            >
              <div className="display text-4xl md:text-5xl font-black text-brand-blue">
                {n}
              </div>
              <p className="mt-3 text-slate-500">{l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Process"
            title="From idea to launch, without the chaos."
          />
          <div className="grid md:grid-cols-7 gap-3">
            {[
              "Discovery",
              "Planning",
              "UI/UX",
              "Development",
              "Testing",
              "Deployment",
              "Support",
            ].map((x, i) => (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border p-5 relative"
                key={x}
              >
                <div className="text-brand-blue text-xs font-bold">
                  0{i + 1}
                </div>
                <div className="font-bold mt-8">{x}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-mist">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Industries"
            title="Digital expertise across ambitious sectors."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((x, i) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={x}
                className="rounded-3xl bg-white p-6 border"
              >
                <FiBriefcase className="text-brand-green" />
                <h3 className="display text-lg font-bold mt-8">{x}</h3>
                <p className="text-sm text-slate-500 mt-2">
                  Modern product and software solutions tailored to industry
                  needs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Client stories"
            title="Trusted relationships, measurable outcomes."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((x) => (
              <TestimonialCard item={x} key={x._id} />
            ))}
          </div>
          {!testimonials.length && (
            <p className="text-slate-500">
              Testimonials appear here after database seeding.
            </p>
          )}
        </div>
      </section>

      <section className="py-24 bg-brand-mist">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <SectionTitle
              eyebrow="Internships"
              title="Learn by building real-world skills."
            />
            <Link
              to="/internships"
              className="font-bold text-brand-blue inline-flex items-center gap-2 mb-10"
            >
              Explore internships <FiArrowUpRight />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {internships.slice(0, 3).map((x) => (
              <div key={x._id} className="rounded-3xl bg-white border p-7">
                <div className="text-xs font-bold text-brand-green">
                  {x.mode} • {x.duration}
                </div>
                <h3 className="display text-xl font-bold mt-5">{x.title}</h3>
                <p className="text-slate-500 mt-3">{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Certificates"
            title="Credentials that are easy to verify."
            copy="Our certificate verification experience lets candidates and employers validate issued credentials directly."
          />
          <div className="rounded-[2rem] border p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <FiAward className="text-4xl text-brand-gold" />
              <h3 className="display text-3xl font-black mt-5">
                Verify a HexSoftwares certificate in seconds.
              </h3>
              <p className="text-slate-500 mt-3">
                Enter the certificate ID and retrieve the verified MongoDB
                record through the Express API.
              </p>
            </div>
            <Link
              to="/certificate-verification"
              className="rounded-full bg-brand-green text-white px-6 py-4 font-bold inline-flex items-center gap-2"
            >
              Verify Certificate <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

  

      
    </main>
  );
}
