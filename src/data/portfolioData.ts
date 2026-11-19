export interface Project {
  number: string;
  id: string;
  title: string;
  category: 'Power BI' | 'Machine Learning';
  subtitle: string;
  description: string;
  valueProposition: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl: string;
  imageUrl: string;
  architectureDetails: string;
  insights: string[];
}

export interface SkillItem {
  name: string;
  logoKey?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  performance: string;
  performanceLabel: string;
  bullets: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  skills: string[];
  credentialId?: string;
  verificationUrl?: string;
  badge?: string;
  score?: string;
  session?: string;
  credits?: string | number;
  examBreakdown?: string;
  certifiedCount?: string;
  description?: string;
}

export const PERSONAL_INFO = {
  name: 'Mohamed Suhail M',
  brandName: 'MOHAMED SUHAIL M',
  role: 'Aspiring Data Analyst & Scientist | Python & SQL | Power BI Developer | Machine Learning',
  location: 'Palavakkam, Chennai, Tamil Nadu',
  availability: 'Available for AI & Data Science Roles',
  heroMeta: 'PORTFOLIO / 2026 · CHENNAI, INDIA',
  heroGreeting: "HELLO, I'M",
  heroHeadline:
    'Aspiring Data Scientist and Power BI Developer passionate about turning data into practical insights.',
  heroBio:
    "Motivated and detail-oriented Computer Science student with a strong interest in Data Science, Machine Learning, and Analytics. Enjoys exploring data, uncovering patterns, and turning information into actionable insights, with growing hands-on experience in Python, SQL, Power BI, and predictive analytics.",
  aboutText1:
    "I'm a Computer Science student with a growing passion for Data Science, Machine Learning, and Analytics. What excites me most is finding patterns in data and transforming them into insights that help solve practical problems. Over time, I've built projects ranging from predictive machine learning models to interactive Power BI dashboards, strengthening my skills in Python, SQL, and data visualization.",
  aboutText2:
    "Right now, I'm focused on improving my machine learning knowledge, building stronger end-to-end data projects, and preparing for opportunities where I can contribute to real business and AI-driven solutions while continuing to learn from industry experience.",
  email: 'my.mohamedsuhail@gmail.com',
  phone: '+91 7397223767',
  github: 'https://github.com/MohamedSuhail-M',
  linkedin: 'https://www.linkedin.com/in/mohamedsuhail2101/',
  portfolioLiveUrl: 'https://mohamedsuhail---portfolio.vercel.app/',
  languages: ['Tamil', 'English'],
  resumeUrl: '/resume-mohamed-suhail.pdf',
  web3FormsAccessKey: '12407bfc-bc5e-4c98-9dc0-3c04aaaaebe9',
  stats: [
    { label: 'LAST SEMESTER', value: '87%' },
    { label: 'SELECTED PROJECTS', value: '07' },
    { label: 'CORE FOCUS', value: 'AI / ML / BI' },
    { label: 'LOCATION', value: 'CHENNAI' },
  ],
};

