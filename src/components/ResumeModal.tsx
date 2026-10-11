import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, PROJECTS } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Globe, 
  Github, 
  Linkedin,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import { downloadResumePdf } from '../utils/downloadResume';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'original' | 'web'>('original');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [pageView, setPageView] = useState<'all' | '1' | '2'>('all');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
MOHAMED SUHAIL M
Aspiring Data Analyst & Scientist | Python & SQL | Power BI Developer | Machine Learning
Palavakkam, Chennai, Tamil Nadu | +91 7397223767 | my.mohamedsuhail@gmail.com
LinkedIn: www.linkedin.com/in/mohamedsuhail2101 | GitHub: https://github.com/MohamedSuhail-M | Portfolio: https://mohamedsuhail---portfolio.vercel.app/

CAREER OBJECTIVE
Motivated and detail-oriented Computer Science student entering the third year of study, with a strong interest in Data Science, Machine Learning, and Analytics. Enjoys exploring data, uncovering patterns, and turning information into actionable insights, with growing hands-on experience in Python, SQL, Power BI, and predictive analytics. Seeking opportunities to apply technical and problem-solving skills, gain industry exposure, and contribute to data-driven solutions in areas such as predictive analytics, sports analytics, AI, and business intelligence.

EDUCATION
S.I.V.E.T College, Chennai | June 2024 – May 2027
Bachelor of Science – Computer Science with Artificial Intelligence | 87% in last semester

EXPERIENCE
DATA SCIENTIST INTERN
Big Bucks Innovation Pvt. Ltd. | Chennai | May 2026 – June 2026
• Worked on data preprocessing, cleaning, and exploratory data analysis (EDA) using Python, Pandas, and NumPy.
• Developed and evaluated machine learning models for predictive analytics using Scikit-learn.
• Created data visualizations with Matplotlib and Seaborn to identify trends and support decision-making.
• Assisted in building interactive Power BI dashboards for business reporting and performance analysis.
• Wrote SQL queries to retrieve, filter, and analyze structured data from relational databases.
• Collaborated with the development team to deliver data-driven solutions and gained hands-on experience with the end-to-end data science workflow.

PROJECTS
Power BI Projects:
• IPL Orange Cap & Purple Cap Analysis Dashboard — Built an interactive Power BI dashboard tracking top runscorers (Orange Cap) and top wicket-takers (Purple Cap) across IPL seasons, with player-wise and team-wise performance breakdowns.
• Amazon Sales Dashboard (Minimal Dataset) — Designed a Power BI dashboard analyzing sales trends, category-wise performance, and revenue insights from a curated Amazon sales dataset.
• Educational Performance & Resource Allocation Dashboard — Built a Power BI dashboard on a Kaggle school-education dataset covering 50 schools across 4–5 states and 10,000+ students, analyzing budget allocation, average scores, scholarship eligibility, dropout risk, subject-wise performance, teacher experience, teacher-to-student ratio, and demographic factors (age, gender, district) to surface resource-to-performance correlations.

Machine Learning Projects (Tech Stack: Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn):
• Student Performance Predictor — Developed a machine learning model to predict student academic performance using educational and behavioral data.
• House Price Prediction — Built a predictive model to estimate house prices based on property features and market trends.
• Loan Approval Prediction — Created a classification model to predict loan approval status using applicant financial and demographic data.
• Employee Attrition Prediction — Developed a machine learning model to identify employees at risk of leaving the organization and support retention strategies.

CERTIFICATIONS
• IBM Certified Data Fundamentals
• Web Development Fundamentals
• Analyzing and Visualizing Data with Microsoft Power BI
• Deloitte Australia – Data Analytics Job Simulation
• Python For Data Science

SKILLS
Technical Skills: Python, SQL, Java, HTML, CSS, Power BI, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Git, GitHub, Microsoft Excel, PowerPoint
Core Concepts: Data Analysis, Data Visualization, Exploratory Data Analysis (EDA), Machine Learning, Data Cleaning, Statistical Analysis, Predictive Analytics, Business Intelligence
Soft Skills: Problem Solving, Analytical Thinking, Team Collaboration, Communication, Leadership, Time Management

