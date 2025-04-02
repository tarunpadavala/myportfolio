import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Briefcase, BookOpen, Sparkles, FileDown, Send } from 'lucide-react';
import profileImage from './IMG_20240922_084717.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">Tarun Padavala</h1>
            <div className="flex space-x-6">
              <a href="https://github.com/tarunpadavala/" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/tarunpadavala/" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:padavalatarun17@gmail.com" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-2xl opacity-70 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-48 h-48 rounded-full object-cover shadow-lg ring-4 ring-white"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-indigo-600 animate-pulse" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Software Engineer
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Passionate about building scalable applications and solving complex problems. 
                Specialized in full-stack development with expertise in React, Node.js, data science, cloud technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Areas of Interest */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
            Areas of Interest
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Machine Learning', color: 'from-blue-500 to-blue-600' },
              { name: 'Data Science', color: 'from-indigo-500 to-indigo-600' },
              { name: 'DevOps', color: 'from-purple-500 to-purple-600' }
            ].map((interest) => (
              <div 
                key={interest.name} 
                className="group bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <h4 className="text-xl font-semibold text-gray-900 relative z-10">{interest.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="w-6 h-6 mr-2 text-indigo-600" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'IBM Data Science',
                org: 'edx',
                link: 'https://credentials.edx.org/credentials/0861981447b44074ba3124f78c20ef4a/',
                color: 'from-blue-500'
              },
              {
                name: ' Java Programming and Software Engineering Fundamentals Specialization',
                org: 'Coursera',
                link: 'https://coursera.org/share/005f41123054cf85c019d8beb592b6aa',
                color: 'from-indigo-500'
              },
              {
                name: 'MicroMasters in Principles of Cybersecurity',
                org: 'edx',
                link: 'https://credentials.edx.org/credentials/bedc661483a6410da0145613d2e6bdec/',
                color: 'from-purple-500'
              },
              {
                name: ' Microsoft Azure Developer Associate (AZ-204) Exam Prep Specialization)',
                org: 'Cloud Native Computing Foundation',
                link: 'https://coursera.org/share/9c9d87f040e256f3d895a078c4ff580f',
                color: 'from-blue-500'
              }
            ].map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                className="group bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 mt-2">{cert.org}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-2 text-purple-600" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'SpaceX First Stage Landing Prediction',
                description: 'Leveraging machine learning to predict SpaceX rocket reusability, optimizing cost-efficient space travel.',
                image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/tarunpadavala/IBM-Applied-Data-Science-Capstone',
                color: 'from-blue-500'
              },
              {
                title: 'Fake Profile Detection',
                description: 'Harnessing AI to detect and eliminate fake profiles, ensuring authenticity in digital networks.',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/tarunpadavala/fakeprofile',
                color: 'from-indigo-500'
              },
              {
                title: 'Result Analysis',
                description: 'Developed a dynamic result analysis system using PHP and SQL, visualizing insights with interactive JavaScript pie charts.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/tarunpadavala/Result-Analysis',
                color: 'from-purple-500'
              },
              {
                title: 'Blockchain Trading Platform',
                description: 'Decentralized cryptocurrency trading platform with real-time market data',
                image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: 'https://github.com/tarunpadavala',
                color: 'from-blue-500'
              }
            ].map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-70 transition-opacity`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                      {project.title}
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-gray-600 mt-3 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Send className="w-6 h-6 mr-2 text-blue-600" />
            Get in Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:padavalatarun17@gmail.com"
              className="group bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Send an Email
                  </h4>
                  <p className="text-gray-600 mt-2">padavalatarun17@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="/Tarun_Padavala_Resume.pdf"
              download
              className="group bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex items-center gap-4">
                <FileDown className="w-8 h-8 text-indigo-600" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Download Resume
                  </h4>
                  <p className="text-gray-600 mt-2">Get my detailed CV</p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-sm mt-20 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2025 Tarun Padavala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;