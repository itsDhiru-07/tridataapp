import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { InlineWidget } from "react-calendly";
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
  MapPin,
  Sparkles,
  TrendingUp,
  Clock,
  Globe,
  Rocket,
  ArrowLeft
} from 'lucide-react';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950/30 to-emerald-950/20 text-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-2xl border-b border-gradient-to-r from-cyan-500/20 to-emerald-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 rounded-xl flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              DataFlow AI
            </span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Services', href: '#services' },
              { name: 'Process', href: '#process' },
              { name: 'Success', href: '#success' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <motion.a 
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:bg-clip-text transition-all duration-300 font-medium"
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          <motion.button 
            className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book Demo
            </span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-cyan-950/80 to-emerald-950/90 z-10"></div>
          <motion.img 
            src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86" 
            alt="AI Analytics Dashboard"
            className="w-full h-full object-cover opacity-40"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Startup Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Leading Data Transformation Platform</span>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Revolutionize Your
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Data Universe
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We transform enterprises into data-driven powerhouses through cutting-edge AI automation, 
              intelligent engineering, and breakthrough analytics that deliver exponential growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button 
                className="group relative bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 px-10 py-5 rounded-2xl text-white font-semibold text-lg overflow-hidden shadow-2xl shadow-cyan-500/25"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  Start Your Transformation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button 
                className="group border-2 border-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 p-[2px] rounded-2xl hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-slate-950 px-8 py-4 rounded-2xl flex items-center gap-3">
                  <Play className="w-5 h-5 text-cyan-400" />
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text font-semibold text-lg">
                    Watch Live Demo
                  </span>
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { number: "500+", label: "Enterprises Transformed" },
                { number: "10x", label: "Average ROI Increase" },
                { number: "99.9%", label: "Uptime Guarantee" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute ${i % 2 === 0 ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20' : 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20'} rounded-full blur-xl`}
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </section>

      {/* Enhanced Services Section */}
      <EnhancedServicesSection />
      
      {/* Revolutionary Why Choose Us */}
      <RevolutionaryWhyChooseSection />
      
      {/* Enhanced Process Section */}
      <EnhancedProcessSection />
      
      {/* Success Stories */}
      <SuccessStoriesSection />
      
      {/* Rolling Testimonials */}
      <EnhancedRollingTestimonials />
      
      {/* Team Section */}
      <ModernTeamSection />
      
      {/* Calendly Booking Section */}
      <CalendlyBookingSection />
      
      {/* Contact Section */}
      <ModernContactSection />
      
      {/* Footer */}
      <ModernFooter />
    </div>
  );
};

// Enhanced Services Section
const EnhancedServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      subtitle: "Pipeline Mastery",
      description: "Build enterprise-grade data architectures that scale infinitely. From real-time streaming to massive batch processing.",
      features: ["Real-time Pipelines", "Cloud-Native Architecture", "Auto-Scaling Systems", "Zero-Downtime Deployment"],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
      gradient: "from-cyan-500 to-teal-600",
      hoverGradient: "from-cyan-400 to-teal-500"
    },
    {
      icon: Bot,
      title: "AI Automation",
      subtitle: "Intelligent Operations",
      description: "Revolutionary AI systems that think, learn, and optimize your business processes autonomously.",
      features: ["ML Model Deployment", "Intelligent Workflows", "Predictive Automation", "Self-Optimizing Systems"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      gradient: "from-emerald-500 to-cyan-600",
      hoverGradient: "from-emerald-400 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      subtitle: "Insight Revolution",
      description: "Transform raw data into breakthrough insights with next-generation analytics and visualization platforms.",
      features: ["Predictive Modeling", "Real-time Dashboards", "AI-Powered Insights", "Custom Visualizations"],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
      gradient: "from-teal-500 to-emerald-600",
      hoverGradient: "from-teal-400 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Our Expertise</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
            Revolutionary Solutions
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Cutting-edge technologies that redefine what's possible in data transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-8 h-full transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => {}}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`}></div>
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center gap-3 text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                      >
                        <CheckCircle className={`w-5 h-5 text-cyan-400`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className={`group/btn flex items-center gap-3 text-white font-semibold bg-gradient-to-r ${service.gradient} px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Solution
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Revolutionary Why Choose Us Section
const RevolutionaryWhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "10x Faster Deployment",
      metric: "10x",
      description: "Revolutionary automation cuts implementation time from months to weeks with our proven frameworks.",
      gradient: "from-yellow-400 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      metric: "99.99%",
      description: "Enterprise-level protection with zero-trust architecture and advanced threat detection.",
      gradient: "from-green-400 to-cyan-500"
    },
    {
      icon: Target,
      title: "Guaranteed Success",
      metric: "500%",
      description: "Average ROI increase within 12 months or we optimize until you achieve breakthrough results.",
      gradient: "from-cyan-400 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Scale",
      metric: "24/7",
      description: "Worldwide support with local expertise, ensuring your data operations never sleep.",
      gradient: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-emerald-500/5 to-teal-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Why Leading Companies Choose Us</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Breakthrough Performance
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience the difference that true innovation makes in data transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group text-center relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 h-full hover:border-emerald-500/50 transition-all duration-500"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  className={`w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="w-12 h-12 text-white" />
                </motion.div>
                
                <motion.div 
                  className={`text-4xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-4`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {benefit.metric}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Process Section
const EnhancedProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      subtitle: "Deep Dive Analysis",
      description: "We decode your data DNA, identify hidden opportunities, and architect a transformation roadmap.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      features: ["Data Audit", "Opportunity Mapping", "ROI Projections", "Strategic Roadmap"],
      route: "/discovery"
    },
    {
      number: "02", 
      title: "Design & Architecture",
      subtitle: "Blueprint Creation",
      description: "Craft scalable, future-proof architectures that grow with your ambitions and adapt to change.",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      features: ["System Design", "Technology Selection", "Security Framework", "Scalability Planning"],
      route: "/design"
    },
    {
      number: "03",
      title: "Build & Deploy",
      subtitle: "Rapid Implementation",
      description: "Lightning-fast deployment with zero disruption, seamless integration, and immediate value creation.",
      image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
      features: ["Agile Development", "Continuous Integration", "Live Migration", "Performance Optimization"],
      route: "/build"
    },
    {
      number: "04",
      title: "Optimize & Scale",
      subtitle: "Continuous Evolution",
      description: "AI-powered optimization, proactive monitoring, and intelligent scaling for exponential growth.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      features: ["AI Optimization", "Predictive Scaling", "Performance Monitoring", "Continuous Innovation"],
      route: "/optimize"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-slate-900/50 via-cyan-900/30 to-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-xl border border-teal-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-5 h-5 text-teal-400" />
            <span className="text-teal-400 font-medium">Our Process</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
            Transformation Journey
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A systematic approach that guarantees success at every milestone
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <motion.div 
                className="lg:w-1/2 relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-emerald-500/30 to-teal-500/30 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Step Number Overlay */}
                  <motion.div 
                    className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {step.number}
                  </motion.div>
                </div>
              </motion.div>
              
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-bold text-white mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {step.subtitle}
                  </p>
                </div>
                
                <p className="text-xl text-slate-400 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {step.features.map((feature, idx) => (
                    <motion.div 
                      key={feature}
                      className="flex items-center gap-3 text-slate-300 bg-slate-800/30 rounded-xl p-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                <motion.button 
                  onClick={() => navigate(step.route)}
                  className="flex items-center gap-3 text-white font-semibold bg-gradient-to-r from-cyan-500 to-emerald-600 px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Deep Dive Into Step {step.number}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// All other sections remain the same but with updated color scheme...
// Success Stories Section
const SuccessStoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const successStories = [
    {
      company: "TechUnicorn Inc",
      industry: "E-commerce",
      logo: "🦄",
      challenge: "Fragmented data across 100+ systems blocking growth",
      solution: "Unified AI-powered data platform with real-time insights",
      results: ["500% faster reporting", "60% cost reduction", "99.99% uptime", "$50M+ revenue increase"],
      image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg",
      gradient: "from-emerald-500 to-cyan-600"
    },
    {
      company: "NeoFinance",
      industry: "FinTech", 
      logo: "💎",
      challenge: "Manual fraud detection causing $10M+ annual losses",
      solution: "AI-powered real-time fraud prevention system",
      results: ["99.8% fraud detection", "90% false positive reduction", "$25M saved annually", "10x faster processing"],
      image: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg",
      gradient: "from-cyan-500 to-teal-600"
    }
  ];

  return (
    <section id="success" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">Success Stories</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Breakthrough Results
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real transformations from real companies who chose to revolutionize their data strategy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {successStories.map((story, index) => (
            <motion.div
              key={story.company}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-700"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.company}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-60`}></div>
                
                <div className="absolute top-8 left-8 flex items-center gap-4">
                  <div className="text-6xl">{story.logo}</div>
                  <div>
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white font-semibold text-sm">
                      {story.industry}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                  {story.company}
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-cyan-400 font-bold mb-3 text-lg">The Challenge</h4>
                    <p className="text-slate-400 text-lg">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-emerald-400 font-bold mb-3 text-lg">Our Solution</h4>
                    <p className="text-slate-400 text-lg">{story.solution}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-green-400 font-bold mb-4 text-lg">Breakthrough Results</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {story.results.map((result) => (
                      <motion.div 
                        key={result} 
                        className="flex items-center gap-3 text-slate-300 bg-slate-800/50 rounded-xl p-3"
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="font-medium">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Rolling Testimonials
const EnhancedRollingTestimonials = () => {
  const testimonials = [
    {
      name: "Alexandra Chen",
      title: "Chief Technology Officer",
      company: "TechVanguard",
      content: "DataFlow AI didn't just transform our data infrastructure - they revolutionized our entire business model. Absolutely phenomenal results.",
      avatar: "AC",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "VP of Engineering",
      company: "InnovateNow",
      content: "The AI automation solutions are mind-blowing. We're processing 1000% more data with 50% fewer resources. Game-changing technology.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Sarah Kim",
      title: "Data Science Director",
      company: "FutureScale",
      content: "Their predictive models are incredibly accurate. We're now anticipating market changes weeks ahead of our competition.",
      avatar: "SK",
      rating: 5
    },
    {
      name: "David Park",
      title: "Chief Data Officer",
      company: "DataFirst Corp",
      content: "Implementation was seamless, results were immediate. The ROI exceeded our wildest expectations within the first quarter.",
      avatar: "DP",
      rating: 5
    },
    {
      name: "Emily Johnson",
      title: "Head of Analytics",
      company: "SmartGrowth",
      content: "Working with DataFlow AI feels like having a team of data wizards. They make the impossible look effortless.",
      avatar: "EJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "VP Technology",
      company: "NextGen Solutions",
      content: "The level of expertise and innovation is unmatched. They turned our data chaos into our competitive advantage.",
      avatar: "MC",
      rating: 5
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-emerald-500/20 backdrop-blur-xl border border-pink-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-medium">Client Love</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
            Raving Reviews
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            See what industry leaders are saying about their transformation experience
          </p>
        </motion.div>
      </div>

      {/* Enhanced Rolling Container */}
      <div className="relative">
        <motion.div 
          className="flex space-x-8 animate-scroll-enhanced"
          style={{ width: 'max-content' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-96 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Enhanced Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced Quote */}
              <blockquote className="text-slate-300 text-lg leading-relaxed mb-8 min-h-[120px] font-medium">
                "{testimonial.content}"
              </blockquote>
              
              {/* Enhanced Author Info */}
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm font-semibold">{testimonial.title}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Gradient Overlays */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Enhanced Client Logos */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-lg font-medium">Trusted by innovative companies worldwide</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {['TechVanguard', 'InnovateNow', 'FutureScale', 'DataFirst', 'SmartGrowth', 'NextGen'].map((company, index) => (
            <motion.div
              key={company}
              className="text-slate-500 font-bold text-2xl hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:bg-clip-text transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.2, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Modern Team Section
const ModernTeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Our Team</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            World-Class Experts
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The brightest minds in data science, AI, and engineering working together to transform your business
          </p>
        </motion.div>

        <motion.div 
          className="relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
              alt="Our Expert Team"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-emerald-900/90"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-8">
                <motion.h3 
                  className="text-5xl md:text-6xl font-bold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  100+ Data Experts
                </motion.h3>
                
                <p className="text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Average 15+ years of experience in enterprise data transformation
                </p>
                
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
                  {[
                    { label: "PhD Data Scientists", count: "25+" },
                    { label: "Cloud Architects", count: "30+" },
                    { label: "AI Specialists", count: "45+" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        {stat.count}
                      </div>
                      <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button 
                  className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-600 px-10 py-4 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet Our Experts
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Calendly Booking Section
const CalendlyBookingSection = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-teal-500/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Book Your Consultation</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
            Ready to Transform?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            Schedule a free strategy session with our data transformation experts
          </p>
          
          {!showCalendly ? (
            <motion.button 
              onClick={() => setShowCalendly(true)}
              className="group bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-600 px-12 py-6 rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-4">
                <Calendar className="w-6 h-6" />
                Schedule Free Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
          ) : (
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <InlineWidget 
                url="https://calendly.com/your-calendly-username/data-consultation" 
                styles={{
                  height: '700px',
                  borderRadius: '24px'
                }}
              />
            </motion.div>
          )}
        </motion.div>
        
        {/* Value Props */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { icon: Clock, title: "30-Minute Strategy Call", desc: "Deep dive into your data challenges" },
            { icon: Target, title: "Custom Roadmap", desc: "Tailored transformation plan" },
            { icon: Rocket, title: "Quick Wins Identified", desc: "Immediate value opportunities" }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Modern Contact Section
const ModernContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-cyan-900/50 to-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
            Let's Build the Future
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to revolutionize your data strategy? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { icon: Mail, title: "Email Us", detail: "hello@dataflowai.com", gradient: "from-cyan-500 to-teal-600" },
              { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567", gradient: "from-emerald-500 to-cyan-600" },
              { icon: MapPin, title: "Visit Us", detail: "San Francisco, CA", gradient: "from-green-500 to-emerald-600" }
            ].map((contact, index) => (
              <motion.div 
                key={contact.title}
                className="flex items-center gap-6 group"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <contact.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{contact.title}</h3>
                  <p className="text-slate-400 text-lg">{contact.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-white font-semibold mb-3 text-lg">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900/50 border-2 border-slate-600 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-white font-semibold mb-3 text-lg">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-900/50 border-2 border-slate-600 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-white font-semibold mb-3 text-lg">Company</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900/50 border-2 border-slate-600 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                  placeholder="Your company"
                />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-white font-semibold mb-3 text-lg">Project Details</label>
                <textarea 
                  rows="5"
                  className="w-full bg-slate-900/50 border-2 border-slate-600 rounded-xl px-6 py-4 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your data transformation goals..."
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-600 py-5 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
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

// Modern Footer
const ModernFooter = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div 
            className="mb-8 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 rounded-xl flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                DataFlow AI
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-md">Transforming enterprises through revolutionary data solutions and AI innovation</p>
          </motion.div>
          
          <div className="flex space-x-12">
            {[
              { name: 'Services', href: '#services' },
              { name: 'Process', href: '#process' },
              { name: 'Success', href: '#success' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <motion.a 
                key={item.name}
                href={item.href} 
                className="text-slate-400 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:bg-clip-text transition-all duration-300 text-lg font-medium"
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-lg">&copy; 2024 DataFlow AI. All rights reserved. Built for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default HomePage;