LANGUAGES
Tamil, English
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F7F7F4] border-2 border-[#111111] shadow-[12px_12px_0px_#111111] p-6 sm:p-12 text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-[#111111]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#F4D83D] border border-[#111111]" />
            <span id="resume-title" className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
              CURRICULUM VITAE · MOHAMED SUHAIL M
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadResumePdf()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F4D83D] text-[#111111] border border-[#111111] text-xs font-mono font-bold uppercase hover:bg-[#E7C82F] transition-all shadow-[2px_2px_0px_#111111] cursor-pointer"
              title="Download official resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#111111] text-xs font-mono font-bold uppercase hover:bg-[#F7F7F4] transition-colors"
              title="Copy formatted text for ATS recruiters"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY ATS TEXT'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#111111] text-[#F7F7F4] text-xs font-mono font-bold uppercase hover:bg-black transition-colors shadow-[2px_2px_0px_#F4D83D]"
              title="Print CV or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#F4D83D]" />
              <span>PRINT / SAVE PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-white border border-[#111111] hover:bg-[#F4D83D] transition-colors ml-2"
              aria-label="Close CV modal"
            >
              <X className="w-4 h-4 text-[#111111]" />
            </button>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-[#EFEFEA] p-1.5 border border-[#111111]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('original')}
              className={`px-3 sm:px-4 py-2 font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'original'
                  ? 'bg-[#111111] text-[#F7F7F4] shadow-[2px_2px_0px_#F4D83D]'
                  : 'bg-white text-[#111111] hover:bg-[#F4D83D]/40 border border-[#111111]'
              }`}
            >
              <span className={`w-2 h-2 ${activeTab === 'original' ? 'bg-[#F4D83D]' : 'bg-[#111111]'}`} />
              <span>ORIGINAL RESUME (WORD PDF)</span>
              <span className="hidden sm:inline-block bg-[#F4D83D] text-[#111111] text-[9px] px-1.5 py-0.5 border border-[#111111] font-black">
                EXACT LAYOUT
              </span>
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`px-3 sm:px-4 py-2 font-mono text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-[#111111] text-[#F7F7F4] shadow-[2px_2px_0px_#F4D83D]'
                  : 'bg-white text-[#111111] hover:bg-[#F4D83D]/40 border border-[#111111]'
              }`}
            >
              <span className={`w-2 h-2 ${activeTab === 'web' ? 'bg-[#F4D83D]' : 'bg-[#111111]'}`} />
              <span>ATS & WEB BREAKDOWN</span>
            </button>
          </div>

          <a
            href="/resume-mohamed-suhail.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold text-[#111111] hover:underline flex items-center gap-1.5 px-2 py-1"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#111111]" />
            <span>OPEN PDF IN TAB</span>
          </a>
        </div>

        {/* Tab 1: Authentic PDF Document View */}
        {activeTab === 'original' && (
          <div className="space-y-4">
            {/* Document Controls Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white border border-[#111111] font-mono text-xs text-[#111111]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-pulse" />
                <span className="font-bold">AUTHENTIC 2-PAGE DOCUMENT VIEWER</span>
                <span className="hidden lg:inline text-[#555555]">· 100% Original Word formatting preserved</span>
              </div>

              {/* View & Zoom Controls */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Page Selection */}
                <div className="flex items-center bg-[#F7F7F4] border border-[#111111] p-0.5">
                  <button
                    type="button"
                    onClick={() => setPageView('all')}
                    className={`px-2 py-1 text-[10px] font-bold uppercase transition-all cursor-pointer ${
                      pageView === 'all' ? 'bg-[#111111] text-[#F7F7F4]' : 'text-[#111111] hover:bg-[#F4D83D]/30'
                    }`}
                  >
                    ALL (2)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPageView('1')}
                    className={`px-2 py-1 text-[10px] font-bold uppercase transition-all cursor-pointer ${
                      pageView === '1' ? 'bg-[#111111] text-[#F7F7F4]' : 'text-[#111111] hover:bg-[#F4D83D]/30'
                    }`}
                  >
                    PAGE 1
                  </button>
                  <button
                    type="button"
                    onClick={() => setPageView('2')}
                    className={`px-2 py-1 text-[10px] font-bold uppercase transition-all cursor-pointer ${
                      pageView === '2' ? 'bg-[#111111] text-[#F7F7F4]' : 'text-[#111111] hover:bg-[#F4D83D]/30'
                    }`}
                  >
                    PAGE 2
                  </button>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center bg-[#F7F7F4] border border-[#111111] p-0.5">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(75, z - 15))}
                    disabled={zoomLevel <= 75}
                    className="p-1 hover:bg-[#F4D83D]/40 text-[#111111] disabled:opacity-40 cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-1.5 text-[10px] font-bold min-w-[36px] text-center select-none">
                    {zoomLevel}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(150, z + 15))}
                    disabled={zoomLevel >= 150}
                    className="p-1 hover:bg-[#F4D83D]/40 text-[#111111] disabled:opacity-40 cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel(100)}
                    className="p-1 hover:bg-[#F4D83D]/40 text-[#111111] border-l border-[#111111]/20 cursor-pointer"
                    title="Reset Zoom to 100%"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </div>

                {/* Download PDF button */}
                <button
                  type="button"
                  onClick={() => downloadResumePdf()}
                  className="px-3 py-1 bg-[#F4D83D] border border-[#111111] font-bold text-xs hover:bg-[#E7C82F] flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_#111111]"
                  title="Download PDF document"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">DOWNLOAD</span>
                  <span>PDF</span>
                </button>
              </div>
            </div>

            {/* Document Stage Desk */}
            <div className="w-full h-[72vh] min-h-[520px] bg-[#2E3136] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] overflow-y-auto overflow-x-auto p-4 sm:p-8 flex flex-col items-center gap-8 scroll-smooth">
              {/* Page 1 */}
              {(pageView === 'all' || pageView === '1') && (
                <div 
                  className="relative transition-all duration-200 select-none"
                  style={{
                    width: `${Math.round(760 * (zoomLevel / 100))}px`,
                    maxWidth: '100%',
                  }}
                >
                  {/* Paper Sheet Header Label */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#D4D4D8] mb-2 px-1">
                    <span className="font-bold tracking-wider uppercase">Page 1 · Contact, Career Objective, Education & Experience</span>
                    <span className="bg-[#111111] text-[#F4D83D] px-2 py-0.5 border border-[#555555] text-[10px] font-bold">1 / 2</span>
                  </div>

                  {/* Physical White Paper Sheet */}
                  <div className="bg-white border border-[#D1D5DB] shadow-[0_16px_40px_rgba(0,0,0,0.5)] ring-1 ring-black/10 overflow-hidden">
                    <img
                      src="/resume-page-1.png"
                      alt="Mohamed Suhail M - Resume Page 1"
                      className="w-full h-auto block"
                      loading="eager"
                    />
                  </div>
                </div>
              )}

              {/* Page 2 */}
              {(pageView === 'all' || pageView === '2') && (
                <div 
                  className="relative transition-all duration-200 select-none"
                  style={{
                    width: `${Math.round(760 * (zoomLevel / 100))}px`,
                    maxWidth: '100%',
                  }}
                >
                  {/* Paper Sheet Header Label */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#D4D4D8] mb-2 px-1">
                    <span className="font-bold tracking-wider uppercase">Page 2 · Power BI, ML Projects, Certifications & Skills</span>
                    <span className="bg-[#111111] text-[#F4D83D] px-2 py-0.5 border border-[#555555] text-[10px] font-bold">2 / 2</span>
                  </div>

                  {/* Physical White Paper Sheet */}
                  <div className="bg-white border border-[#D1D5DB] shadow-[0_16px_40px_rgba(0,0,0,0.5)] ring-1 ring-black/10 overflow-hidden">
                    <img
                      src="/resume-page-2.png"
                      alt="Mohamed Suhail M - Resume Page 2"
                      className="w-full h-auto block"
                      loading="eager"
                    />
                  </div>
                </div>
              )}

              {/* Bottom Quick Help Bar */}
              <div className="text-center font-mono text-xs text-[#A1A1AA] pt-2 pb-4 flex flex-wrap items-center justify-center gap-3">
                <span>Looking for searchable text?</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('web')}
                  className="text-[#F4D83D] underline font-bold hover:text-white cursor-pointer"
                >
                  Switch to ATS & Web Breakdown Tab
                </button>
                <span>·</span>
                <a
                  href="/resume-mohamed-suhail.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4D83D] underline font-bold hover:text-white inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open Raw PDF In New Tab
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Printable Editorial Document */}
        {activeTab === 'web' && (
        <div id="printable-cv" className="space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-[#111111] pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#111111] tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm font-bold text-[#111111] bg-[#F4D83D] px-2 py-0.5 border border-[#111111] inline-block mt-2">
                {PERSONAL_INFO.role}
              </p>
              <p className="font-sans text-xs text-[#555555] mt-2 max-w-xl leading-relaxed">
                {PERSONAL_INFO.location} · {PERSONAL_INFO.phone} · {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="font-mono text-xs text-[#111111] space-y-1 sm:text-right">
              <div>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/mohamedsuhail2101
                </a>
              </div>
              <div>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/MohamedSuhail-M
                </a>
              </div>
              <div>
                <a href={PERSONAL_INFO.portfolioLiveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#555555]">
                  mohamedsuhail---portfolio.vercel.app
                </a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#555555] mb-2 pb-1 border-b border-[#111111]/20">
              CAREER OBJECTIVE
            </h2>
            <p className="p-4 bg-white border border-[#111111] text-xs sm:text-sm font-sans text-[#222222] leading-relaxed">
              Motivated and detail-oriented Computer Science student entering the third year of study, with a strong interest in Data Science, Machine Learning, and Analytics. Enjoys exploring data, uncovering patterns, and turning information into actionable insights, with growing hands-on experience in Python, SQL, Power BI, and predictive analytics. Seeking opportunities to apply technical and problem-solving skills, gain industry exposure, and contribute to data-driven solutions in areas such as predictive analytics, sports analytics, AI, and business intelligence.
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#555555] mb-2 pb-1 border-b border-[#111111]/20">
              EDUCATION
            </h2>
            <div className="p-4 bg-white border border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-heading font-black text-base text-[#111111] uppercase">
                  {EDUCATION.degree} – {EDUCATION.major}
                </h3>
                <p className="font-mono text-xs text-[#555555]">
                  {EDUCATION.institution}, {EDUCATION.location} | {EDUCATION.period}
                </p>
              </div>
              <div>
                <span className="font-mono text-xs font-black bg-[#F4D83D] px-2.5 py-1 border border-[#111111]">
                  87% IN LAST SEMESTER
                </span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#555555] mb-2 pb-1 border-b border-[#111111]/20">
              EXPERIENCE
            </h2>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="p-4 bg-white border border-[#111111] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="font-heading font-black text-base text-[#111111] uppercase">{exp.role}</h3>
                    <p className="font-mono text-xs text-[#555555]">{exp.company} | {exp.location}</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#111111] bg-[#F7F7F4] px-2 py-0.5 border border-[#111111]">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs font-sans text-[#333333]">
                  {exp.bullets.map((b, bI) => (
                    <li key={bI} className="flex items-start gap-2">
                      <span className="text-[#111111] font-bold">»</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#555555] mb-2 pb-1 border-b border-[#111111]/20">
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-3.5 bg-white border border-[#111111] space-y-1">
                  <div className="flex justify-between font-mono text-[10px] text-[#555555] font-bold">
                    <span>{p.category.toUpperCase()}</span>
                    <span>{p.metrics[0].value}</span>
                  </div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#111111] uppercase leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-[11px] font-sans text-[#555555] line-clamp-2">
                    {p.valueProposition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#555555] mb-2 pb-1 border-b border-[#111111]/20">
              CERTIFICATIONS
            </h2>
            <div className="p-4 bg-white border border-[#111111] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#111111]" />
                  <span>{c.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Concepts */}
          <div>
            <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#555555] mb-2 pb-1 border-b border-[#111111]/20">
              SKILLS & COMPETENCIES
            </h2>
            <div className="p-4 bg-white border border-[#111111] space-y-2.5 font-mono text-xs">
              <div>
                <span className="text-[#555555] font-bold">TECHNICAL SKILLS: </span>
                <span className="text-[#111111]">Python, SQL, Java, HTML, CSS, Power BI, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Git, GitHub, Microsoft Excel, PowerPoint</span>
              </div>
              <div>
                <span className="text-[#555555] font-bold">CORE CONCEPTS: </span>
                <span className="text-[#111111]">Data Analysis, Data Visualization, Exploratory Data Analysis (EDA), Machine Learning, Data Cleaning, Statistical Analysis, Predictive Analytics, Business Intelligence</span>
              </div>
              <div>
                <span className="text-[#555555] font-bold">SOFT SKILLS: </span>
                <span className="text-[#111111]">Problem Solving, Analytical Thinking, Team Collaboration, Communication, Leadership, Time Management</span>
              </div>
              <div>
                <span className="text-[#555555] font-bold">LANGUAGES: </span>
                <span className="text-[#111111]">Tamil, English</span>
              </div>
            </div>
          </div>

        </div>
        )}

        {/* Modal Footer Note */}
        <div className="mt-8 pt-4 border-t border-[#111111]/20 flex items-center justify-between font-mono text-[11px] text-[#555555]">
          <span>MOHAMED SUHAIL M · VERIFIED RESUME</span>
          <button
            onClick={onClose}
            className="text-[#111111] font-bold hover:underline"
          >
            DISMISS MODAL [ESC]
          </button>
        </div>

      </div>
    </div>
  );
};
