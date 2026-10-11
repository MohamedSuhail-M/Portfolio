import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  unit: 'pt',
  format: 'letter',
});

const pageWidth = doc.internal.pageSize.getWidth(); // 612
const margin = 48;
const contentWidth = pageWidth - margin * 2; // 516

let y = 46;

// Helper to draw section header with horizontal rule
const drawSectionHeader = (title) => {
  y += 14;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(17, 17, 17);
  doc.text(title, margin, y);
  y += 5;
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.75);
  doc.line(margin, y, margin + contentWidth, y);
  y += 12;
};

// ================= PAGE 1 =================
// Centered Header
doc.setFont('helvetica', 'bold');
doc.setFontSize(17);
doc.setTextColor(17, 17, 17);
doc.text('MOHAMED SUHAIL M', pageWidth / 2, y, { align: 'center' });

y += 15;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.text('Aspiring Data Analyst & Scientist | Python & SQL | Power BI Developer | Machine Learning', pageWidth / 2, y, { align: 'center' });

y += 13;
doc.setFontSize(8.5);
doc.setTextColor(40, 40, 40);
doc.text('Palavakkam, Chennai, Tamil Nadu | +91 7397223767 | my.mohamedsuhail@gmail.com | www.linkedin.com/in/mohamedsuhail2101 |', pageWidth / 2, y, { align: 'center' });

y += 12;
doc.setTextColor(20, 80, 160);
doc.text('https://github.com/MohamedSuhail-M | https://mohamedsuhail---portfolio.vercel.app/', pageWidth / 2, y, { align: 'center' });
doc.setTextColor(17, 17, 17);

// CAREER OBJECTIVE
drawSectionHeader('CAREER OBJECTIVE');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
const objectiveText = 'Motivated and detail-oriented Computer Science student entering the third year of study, with a strong interest in Data Science, Machine Learning, and Analytics. Enjoys exploring data, uncovering patterns, and turning information into actionable insights, with growing hands-on experience in Python, SQL, Power BI, and predictive analytics. Seeking opportunities to apply technical and problem-solving skills, gain industry exposure, and contribute to data-driven solutions in areas such as predictive analytics, sports analytics, AI, and business intelligence.';
const splitObjective = doc.splitTextToSize(objectiveText, contentWidth);
doc.text(splitObjective, margin, y);
y += splitObjective.length * 11.5 + 4;

// EDUCATION
drawSectionHeader('EDUCATION');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.text('S.I.V.E.T College, Chennai | June 2024 \u2013 May 2027', margin, y);
y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.text('Bachelor of Science \u2013 Computer Science with Artificial Intelligence | 87% in last semester', margin, y);
y += 14;

// EXPERIENCE
drawSectionHeader('EXPERIENCE');
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.text('DATA SCIENTIST INTERN', margin, y);
y += 11;
doc.setFont('helvetica', 'italic');
doc.setFontSize(9);
doc.setTextColor(50, 50, 50);
doc.text('Big Bucks Innovation Pvt. Ltd. | Chennai | May 2026 \u2013 June 2026', margin, y);
doc.setTextColor(17, 17, 17);
y += 12;

const expBullets = [
  'Worked on data preprocessing, cleaning, and exploratory data analysis (EDA) using Python, Pandas, and NumPy.',
  'Developed and evaluated machine learning models for predictive analytics using Scikit-learn.',
  'Created data visualizations with Matplotlib and Seaborn to identify trends and support decision-making.',
  'Assisted in building interactive Power BI dashboards for business reporting and performance analysis.',
  'Wrote SQL queries to retrieve, filter, and analyze structured data from relational databases.',
  'Collaborated with the development team to deliver data-driven solutions and gained hands-on experience with the end-to-end data science workflow.'
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
expBullets.forEach((bullet) => {
  const bulletLines = doc.splitTextToSize(bullet, contentWidth - 14);
  doc.text('\u2022', margin + 2, y);
  doc.text(bulletLines, margin + 12, y);
  y += bulletLines.length * 11.5 + 2.5;
});

// PROJECTS
drawSectionHeader('PROJECTS');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.text('Power BI Projects', margin, y);
y += 11;

const pbiProjects = [
  {
    title: 'IPL Orange Cap & Purple Cap Analysis Dashboard \u2014 ',
    desc: 'Built an interactive Power BI dashboard tracking top runscorers (Orange Cap) and top wicket-takers (Purple Cap) across IPL seasons, with player-wise and team-wise performance breakdowns.'
  },
  {
    title: 'Amazon Sales Dashboard (Minimal Dataset) \u2014 ',
    desc: 'Designed a Power BI dashboard analyzing sales trends, category-wise performance, and revenue insights from a curated Amazon sales dataset.'
  },
  {
    title: 'Educational Performance & Resource Allocation Dashboard \u2014 ',
    desc: 'Built a Power BI dashboard on a Kaggle school-education dataset covering 50 schools across 4\u20135 states and 10,000+ students, analyzing budget allocation, average scores, scholarship eligibility, dropout risk, subject-wise performance, teacher experience, teacher-to-student ratio, and demographic factors (age, gender, district) to surface resource-to-performance correlations.'
  }
];

pbiProjects.forEach((proj) => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const fullText = proj.title + proj.desc;
  const lines = doc.splitTextToSize(fullText, contentWidth - 14);
  doc.text('\u2022', margin + 2, y);
  
  // Highlight prefix in bold
  doc.setFont('helvetica', 'bold');
  const titleWidth = doc.getTextWidth(proj.title);
  doc.text(lines, margin + 12, y);
  y += lines.length * 11.5 + 3.5;
});

