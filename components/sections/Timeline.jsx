'use client';

import { useRef, useState, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faBriefcase, faChalkboardTeacher, faMicroscope } from '@fortawesome/free-solid-svg-icons';

// Lazy load Three.js component
const AxonalPathway = lazy(() => import('@/components/three/AxonalPathway'));

// Milestones in reverse chronological order (most recent first)
const milestones = [
  {
    year: 'May 2025 – Present',
    title: 'Software Developer',
    company: 'INVIDI Technologies',
    location: 'Edmonton, Canada',
    description: 'Working on large-scale backend systems that power advertising and content distribution platforms used by major media providers. Building and maintaining high-reliability microservices, improving system correctness, and supporting production workloads in a complex distributed environment.',
    icon: faCode,
    skills: ['Kotlin', 'Java', 'Microservices', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    highlight: 'Production systems at scale',
    current: true,
  },
  {
    year: 'May 2024 – May 2025',
    title: 'Software Developer Intern',
    company: 'INVIDI Technologies',
    location: 'Edmonton, Canada',
    description: 'Embedded full-time within the backend engineering team, contributing production code from early on. Worked extensively on backend microservices written in Kotlin and Java, supporting features related to campaign management, distributor asset mappings, and data transformations.',
    icon: faCode,
    skills: ['Kotlin', 'Java', 'AWS', 'Docker', 'Kubernetes', 'Testing'],
    highlight: '40% latency reduction in ad-targeting pipelines',
  },
  {
    year: 'May 2024 – Dec 2024',
    title: 'Undergraduate Research Assistant',
    company: 'University of Alberta',
    location: 'Edmonton, Canada',
    description: 'Worked on research projects involving machine learning and data analysis, contributing to experimentation, model development, and result evaluation. Collaborated closely with graduate students and faculty, gaining experience in reading academic papers, implementing models, and iterating on experimental setups.',
    icon: faMicroscope,
    skills: ['Python', 'Machine Learning', 'Research', 'Data Analysis'],
    highlight: 'Privacy-preserving ML: Local Differential Privacy on Graph Neural Networks',
  },
  {
    year: 'Jan 2024 – Apr 2024',
    title: 'Teaching Assistant',
    company: 'University of Alberta',
    location: 'Edmonton, Canada',
    description: 'Supported students in understanding foundational ML concepts such as supervised learning, model evaluation, and data preprocessing. Led lab sessions, answered technical questions, and helped students debug Python-based ML assignments.',
    icon: faChalkboardTeacher,
    skills: ['Machine Learning', 'Python', 'Teaching', 'Mentoring'],
    highlight: 'CMPUT 267: Basics of Machine Learning',
  },
  {
    year: 'May 2023 – August 2023',
    title: 'Software Developer Intern',
    company: 'Tata Consulting Engineers Limited',
    location: 'India',
    description: 'Worked in a consulting environment supporting internal software tools and data-driven workflows. Contributed to the development of automation scripts and backend utilities that helped streamline engineering and reporting processes.',
    icon: faBriefcase,
    skills: ['Python', 'Data Processing', 'Automation', 'Backend Development'],
    highlight: 'ML models (ARIMA/SARIMA) for inventory forecasting',
  },
];

function TimelineItem({ milestone, index, isLeft }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      className={`relative flex items-center gap-8 mb-12 md:mb-16 ${
        isLeft ? 'md:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 50 : -50 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
        <div
          className={`relative p-6 md:p-8 liquid-glass hover-card group ${
            milestone.current ? 'shadow-glass-glow' : ''
          }`}
        >
          {/* Current Badge - inside the card */}
          {milestone.current && (
            <div className={`mb-4 ${isLeft ? 'md:text-right' : ''}`}>
              <span className="inline-block px-4 py-1.5 text-xs font-mono bg-gradient-to-r from-neural-blue to-synapse-cyan text-white rounded-full shadow-glow-blue">
                ✦ Current Role
              </span>
            </div>
          )}

          {/* Year Badge */}
          <span className="inline-block px-3 py-1 text-sm font-mono bg-neural-blue/10 text-neural-blue rounded-full mb-4">
            {milestone.year}
          </span>

          {/* Title & Company */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-light-text dark:text-ghost-white mb-2">
            {milestone.title}
          </h3>
          <p className="text-neural-blue font-medium mb-1">{milestone.company}</p>
          <p className="text-sm text-light-text-secondary dark:text-muted-steel mb-4">
            {milestone.location}
          </p>

          {/* Description */}
          <p className="text-light-text-secondary dark:text-muted-steel mb-4 leading-relaxed">
            {milestone.description}
          </p>

          {/* Highlight */}
          <p className="text-sm font-medium text-synapse-cyan mb-4">
            {milestone.highlight}
          </p>

          {/* Skills */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
            {milestone.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs font-mono bg-light-border dark:bg-slate-700/50 text-light-text-secondary dark:text-muted-steel rounded"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Decorative corner */}
          <div
            className={`absolute -bottom-2 ${
              isLeft ? '-left-2' : '-right-2'
            } w-12 h-12 border-2 border-neural-blue/10 rounded-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500`}
          />
        </div>
      </div>

      {/* Center Icon (Desktop) */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            milestone.current
              ? 'bg-gradient-to-br from-neural-blue to-synapse-cyan text-white'
              : 'bg-light-surface dark:bg-midnight-steel border-2 border-neural-blue/30 text-neural-blue'
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon icon={milestone.icon} className="w-6 h-6" />
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function Timeline({ className = '' }) {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Scroll progress for Three.js integration
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Bridge scroll progress to Three.js
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollProgress(latest);
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className={`relative py-24 md:py-32 overflow-x-clip overflow-y-visible ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Three.js Axonal Pathway */}
        <Suspense fallback={null}>
          <AxonalPathway
            scrollProgress={scrollProgress}
            className="opacity-70 dark:opacity-60"
          />
        </Suspense>

        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neural-blue/10 dark:bg-neural-blue/5 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-plasma-purple/10 dark:bg-plasma-purple/5 rounded-full filter blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-plasma-purple/10 text-plasma-purple text-sm font-mono mb-4 border border-plasma-purple/20">
            {'// Career Journey'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light-text dark:text-ghost-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neural-blue to-plasma-purple">Career Journey</span>
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-muted-steel max-w-2xl mx-auto">
            From internships to full-time development—building scalable systems and contributing to impactful projects
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-light-border dark:bg-slate-700/50 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neural-blue to-synapse-cyan"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-light-border dark:bg-slate-700/50">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neural-blue to-synapse-cyan"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={index}
                milestone={milestone}
                index={index}
                isLeft={index % 2 === 1}
              />
            ))}
          </div>

          {/* End Marker */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-neural-blue to-synapse-cyan animate-pulse" />
          </motion.div>
        </div>

        {/* Origin Section */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-light-text-secondary dark:text-muted-steel mb-2">
            Where it all began...
          </p>
          <p className="text-lg font-medium text-neural-blue">
            Every expert was once a beginner
          </p>
        </motion.div>
      </div>
    </section>
  );
}
