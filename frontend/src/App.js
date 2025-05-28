import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ChevronRight, 
  Database, 
  Bot, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Play,
  Star,
  Award,
  Zap,
  Shield,
  Target,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import './App.css';

const App = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            DataFlow AI
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Services', 'Process', 'Case Studies', 'About', 'Contact'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950/95 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86" 
            alt="Analytics Dashboard"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Transform Your Business with
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                AI-Powered Data Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We help enterprises unlock the power of their data through cutting-edge engineering, 
              intelligent automation, and actionable analytics that drive real business results.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Transformation
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Services Section */}
      <ServicesSection />
      
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Case Studies */}
      <CaseStudiesSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust, scalable data pipelines that transform raw data into business-ready insights. From ETL/ELT processes to real-time streaming architectures.",
      features: ["Pipeline Architecture", "ETL/ELT Solutions", "Data Warehousing", "Real-time Processing"],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline operations, reduce costs, and accelerate decision-making across your organization.",
      features: ["ML Model Deployment", "Workflow Automation", "Intelligent Processing", "AI Integration"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Transform data into actionable insights with advanced analytics, predictive modeling, and intuitive business intelligence dashboards.",
      features: ["Predictive Analytics", "Business Intelligence", "Custom Dashboards", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            End-to-end data solutions that drive innovation and growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 h-full hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group-hover:border-cyan-500/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Implementation",
      description: "Get up and running 60% faster with our proven methodologies and pre-built frameworks."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level security protocols and compliance standards protect your most valuable asset - your data."
    },
    {
      icon: Target,
      title: "Guaranteed ROI",
      description: "Our clients see an average 300% ROI within 12 months through optimized operations and insights."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Trusted by Fortune 500 companies and recognized as leaders in data transformation."
    }
  ];

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Leading Companies Choose Us
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience the difference that true expertise makes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <benefit.icon className="w-10 h-10 text-cyan-400" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current data landscape, identify opportunities, and define clear objectives.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      number: "02", 
      title: "Strategy & Architecture",
      description: "Design a comprehensive data strategy and technical architecture tailored to your needs.",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg"
    },
    {
      number: "03",
      title: "Implementation & Integration",
      description: "Deploy solutions with minimal disruption while ensuring seamless integration with existing systems.",
      image: "https://images.unsplash.com/photo-1511376777868-611b54f68947"
    },
    {
      number: "04",
      title: "Optimization & Scale",
      description: "Continuously monitor, optimize, and scale your data infrastructure for maximum impact.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Our Proven Process
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A systematic approach that ensures success at every step
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xl text-slate-400 leading-relaxed">
                  {step.description}
                </p>
                <motion.button 
                  className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More About This Step
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Studies Section
const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      company: "Global Retail Chain",
      industry: "E-commerce",
      challenge: "Fragmented data across 50+ systems",
      solution: "Unified data platform with real-time analytics",
      results: ["300% faster reporting", "40% cost reduction", "99.9% uptime"],
      image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg"
    },
    {
      company: "FinTech Startup",
      industry: "Financial Services", 
      challenge: "Manual fraud detection processes",
      solution: "AI-powered fraud detection system",
      results: ["95% fraud detection rate", "60% false positive reduction", "$2M saved annually"],
      image: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg"
    }
  ];

  return (
    <section id="case-studies" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Success Stories
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real results from real companies who transformed their business with our solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-900/80"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {study.company}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Challenge</h4>
                    <p className="text-slate-400">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Solution</h4>
                    <p className="text-slate-400">{study.solution}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Results</h4>
                  {study.results.map((result) => (
                    <div key={result} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO, TechCorp",
      company: "Fortune 500 Technology Company",
      content: "DataFlow AI transformed our entire data infrastructure. The team's expertise and attention to detail exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "VP of Analytics",
      company: "Global Financial Services",
      content: "The AI automation solutions have revolutionized our operations. We're now making data-driven decisions in real-time.",
      image: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg",
      rating: 5
    },
    {
      name: "Emily Johnson",
      title: "Data Director",
      company: "Healthcare Innovation",
      content: "Outstanding partnership from day one. The team understood our complex requirements and delivered beyond expectations.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the leaders who've transformed their businesses
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.title}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            World-class data scientists, engineers, and strategists dedicated to your success
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
              alt="Our Team"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  50+ Data Experts
                </h3>
                <p className="text-xl text-slate-300 mb-6">
                  Average 10+ years of experience in enterprise data solutions
                </p>
                <motion.button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet The Team
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Let's discuss how we can help you unlock the full potential of your data
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-slate-400">hello@dataflowai.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your data challenges..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              DataFlow AI
            </div>
            <p className="text-slate-400">Transforming businesses through intelligent data solutions</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Services</a>
            <a href="#process" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Process</a>
            <a href="#case-studies" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Case Studies</a>
            <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 DataFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;