y += 3;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.text('Machine Learning Projects (Tech Stack: Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn)', margin, y);
y += 11;

const mlProjectsP1 = [
  {
    title: 'Student Performance Predictor \u2014 ',
    desc: 'Developed a machine learning model to predict student academic performance using educational and behavioral data.'
  },
  {
    title: 'House Price Prediction \u2014 ',
    desc: 'Built a predictive model to estimate house prices based on property features and market trends.'
  }
];

mlProjectsP1.forEach((proj) => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const fullText = proj.title + proj.desc;
  const lines = doc.splitTextToSize(fullText, contentWidth - 14);
  doc.text('\u2022', margin + 2, y);
  doc.text(lines, margin + 12, y);
  y += lines.length * 11.5 + 3.5;
});

// ================= PAGE 2 =================
doc.addPage('letter', 'p');
y = 48;

const mlProjectsP2 = [
  {
    title: 'Loan Approval Prediction \u2014 ',
    desc: 'Created a classification model to predict loan approval status using applicant financial and demographic data.'
  },
  {
    title: 'Employee Attrition Prediction \u2014 ',
    desc: 'Developed a machine learning model to identify employees at risk of leaving the organization and support retention strategies.'
  }
];

mlProjectsP2.forEach((proj) => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const fullText = proj.title + proj.desc;
  const lines = doc.splitTextToSize(fullText, contentWidth - 14);
  doc.text('\u2022', margin + 2, y);
  doc.text(lines, margin + 12, y);
  y += lines.length * 11.5 + 3.5;
});

// CERTIFICATIONS
drawSectionHeader('CERTIFICATIONS');
const certs = [
  'IBM Certified Data Fundamentals',
  'Web Development Fundamentals',
  'Analyzing and Visualizing Data with Microsoft Power BI',
  'Deloitte Australia \u2013 Data Analytics Job Simulation',
  'Python For Data Science'
];

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
certs.forEach((cert) => {
  doc.text('\u2022', margin + 2, y);
  doc.text(cert, margin + 12, y);
  y += 14;
});

// SKILLS
drawSectionHeader('SKILLS');

const skillsList = [
  {
    label: 'Technical Skills: ',
    content: 'Python, SQL, Java, HTML, CSS, Power BI, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Git, GitHub, Microsoft Excel, PowerPoint'
  },
  {
    label: 'Core Concepts: ',
    content: 'Data Analysis, Data Visualization, Exploratory Data Analysis (EDA), Machine Learning, Data Cleaning, Statistical Analysis, Predictive Analytics, Business Intelligence'
  },
  {
    label: 'Soft Skills: ',
    content: 'Problem Solving, Analytical Thinking, Team Collaboration, Communication, Leadership, Time Management'
  }
];

skillsList.forEach((s) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  const labelWidth = doc.getTextWidth(s.label);
  
  const fullLines = doc.splitTextToSize(s.label + s.content, contentWidth);
  doc.text(s.label, margin, y);
  
  doc.setFont('helvetica', 'normal');
  const contentLines = doc.splitTextToSize(s.content, contentWidth - labelWidth);
  doc.text(s.content, margin + labelWidth, y, { maxWidth: contentWidth - labelWidth });
  
  y += Math.max(fullLines.length * 12, 16) + 4;
});

// LANGUAGES
drawSectionHeader('LANGUAGES');
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.text('Tamil, English', margin, y);

const outputPath = path.resolve(process.cwd(), 'public/resume-mohamed-suhail.pdf');
const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBytes));
console.log('Successfully generated authentic PDF at', outputPath);
