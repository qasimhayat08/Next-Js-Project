export default function Home() {
  const services = [
    {
      number: "01",
      icon: "💻",
      title: "Web Development",
      description:
        "We build modern, responsive and high-performance websites that help businesses establish a strong online presence.",
      tags: ["Next.js", "React", "JavaScript"],
    },
    {
      number: "02",
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Clean, modern and user-friendly interfaces designed to give your customers a smooth and memorable experience.",
      tags: ["Figma", "UI Design", "UX Research"],
    },
    {
      number: "03",
      icon: "🛒",
      title: "E-Commerce",
      description:
        "Powerful online stores with product management, shopping carts, checkout systems and secure payment integrations.",
      tags: ["Shopify", "WooCommerce", "Custom"],
    },
    {
      number: "04",
      icon: "⚙️",
      title: "Web Applications",
      description:
        "Custom web applications built around your business requirements with scalable architecture and modern technologies.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      number: "05",
      icon: "📱",
      title: "Responsive Design",
      description:
        "Websites that look beautiful and work perfectly across mobile phones, tablets, laptops and large desktop screens.",
      tags: ["Mobile", "Tablet", "Desktop"],
    },
    {
      number: "06",
      icon: "🚀",
      title: "Website Optimization",
      description:
        "Improve loading speed, performance, SEO and overall user experience of your existing website.",
      tags: ["SEO", "Speed", "Performance"],
    },
  ];

  const technologies = [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "WordPress",
    "Figma",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "EstateHub",
      category: "Real Estate Platform",
      description:
        "A modern property marketplace where users can discover properties, view details, contact owners and manage favorites.",
      gradient: "from-blue-500/20 to-cyan-500/10",
      icon: "🏠",
    },
    {
      title: "FoodieHub",
      category: "Food Delivery",
      description:
        "A complete restaurant and food ordering platform with menus, cart, checkout, authentication and order management.",
      gradient: "from-orange-500/20 to-red-500/10",
      icon: "🍔",
    },
    {
      title: "Resume Analyzer",
      category: "AI Web Application",
      description:
        "An AI-powered resume analysis platform that evaluates resumes and provides useful skills and improvement suggestions.",
      gradient: "from-purple-500/20 to-blue-500/10",
      icon: "📄",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Business Owner",
      text: "The website looks professional, loads quickly and works perfectly on mobile. The overall experience was excellent.",
      avatar: "AK",
    },
    {
      name: "Sarah Williams",
      role: "Startup Founder",
      text: "They understood our requirements and transformed our idea into a beautiful and functional web application.",
      avatar: "SW",
    },
    {
      name: "Usman Ali",
      role: "E-Commerce Owner",
      text: "Very clean design and great communication throughout the project. I would definitely work with them again.",
      avatar: "UA",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the size and complexity of the project. A simple business website can take a few days, while a custom web application may require several weeks.",
    },
    {
      question: "Do you build responsive websites?",
      answer:
        "Yes. Every website is designed to work smoothly across mobile, tablet, laptop and desktop devices.",
    },
    {
      question: "Can you build custom web applications?",
      answer:
        "Yes. We can build custom applications with authentication, dashboards, APIs, databases, CRUD operations and other business features.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes. We can help with updates, bug fixes, performance improvements, content changes and ongoing website maintenance.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. Existing websites can be redesigned with a modern interface, better responsiveness, improved performance and a cleaner user experience.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* NAVBAR*/}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-black shadow-lg shadow-cyan-500/20">
              N
            </div>

            <div>
              <div className="text-lg font-bold">
                Next<span className="text-cyan-400">Services</span>
              </div>

              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Digital Solutions
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            <a href="#home" className="text-sm text-slate-300 transition hover:text-cyan-400">
              Home
            </a>

            <a href="#services" className="text-sm text-slate-300 transition hover:text-cyan-400">
              Services
            </a>

            <a href="#work" className="text-sm text-slate-300 transition hover:text-cyan-400">
              Our Work
            </a>

            <a href="#process" className="text-sm text-slate-300 transition hover:text-cyan-400">
              Process
            </a>

            <a href="#pricing" className="text-sm text-slate-300 transition hover:text-cyan-400">
              Pricing
            </a>

            <a href="#contact" className="text-sm text-slate-300 transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Let's Talk
          </a>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-8"
      >

        {/* Background Glow */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Hero Content */}

          <div>

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Your Digital Growth Partner
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              We build digital

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                experiences that
              </span>

              <span className="block">
                grow businesses.
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              From beautiful websites to powerful web applications, we help
              businesses turn ideas into modern digital products that are
              fast, scalable and built for real-world results.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#services"
                className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
              >
                Explore Services
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#work"
                className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800"
              >
                View Our Work
              </a>

            </div>

            {/* Trust */}

            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-slate-800 pt-8">

              <div>
                <div className="text-2xl font-black">50+</div>
                <div className="mt-1 text-sm text-slate-500">
                  Projects Delivered
                </div>
              </div>

              <div>
                <div className="text-2xl font-black">30+</div>
                <div className="mt-1 text-sm text-slate-500">
                  Happy Clients
                </div>
              </div>

              <div>
                <div className="text-2xl font-black">4+</div>
                <div className="mt-1 text-sm text-slate-500">
                  Years Experience
                </div>
              </div>

            </div>

          </div>


          {/* Hero Visual */}

          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">

              {/* Browser */}

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

                <div className="mb-7 flex items-center justify-between">

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="rounded-lg bg-slate-900 px-5 py-2 text-xs text-slate-500">
                    nextservices.dev
                  </div>

                </div>

                <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-7">

                  <div className="mb-4 text-sm font-medium text-cyan-400">
                    DIGITAL SOLUTIONS
                  </div>

                  <h2 className="text-3xl font-black">
                    Build.
                    <br />
                    Launch.
                    <br />
                    <span className="text-cyan-400">Grow.</span>
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    Modern technology for ambitious businesses.
                  </p>

                  <div className="mt-7 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
                  </div>

                  <div className="mt-3 flex justify-between text-xs text-slate-500">
                    <span>Project Progress</span>
                    <span>85%</span>
                  </div>

                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
                    <div className="text-xl">⚡</div>
                    <div className="mt-2 text-xs text-slate-400">
                      Fast
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
                    <div className="text-xl">🎨</div>
                    <div className="mt-2 text-xs text-slate-400">
                      Modern
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
                    <div className="text-xl">🚀</div>
                    <div className="mt-2 text-xs text-slate-400">
                      Scalable
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="border-t border-slate-800 bg-slate-900/40 px-6 py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Services designed for
              <span className="text-cyan-400"> growth.</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              We combine design, development and technology to create digital
              solutions that solve real business problems.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
              >

                <div className="absolute right-6 top-5 text-5xl font-black text-slate-900 transition group-hover:text-cyan-400/10">
                  {service.number}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-2xl">
                  {service.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                  Learn more
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= TECHNOLOGIES ================= */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Our Technology
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Built with modern technology
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              We use reliable and modern technologies to build applications
              that are fast, secure and easy to maintain.
            </p>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">

            {technologies.map((technology) => (

              <div
                key={technology}
                className="rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                {technology}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section
        id="about"
        className="border-y border-slate-800 bg-slate-900/30 px-6 py-28 lg:px-8"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              More than just
              <span className="text-cyan-400"> development.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              We focus on understanding your business, your customers and
              your goals before creating a digital solution.
            </p>

            <div className="mt-9 space-y-5">

              {[
                "Clean and professional designs",
                "Mobile-first responsive development",
                "Fast and optimized websites",
                "Scalable architecture",
                "Clear communication",
                "Long-term technical support",
              ].map((item) => (

                <div key={item} className="flex items-center gap-4">

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm text-cyan-400">
                    ✓
                  </div>

                  <span className="text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7">
              <div className="text-4xl font-black text-cyan-400">50+</div>
              <p className="mt-2 text-sm text-slate-500">
                Projects Completed
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-950 p-7">
              <div className="text-4xl font-black text-blue-400">30+</div>
              <p className="mt-2 text-sm text-slate-500">
                Satisfied Clients
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7">
              <div className="text-4xl font-black text-purple-400">99%</div>
              <p className="mt-2 text-sm text-slate-500">
                Client Satisfaction
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-950 p-7">
              <div className="text-4xl font-black text-green-400">24/7</div>
              <p className="mt-2 text-sm text-slate-500">
                Support
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section
        id="process"
        className="px-6 py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              From idea to launch
            </h2>

            <p className="mt-5 text-slate-400">
              A simple and transparent process designed to turn your idea
              into a successful digital product.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your goals, requirements, audience and business needs.",
              },
              {
                number: "02",
                title: "Design",
                text: "We create a clean and modern design focused on usability and conversion.",
              },
              {
                number: "03",
                title: "Develop",
                text: "Our developers transform the design into a fast and scalable product.",
              },
              {
                number: "04",
                title: "Launch",
                text: "After testing and optimization, your product is ready to go live.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
              >

                <div className="text-5xl font-black text-cyan-400/20">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="work"
        className="border-y border-slate-800 bg-slate-900/30 px-6 py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                Featured Work
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Projects we're proud of
              </h2>

            </div>

            <a
              href="#contact"
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Start a project →
            </a>

          </div>


          <div className="mt-14 grid gap-7 lg:grid-cols-3">

            {projects.map((project) => (

              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
              >

                <div
                  className={`relative flex h-64 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >

                  <div className="text-8xl transition duration-500 group-hover:scale-110">
                    {project.icon}
                  </div>

                  <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs text-slate-300 backdrop-blur">
                    {project.category}
                  </div>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <button className="mt-6 font-semibold text-cyan-400 transition hover:text-cyan-300">
                    View Case Study →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PRICING ================= */}

      <section
        id="pricing"
        className="px-6 py-28 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Simple Pricing
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Choose your package
            </h2>

            <p className="mt-5 text-slate-400">
              Flexible solutions for startups, businesses and growing
              companies.
            </p>

          </div>


          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {/* Basic */}

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">

              <p className="text-sm font-semibold text-slate-400">
                STARTER
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Basic Website
              </h3>

              <p className="mt-3 text-slate-500">
                Perfect for individuals and small businesses.
              </p>

              <div className="mt-7 text-4xl font-black">
                $199
              </div>

              <div className="mt-7 space-y-4">

                {[
                  "Up to 5 pages",
                  "Responsive design",
                  "Contact form",
                  "Basic SEO",
                  "Social media links",
                  "7 days support",
                ].map((item) => (

                  <div key={item} className="flex gap-3 text-sm text-slate-400">
                    <span className="text-cyan-400">✓</span>
                    {item}
                  </div>

                ))}

              </div>

              <a
                href="#contact"
                className="mt-8 block rounded-xl border border-slate-700 py-3 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Get Started
              </a>

            </div>


            {/* Standard */}

            <div className="relative rounded-3xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 to-slate-950 p-8 shadow-2xl shadow-cyan-500/10">

              <div className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                POPULAR
              </div>

              <p className="text-sm font-semibold text-cyan-400">
                BUSINESS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Professional
              </h3>

              <p className="mt-3 text-slate-400">
                For businesses that need more powerful features.
              </p>

              <div className="mt-7 text-4xl font-black">
                $499
              </div>

              <div className="mt-7 space-y-4">

                {[
                  "Up to 10 pages",
                  "Premium responsive design",
                  "CMS integration",
                  "Advanced SEO",
                  "Animations",
                  "Speed optimization",
                  "30 days support",
                ].map((item) => (

                  <div key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-cyan-400">✓</span>
                    {item}
                  </div>

                ))}

              </div>

              <a
                href="#contact"
                className="mt-8 block rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 py-3 text-center font-bold text-slate-950 transition hover:-translate-y-1"
              >
                Choose Package
              </a>

            </div>


            {/* Premium */}

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">

              <p className="text-sm font-semibold text-purple-400">
                ADVANCED
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Web Application
              </h3>

              <p className="mt-3 text-slate-500">
                For startups and businesses requiring custom solutions.
              </p>

              <div className="mt-7 text-4xl font-black">
                $999+
              </div>

              <div className="mt-7 space-y-4">

                {[
                  "Custom UI/UX",
                  "Authentication",
                  "Database integration",
                  "REST APIs",
                  "Admin dashboard",
                  "Custom functionality",
                  "90 days support",
                ].map((item) => (

                  <div key={item} className="flex gap-3 text-sm text-slate-400">
                    <span className="text-purple-400">✓</span>
                    {item}
                  </div>

                ))}

              </div>

              <a
                href="#contact"
                className="mt-8 block rounded-xl border border-slate-700 py-3 text-center font-semibold transition hover:border-purple-400 hover:text-purple-400"
              >
                Discuss Project
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}

      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-28 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Client Reviews
            </p>

            <h2 className="mt-4 text-4xl font-black">
              What our clients say
            </h2>

          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {testimonials.map((testimonial) => (

              <div
                key={testimonial.name}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-8"
              >

                <div className="text-lg tracking-widest text-yellow-400">
                  ★★★★★
                </div>

                <p className="mt-6 leading-7 text-slate-400">
                  "{testimonial.text}"
                </p>

                <div className="mt-7 flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-slate-950">
                    {testimonial.avatar}
                  </div>

                  <div>
                    <div className="font-bold">
                      {testimonial.name}
                    </div>

                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="px-6 py-28 lg:px-8">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Frequently asked questions
            </h2>

          </div>


          <div className="mt-14 space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >

                <summary className="cursor-pointer list-none text-lg font-semibold">
                  <div className="flex items-center justify-between gap-5">

                    <span>{faq.question}</span>

                    <span className="text-2xl text-cyan-400 transition group-open:rotate-45">
                      +
                    </span>

                  </div>
                </summary>

                <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT CTA ================= */}

      <section id="contact" className="px-6 pb-28 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 px-6 py-20 text-center">

          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Let's Work Together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black sm:text-5xl lg:text-6xl">
              Have an idea?
              <span className="block text-cyan-400">
                Let's build it.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us about your project, your goals and what you want to
              achieve. Let's turn your idea into a powerful digital
              experience.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="mailto:hello@nextservices.dev"
                className="rounded-xl bg-white px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Start a Conversation
              </a>

              <a
                href="#services"
                className="rounded-xl border border-slate-700 bg-slate-900/70 px-8 py-4 font-bold transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                Explore Services
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-14 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

          <div className="md:col-span-2">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-black text-slate-950">
                N
              </div>

              <div className="text-xl font-bold">
                Next<span className="text-cyan-400">Services</span>
              </div>

            </div>

            <p className="mt-5 max-w-md leading-7 text-slate-500">
              We create modern websites, web applications and digital
              experiences that help businesses grow online.
            </p>

          </div>


          <div>

            <h3 className="font-bold">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">

              <a href="#services" className="block hover:text-cyan-400">
                Web Development
              </a>

              <a href="#services" className="block hover:text-cyan-400">
                UI/UX Design
              </a>

              <a href="#services" className="block hover:text-cyan-400">
                E-Commerce
              </a>

              <a href="#services" className="block hover:text-cyan-400">
                Web Applications
              </a>

            </div>

          </div>


          <div>

            <h3 className="font-bold">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500">

              <a href="#about" className="block hover:text-cyan-400">
                About Us
              </a>

              <a href="#work" className="block hover:text-cyan-400">
                Our Work
              </a>

              <a href="#pricing" className="block hover:text-cyan-400">
                Pricing
              </a>

              <a href="#contact" className="block hover:text-cyan-400">
                Contact
              </a>

            </div>

          </div>

        </div>


        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-800 pt-7 text-sm text-slate-600 sm:flex-row">

          <p>
            © 2026 NextServices. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="font-semibold text-slate-400">
              Next.js
            </span>{" "}
            &{" "}
            <span className="font-semibold text-cyan-400">
              Tailwind CSS
            </span>
          </p>

        </div>

      </footer>

    </main>
  );
}