export const PROJECTS: Project[] = [
  {
    number: '01',
    id: 'edu-performance',
    title: 'Educational Performance & Resource Allocation Dashboard',
    category: 'Power BI',
    subtitle: '50 SCHOOLS · 4–5 STATES · 10,000+ STUDENTS',
    valueProposition:
      'Interactive executive dashboard correlating socio-economic factors with scholarship allocation, grade progression, and early dropout warnings.',
    description:
      'Engineered a multi-tier Power BI report consolidating student academic performance across 50 regional institutions. Formulated complex DAX measures for dynamic weighted scoring and budgetary reallocation.',
    highlights: [
      '50 schools surveyed across 4–5 states',
      '10,000+ student data points aggregated and cleansed',
      'Budget allocation & scholarship impact modeling',
      'Early warning indicator for student dropout risk',
    ],
    metrics: [
      { label: 'SAMPLE SIZE', value: '10,000+' },
      { label: 'COVERAGE', value: '50 Schools' },
      { label: 'JURISDICTIONS', value: '4–5 States' },
    ],
    tags: ['Power BI', 'DAX', 'Data Modeling', 'ETL', 'Statistical Analysis'],
    githubUrl: 'https://github.com/mohamedsuhailmsivetai-create/Power-BI-Projects',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Built a dimensional Star-Schema model separating institutional facts from demographic dimensions. Implemented dynamic DAX row-level security and custom measure branching for percentile benchmarks.',
    insights: [
      'Identified an 18% improvement potential in underperforming regions through strategic scholarship reallocation.',
      'Isolated attendance irregularity as the leading predictor of dropouts 60 days before semester finals.',
    ],
  },
  {
    number: '02',
    id: 'ipl-analytics',
    title: 'IPL Orange Cap & Purple Cap Analysis Dashboard',
    category: 'Power BI',
    subtitle: 'PLAYER & TEAM PERFORMANCE INTELLIGENCE',
    valueProposition:
      'Deep sports analytics portal diagnosing tournament-wide batsman run velocities, strike rates, economy bands, and wicket conversions.',
    description:
      'High-performance sports intelligence dashboard analyzing over 800 IPL matches. Enabled dynamic head-to-head bowler-versus-batsman drills and situational phase scoring breakdown.',
    highlights: [
      'Batting & bowling metrics breakdown by innings, match phase, and stadium',
      'Dynamic player head-to-head performance comparisons',
      'Strike rate vs. Average efficiency quadrant analysis',
      'Match impact indexing based on economy and boundary percentages',
    ],
    metrics: [
      { label: 'MATCHES', value: '800+' },
      { label: 'PLAYERS', value: '350+' },
      { label: 'METRICS', value: 'DAX Measures' },
    ],
    tags: ['Power BI', 'Sports Analytics', 'DAX', 'Data Storytelling'],
    githubUrl: 'https://github.com/mohamedsuhailmsivetai-create/Power-BI-Projects',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Ball-by-ball delivery datasets transformed via Power Query with indexed dimensional lookups. Custom DAX ranking formulas dynamically computed real-time cap leaderboards.',
    insights: [
      'Middle-overs boundary efficiency correlated 2.4x higher with team victories than powerplay wicket accumulation.',
    ],
  },
  {
    number: '03',
    id: 'amazon-sales',
    title: 'Amazon Sales Dashboard',
    category: 'Power BI',
    subtitle: 'REVENUE, SKU MARGINS & REGIONAL FULFILLMENT',
    valueProposition:
      'Diagnostic e-commerce operations dashboard tracking gross merchandise volume, return rate bottlenecks, and fulfillment velocity.',
    description:
      'Consolidated multi-region sales reports into an executive cockpit tracking SKU-level profit margins, seasonal demand spikes, and FBA fulfillment efficiency.',
    highlights: [
      'Gross merchandise value (GMV) and net profit margin analysis',
      'Fulfillment channel efficiency (FBA vs FBM) metrics',
      'Customer lifetime segment profiling & repeat velocity',
      'Regional heatmapping across top purchasing metro areas',
    ],
    metrics: [
      { label: 'GMV ANALYZED', value: '$2.4M+' },
      { label: 'SKU COUNT', value: '1,200+' },
      { label: 'MARGIN LIFT', value: '+14.2%' },
    ],
    tags: ['Power BI', 'E-commerce Analytics', 'Financial Modeling', 'SQL'],
    githubUrl: 'https://github.com/mohamedsuhailmsivetai-create/Power-BI-Projects',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Multi-year transaction ledgers normalized with time-intelligence DAX functions, currency standardizations, and automated outlier transaction flags.',
    insights: [
      'Isolated a 12% revenue leakage in high-return consumer electronic categories, recommending fulfillment revisions.',
    ],
  },
  {
    number: '04',
    id: 'student-performance-predictor',
    title: 'Student Performance Predictor',
    category: 'Machine Learning',
    subtitle: 'SUPERVISED REGRESSION & OUTCOME MODELING',
    valueProposition:
      'End-to-end predictive machine learning model estimating exam performance based on study cadence, attendance, and prerequisite mastery.',
    description:
      'Developed a reproducible Scikit-learn predictive pipeline evaluating study behaviors and socio-academic factors to forecast final exam letter grades with 0.88 R² accuracy.',
    highlights: [
      'Exploratory data analysis uncovering primary academic determinants',
      'Feature engineering: normalized continuous variables & one-hot encoded categories',
      'Model benchmarking: Linear Regression, Ridge, Random Forest, & Gradient Boosting',
      'Evaluation via R² score, Mean Squared Error (MSE), and 5-Fold Cross-Validation',
    ],
    metrics: [
      { label: 'MODEL R²', value: '0.88' },
      { label: 'MSE RESIDUAL', value: '4.21' },
      { label: 'FEATURES', value: '16 Tested' },
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/mohamedsuhailmsivetai-create/ML-Projects',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Encapsulated preprocessing in Scikit-learn Pipelines utilizing StandardScaler, polynomial interaction terms, and GridSearchCV hyperparameter tuning.',
    insights: [
      'Study consistency across 60 days proved 3x more determinative of pass rates than cumulative cramming sessions.',
    ],
  },
  {
    number: '05',
    id: 'house-price-prediction',
    title: 'House Price Prediction',
    category: 'Machine Learning',
    subtitle: 'VALUATION REGRESSION & REGULARIZATION',
    valueProposition:
      'Regularized regression models forecasting residential real estate valuations using geographical proximities and architectural attributes.',
    description:
      'Trained Lasso, Ridge, and XGBoost regression models on multi-feature housing datasets with spatial distance matrices and logarithmic target distributions.',
    highlights: [
      'Log-transformation of skewed price targets for Gaussian normality',
      'Outlier detection and removal using interquartile range (IQR)',
      'Cross-validated comparison between Lasso, Ridge, and XGBoost',
      'Feature importance analysis for pricing transparency',
    ],
    metrics: [
      { label: 'RMSE', value: '0.124' },
      { label: 'CV SCORE', value: '0.91' },
      { label: 'RECORDS', value: '5,000+' },
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Regression'],
    githubUrl: 'https://github.com/mohamedsuhailmsivetai-create/ML-Projects',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Built spatial clustering indicators and resolved multicollinearity through Variance Inflation Factor (VIF) feature pruning.',
    insights: [
      'Square footage and school district rating account for 68% of residential property price variance.',
    ],
  },
  {
    number: '06',
    id: 'loan-approval-prediction',
    title: 'Loan Approval Prediction',
    category: 'Machine Learning',
    subtitle: 'CREDIT RISK CLASSIFICATION & IMBALANCE MITIGATION',
    valueProposition:
      'Binary classification system predicting creditworthiness to reduce default rates while mitigating false-negative rejection anomalies.',
    description:
      'Implemented Random Forest and Logistic Regression classifiers balanced with SMOTE oversampling to automate retail loan eligibility with an ROC-AUC of 0.92.',
    highlights: [
      'Handled severe class imbalance using SMOTE oversampling',
      'Evaluated ROC-AUC, Precision, Recall, and F1-score trade-offs',
      'Optimized classification probability decision thresholds',
      'Calibrated risk scoring probability outputs',
    ],
    metrics: [
      { label: 'ROC-AUC', value: '0.92' },
      { label: 'ACCURACY', value: '89.4%' },
      { label: 'RECALL', value: '91.2%' },
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'SMOTE', 'Classification'],
    githubUrl: 'https://github.com/mohamedsuhailmsivetai-create/ML-Projects',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Engineered median imputation for missing credit indicators, one-hot encoding for applicant profile flags, and threshold tuning at 0.42 cutoff.',
    insights: [
      'Debt-to-Income (DTI) ratio combined with credit history length accounted for over half of default separation.',
    ],
  },
  {
    number: '07',
    id: 'employee-attrition-prediction',
    title: 'Employee Attrition Prediction',
    category: 'Machine Learning',
    subtitle: 'HUMAN CAPITAL CHURN & RETENTION MODELING',
    valueProposition:
      'Predictive workforce retention classifier pinpointing flight risks and departmental turnover drivers across 30+ workplace metrics.',
    description:
      'Trained ensemble classification models on enterprise HR data to calculate employee churn probabilities and formulate data-backed retention incentives.',
    highlights: [
      'Analyzed 30+ HR attributes including overtime, promotions, and compensation',
      'Correlation heatmaps identifying primary employee dissatisfaction drivers',
      'Feature importance ranking via Random Forest Gini impurity',
      'Strategic HR retention advisory recommendations',
    ],
    metrics: [
      { label: 'F1 SCORE', value: '0.86' },
      { label: 'PRECISION', value: '87.5%' },
      { label: 'ATTRIBUTES', value: '32 Factors' },
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'HR Analytics'],
    githubUrl: 'https://github.com/mohamedsuhailmsivetai-create/ML-Projects',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Executed full EDA with Seaborn pairplots. Implemented balanced random forests with hyperparameter pruning for interpretability.',
    insights: [
      'Uncompensated recurring overtime paired with lack of stock options doubled attrition probability within 18 months.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    skills: [
      { name: 'Python', logoKey: 'python', highlight: true },
      { name: 'SQL', logoKey: 'sql', highlight: true },
      { name: 'Java', logoKey: 'java' },
      { name: 'HTML', logoKey: 'html' },
      { name: 'CSS', logoKey: 'css' },
    ],
  },
  {
    title: 'DATA SCIENCE & MACHINE LEARNING',
    skills: [
      { name: 'Pandas', logoKey: 'pandas', highlight: true },
      { name: 'NumPy', logoKey: 'numpy', highlight: true },
      { name: 'Scikit-learn', logoKey: 'scikitlearn', highlight: true },
      { name: 'Exploratory Data Analysis' },
      { name: 'Machine Learning', highlight: true },
      { name: 'Predictive Analytics' },
      { name: 'Statistical Analysis' },
      { name: 'Data Cleaning' },
    ],
  },
  {
    title: 'VISUALIZATION & BI',
    skills: [
      { name: 'Power BI', logoKey: 'powerbi', highlight: true },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Microsoft Excel' },
      { name: 'Business Intelligence', highlight: true },
    ],
  },
  {
    title: 'DEVELOPMENT & TOOLS',
    skills: [
      { name: 'Git', logoKey: 'git' },
      { name: 'GitHub', logoKey: 'github', highlight: true },
      { name: 'Microsoft PowerPoint' },
      { name: 'Jupyter Notebooks' },
      { name: 'VS Code' },
    ],
  },
  {
    title: 'PROFESSIONAL COMPETENCIES',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Analytical Thinking' },
      { name: 'Team Collaboration' },
      { name: 'Communication' },
      { name: 'Leadership' },
      { name: 'Time Management' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'DATA SCIENTIST INTERN',
    company: 'Big Bucks Innovation Pvt. Ltd.',
    location: 'Chennai, India',
    period: 'May 2026 – June 2026',
    bullets: [
      'Performed data preprocessing, cleaning, and exploratory data analysis using Python, Pandas, and NumPy.',
      'Developed and evaluated machine learning models with Scikit-learn for predictive analytics.',
      'Created visualizations using Matplotlib and Seaborn to support business decision-making.',
      'Assisted in building Power BI dashboards, wrote SQL queries for structured data analysis, and collaborated on end-to-end data science solutions.',
    ],
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Power BI',
      'SQL Queries',
      'EDA',
      'Matplotlib',
      'Seaborn',
    ],
  },
];

export const EDUCATION: EducationItem = {
  degree: 'Bachelor of Science',
  major: 'Computer Science with Artificial Intelligence',
  institution: 'S.I.V.E.T College',
  location: 'Chennai, India',
  period: 'June 2024 – May 2027',
  performance: '87%',
  performanceLabel: 'LAST SEMESTER',
  bullets: [
    'Curriculum specialized in Artificial Intelligence, predictive modeling architectures, and relational database systems.',
    'Achieved 87% semester performance, leading collegiate data analytics cohorts and technical discussions.',
    'Core Coursework: Machine Learning Foundations, Relational Databases (SQL), Advanced Data Structures, Statistics & Probability.',
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'nptel-python-for-data-science',
    title: 'Python for Data Science',
    issuer: 'NPTEL / IIT Madras',
    badge: 'ELITE · 62%',
    score: '62% (Elite)',
    session: 'July–August 2026',
    credits: '2 Credits',
    examBreakdown: 'Online Assignments: 22.33/25 · Proctored Exam: 39/75',
    certifiedCount: '16,840 candidates certified',
    description: 'National Programme on Technology Enhanced Learning (NPTEL) Online Certification funded by the Ministry of Education (MoE), Govt. of India, coordinated by Indian Institute of Technology Madras (IIT Madras).',
    skills: ['Python 3', 'Pandas', 'NumPy', 'Data Wrangling', 'Exploratory Data Analysis', 'Scikit-learn', 'Predictive Modeling'],
    credentialId: 'NPTEL26CS107S153502083',
    verificationUrl: 'https://beta.nptel.ac.in/verify/NOC-5KYN-Q0YZ-JBFDE',
  },
  {
    id: 'power-bi-analyzing-visualizing',
    title: 'Analyzing and Visualizing Data with Microsoft Power BI',
    issuer: 'Microsoft',
    skills: ['Power BI', 'DAX Measures', 'Star Schema Modeling', 'Executive Dashboard Publishing'],
    credentialId: 'CertX / 36a28147',
    verificationUrl: 'https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba611397025',
  },
  {
    id: 'ibm-data-fundamentals',
    title: 'IBM Certified Data Fundamentals',
    issuer: 'IBM',
    skills: ['Data Architecture', 'Big Data Ecosystems', 'Data Governance', 'SQL Foundations'],
    credentialId: 'Credly / IBM',
    verificationUrl: 'https://www.credly.com/badges/f9d97f15-a467-4e44-b6b2-e07f548780bc/public_url',
  },
  {
    id: 'deloitte-data-analytics',
    title: 'Deloitte Australia – Data Analytics Job Simulation',
    issuer: 'Deloitte Australia / Forage',
    skills: ['Forensic Data Analytics', 'Executive Briefings', 'Data Synthesis', 'Business Storytelling'],
    credentialId: 'Forage / 9PBTqmSxAf',
    verificationUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a355ea546f317f60a26f84e_1782565734944_completion_certificate.pdf',
  },
  {
    id: 'python-for-data-science-cognitive',
    title: 'Python For Data Science',
    issuer: 'Cognitive Class / IBM',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Data Wrangling', 'Matplotlib'],
    credentialId: 'Cognitive Class / 6ebb427a',
    verificationUrl: 'https://courses.cognitiveclass.ai/certificates/6ebb427a7ba740fcabe2d503d4cc4d4c',
  },
  {
    id: 'web-dev-fundamentals',
    title: 'Web Development Fundamentals',
    issuer: 'Professional Certification / Credly',
    skills: ['HTML5', 'CSS3', 'Modern Web Standards', 'DOM Manipulation'],
    credentialId: 'Credly / 3de757b9',
    verificationUrl: 'https://www.credly.com/badges/3de757b9-216f-463c-b106-140e252357d3/linked_in_profile',
  },
];
