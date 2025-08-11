"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Linkedin, Mail, Phone, MapPin, Code, Users, Trophy, GraduationCap, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              My Profile
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {["home", "about", "education", "experience", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors text-sm font-medium ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 dark:from-blue-600/20 dark:to-indigo-600/20" />
        </motion.div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Megat Syakir Raif"
                width={160}
                height={160}
                className="rounded-full border-4 border-white dark:border-slate-700 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 animate-pulse" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Megat Syakir Raif
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
              Computer Science Student & Aspiring Developer
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Motivated Computer Science student at UiTM with strong leadership experience and a passion for developing
              practical solutions. Currently seeking internship opportunities to apply my technical skills in real-world
              projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("experience")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full"
              >
                View My Experience
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 rounded-full border-2 bg-white text-slate-900"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Ampang, Selangor</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm">CGPA: 3.69</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Profile</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Motivated and disciplined Computer Science student with a strong interest in developing practical
                    skills through real-world experience. Comfortable working independently or in teams, and always open
                    to learning from more experienced peers and mentors.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Committed to continuous improvement, with a focus on writing clean, efficient code and understanding
                    the bigger picture behind technical solutions. Seeking an opportunity to grow in a collaborative
                    environment while contributing wherever possible.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Languages
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300">English</span>
                      <Badge variant="secondary">Fluent</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300">Malay</span>
                      <Badge variant="secondary">Fluent</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-blue-600" />
                    Achievement
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Best Participant Award for State-Level Student Leadership Program
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white dark:bg-slate-800">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Universiti Teknologi MARA (UiTM Kampus Jasin)
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        Diploma in Computer Science
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-sm">
                        2023 - Present
                      </Badge>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold text-slate-900 dark:text-white">CGPA: 3.69</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white dark:bg-slate-800">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">SMK Taman Setiawangsa</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        Sijil Pelajaran Malaysia (SPM) - Pure Science Stream
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-sm">
                        2018 - 2022
                      </Badge>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">2A+, 3A, 2B+, 2B</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Leadership Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Vice Program Director",
                organization: "Donation to Primary School Students",
                period: "2025",
                achievements: [
                  "Led a team to organize and execute a donation drive benefiting underserved primary school students",
                  "Applied prior leadership and event management experience to ensure smooth project execution",
                  "Successfully raised donations through targeted outreach and collaboration with donors",
                ],
              },
              {
                title: "Sports And Recreation Exco",
                organization: "Sekretariat Majlis Perwakilan Pelajar",
                period: "2023 - 2024",
                achievements: [
                  "Part of the university's largest student body, managing sports and recreation events",
                  "Served as event protocol lead and regular emcee for major programs",
                  "Gained experience working under high-pressure environments and tight deadlines",
                  "Developed strong teamwork, time management, and communication skills",
                ],
              },
              {
                title: "Vice Treasurer",
                organization: "Campus Election Committee, UiTM Melaka Branch",
                period: "2024 - 2025",
                achievements: [
                  "Assisted in budgeting, tracking expenses, and managing finances for campus election events",
                  "Collaborated with UiTM staff to ensure compliance with financial guidelines",
                  "Acquired practical knowledge in financial planning and reporting",
                ],
              },
              {
                title: "Head Of Prefect",
                organization: "SMK Taman Setiawangsa",
                period: "2022",
                achievements: [
                  "Strengthened leadership, teamwork, and public speaking skills through daily responsibilities",
                  "Received Best Participant Award for the State-Level Student Leadership Program",
                ],
              },
            ].map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{experience.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{experience.organization}</p>
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {experience.period}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white dark:bg-slate-800 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { name: "C++", level: 85 },
                    { name: "Java", level: 80 },
                    { name: "JavaScript", level: 75 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white dark:bg-slate-800 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    Web Technologies & Database
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { name: "HTML", level: 90 },
                    { name: "CSS", level: 85 },
                    { name: "MySQL", level: 80 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              I'm actively seeking internship opportunities where I can apply my technical skills and contribute to
              meaningful projects. Let's discuss how I can add value to your team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white dark:bg-slate-800">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600 dark:text-slate-300">012 - 756 6402</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600 dark:text-slate-300">megatsyakir.raif@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600 dark:text-slate-300">
                        Taman Sering Ukay, 68000, Ampang, Selangor
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white dark:bg-slate-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Reference</h3>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white">Dr. Nurbaity Sabri</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      CDCS110 Industrial Training Coordinator
                      <br />
                      Faculty of Computer Science and Mathematics
                      <br />
                      UiTM Jasin, Melaka
                    </p>

                    <div className="space-y-2 pt-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">06-2645638 / 012-5371085</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">nurbaity_sabri@uitm.edu.my</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="mailto:megatsyakir.raif@gmail.com">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/megatsraif" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="rounded-full bg-white text-slate-900 px-8 py-3">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-300">
            © 2025 Megat Syakir Raif Bin Megat Khalid. Computer Science Student at UiTM Kampus Jasin.
          </p>
        </div>
      </footer>
    </div>
  )
}
