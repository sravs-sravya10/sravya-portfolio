import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Printer,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

import {
  personalInfo,
  skillsData,
  projectsData,
  certificationsData
} from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement('a');

    const resumeText = `
SRAVYA DANNANA
Full Stack Developer | AI & ML Student

Email: ${personalInfo.contact.email}
Phone: ${personalInfo.contact.phone}
Location: ${personalInfo.contact.location}

EDUCATION
Bachelor of Technology in Computer Science & Engineering (AI & ML)
KIET Group of Institutions, Kakinada
Graduation: 2028 | CGPA: ${personalInfo.education.cgpa}

CORE SKILLS
- Programming: Python, JavaScript
- Frontend: HTML5, CSS3, React.js, Bootstrap
- Backend: Node.js, Flask, FastAPI, REST APIs
- Databases: MySQL, ChromaDB, FAISS
- AI & ML: RAG, Ollama, Qwen 2.5, Hugging Face Embeddings, Sentence Transformers
- Tools: Git, GitHub, VS Code, Apify, BeautifulSoup, JSON

PROJECTS
${projectsData
  .map(
    (project, index) =>
      `${index + 1}. ${project.title}
   ${project.description}
   Technologies: ${project.technologies.join(', ')}`
  )
  .join('\n\n')}

CERTIFICATIONS
${certificationsData
  .map((cert) => `- ${cert.title} (${cert.date})`)
  .join('\n')}
`.trim();

    const file = new Blob([resumeText], {
      type: 'text/plain'
    });

    element.href = URL.createObjectURL(file);
    element.download = 'Sravya_Dannana_Resume.txt';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    URL.revokeObjectURL(element.href);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">

        {/* =========================================
            BACKGROUND
            ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-lg"
        />

        {/* =========================================
            RESUME CONTAINER
            ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          className="
            relative
            max-w-4xl
            w-full
            bg-[#0A0712]
            border
            border-[#8B5CF6]/30
            rounded-3xl
            p-6
            sm:p-10
            shadow-2xl
            z-10
            space-y-8
            max-h-[90vh]
            overflow-y-auto
            print:max-h-none
            print:overflow-visible
            print:bg-white
            print:text-black
          "
        >

          {/* =========================================
              TOP TOOLBAR
              ========================================= */}

          <div className="flex items-center justify-between border-b border-white/10 pb-4 print:hidden">

            <div className="flex items-center gap-2">

              <span className="w-3 h-3 rounded-full bg-[#8B5CF6] animate-pulse" />

              <span className="text-xs font-mono text-[#A855F7] uppercase tracking-wider">
                Recruiter-Ready Resume
              </span>

            </div>

            <div className="flex items-center gap-3">

              {/* PRINT */}

              <button
                onClick={handlePrint}
                className="
                  flex
                  items-center
                  gap-1.5
                  px-3.5
                  py-2
                  rounded-xl
                  bg-white/5
                  hover:bg-[#8B5CF6]/10
                  text-slate-300
                  hover:text-[#C084FC]
                  border
                  border-white/10
                  hover:border-[#8B5CF6]/30
                  text-xs
                  font-medium
                  transition-colors
                "
              >
                <Printer size={15} />
                <span>Print</span>
              </button>

              {/* DOWNLOAD */}

              <button
                onClick={handleDownload}
                className="
                  flex
                  items-center
                  gap-1.5
                  px-4
                  py-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#6D28D9]
                  to-[#8B5CF6]
                  hover:from-[#8B5CF6]
                  hover:to-[#A855F7]
                  text-white
                  text-xs
                  font-semibold
                  shadow-lg
                  shadow-purple-500/20
                  transition-all
                "
              >
                <Download size={15} />
                <span>Download Resume</span>
              </button>

              {/* CLOSE */}

              <button
                onClick={onClose}
                className="
                  p-2
                  rounded-xl
                  bg-white/5
                  hover:bg-[#8B5CF6]/10
                  text-slate-400
                  hover:text-[#C084FC]
                  border
                  border-transparent
                  hover:border-[#8B5CF6]/30
                  transition-colors
                "
              >
                <X size={20} />
              </button>

            </div>
          </div>

          {/* =========================================
              RESUME CONTENT
              ========================================= */}

          <div className="space-y-6 text-slate-200 print:text-black font-sans">

            {/* =========================================
                PERSONAL INFORMATION
                ========================================= */}

            <div className="border-b border-white/10 pb-6 print:border-black/20 space-y-2 text-center sm:text-left">

              <h1 className="text-3xl font-extrabold font-heading text-white print:text-black">
                {personalInfo.name}
              </h1>

              <p className="text-sm font-mono text-[#A855F7] print:text-purple-700 font-semibold">
                {personalInfo.title}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 print:text-slate-700 pt-2">

                <span className="flex items-center gap-1">
                  <Mail
                    size={13}
                    className="text-[#A855F7]"
                  />
                  {personalInfo.contact.email}
                </span>

                <span className="flex items-center gap-1">
                  <Phone
                    size={13}
                    className="text-[#A855F7]"
                  />
                  {personalInfo.contact.phone}
                </span>

                <span className="flex items-center gap-1">
                  <MapPin
                    size={13}
                    className="text-[#A855F7]"
                  />
                  {personalInfo.contact.location}
                </span>

              </div>

            </div>

            {/* =========================================
                EDUCATION
                ========================================= */}

            <div className="space-y-3">

              <h2 className="
                text-sm
                font-mono
                font-bold
                text-[#A855F7]
                uppercase
                tracking-wider
                flex
                items-center
                gap-2
                border-b
                border-white/10
                pb-1
              ">
                <GraduationCap size={16} />
                Education
              </h2>

              <div className="flex justify-between items-start text-xs">

                <div>

                  <h3 className="font-bold text-white print:text-black text-sm">
                    {personalInfo.education.degree} in{' '}
                    {personalInfo.education.field}
                  </h3>

                  <p className="text-slate-300 print:text-slate-700">
                    {personalInfo.education.institution}
                  </p>

                </div>

                <div className="text-right font-mono">

                  <span className="text-[#C084FC] print:text-purple-800 font-bold">
                    CGPA: {personalInfo.education.cgpa}
                  </span>

                  <p className="text-slate-400 print:text-slate-600 text-[11px]">
                    {personalInfo.education.graduation}
                  </p>

                </div>

              </div>

            </div>

            {/* =========================================
                TECHNICAL SKILLS
                ========================================= */}

            <div className="space-y-3">

              <h2 className="
                text-sm
                font-mono
                font-bold
                text-[#A855F7]
                uppercase
                tracking-wider
                flex
                items-center
                gap-2
                border-b
                border-white/10
                pb-1
              ">
                <Code2 size={16} />
                Technical Skills
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">

                {skillsData.map((group) => (

                  <div
                    key={group.category}
                    className="
                      p-3
                      rounded-xl
                      bg-white/5
                      print:bg-slate-100
                      border
                      border-white/5
                    "
                  >

                    <strong className="
                      text-[#C084FC]
                      print:text-purple-800
                      font-mono
                      block
                      mb-1
                    ">
                      {group.category}:
                    </strong>

                    <span className="text-slate-300 print:text-slate-800">
                      {group.skills.map((s) => s.name).join(', ')}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* =========================================
                FEATURED PROJECTS
                ========================================= */}

            <div className="space-y-3">

              <h2 className="
                text-sm
                font-mono
                font-bold
                text-[#A855F7]
                uppercase
                tracking-wider
                flex
                items-center
                gap-2
                border-b
                border-white/10
                pb-1
              ">
                <Briefcase size={16} />
                Featured Projects
              </h2>

              <div className="space-y-4 text-xs">

                {projectsData.map((proj) => (

                  <div
                    key={proj.id}
                    className="
                      p-4
                      rounded-xl
                      bg-white/5
                      print:bg-slate-100
                      border
                      border-white/5
                      space-y-1.5
                    "
                  >

                    <div className="flex justify-between items-center">

                      <h3 className="font-bold text-white print:text-black text-sm">
                        {proj.title}
                      </h3>

                      <span className="font-mono text-[10px] text-[#A855F7] print:text-purple-700">
                        {proj.category}
                      </span>

                    </div>

                    <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">

                      {proj.technologies.map((t) => (

                        <span
                          key={t}
                          className="
                            px-2
                            py-0.5
                            rounded
                            bg-[#8B5CF6]/10
                            text-[#C084FC]
                            print:text-black
                            font-mono
                            text-[10px]
                          "
                        >
                          {t}
                        </span>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* =========================================
                CERTIFICATIONS
                ========================================= */}

            <div className="space-y-3">

              <h2 className="
                text-sm
                font-mono
                font-bold
                text-[#A855F7]
                uppercase
                tracking-wider
                flex
                items-center
                gap-2
                border-b
                border-white/10
                pb-1
              ">
                <Award size={16} />
                Certifications
              </h2>

              <ul className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-2
                text-xs
                font-mono
                text-slate-300
                print:text-slate-800
              ">

                {certificationsData.map((cert) => (

                  <li
                    key={cert.title}
                    className="flex items-center gap-2"
                  >

                    <span className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-[#8B5CF6]
                    " />

                    <span>
                      {cert.title} ({cert.date})
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;