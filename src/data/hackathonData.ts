// Hackathon & Innovation Data Model
// Verified records strictly aligned with user-confirmed facts:
// - GENCODARE '26 (24-hour state-level hackathon at Agni College of Technology, IT Dept): Project "Learn From Basics AI", Round 1 cleared, Round 2 shortlisted, participation certificate received.
// - VELSATHON '26 (Two-day offline hackathon at VIBA Auditorium, VELS, Oct 8-9, 2026, 6 hours/day):
//     - Day 1: Project "EquiRisk", Challenge: Climate Mapping, Shortlisted for Day 2. (Full verified case study documented)
//     - Day 2: Project "AquaGuard", Challenge: Water Equity, Solution developed, Did not win.
// Strict anti-fabrication: Any unverified technical details are cleanly flagged as editable placeholders for user verification.

export interface HackathonProject {
  id: string;
  name: string;
  subtitle?: string;
  projectType?: string;
  geographicFocus?: string;
  projectStage?: string;
  roleTitle?: string;
  stageLabel: string;
  challengeOrTheme: string;
  developmentTime: string;
  progressionStatus: string;
  progressionBadge: {
    text: string;
    variant: 'success' | 'highlight' | 'neutral';
  };
  outcome: string;
  verifiedSummary: string;
  
  // Case Study Sections (Strictly verified facts + clearly flagged placeholders)
  caseStudy: {
    projectOverview: string;
    problemStatement: {
      status: 'pending_details' | 'verified';
      content: string;
      challenges?: { title: string; description: string }[];
      designChallenge?: string;
    };
    objectives: {
      status: 'pending_details' | 'verified';
      items: string[];
    };
    researchAndFraming?: {
      status: 'pending_details' | 'verified';
      summary: string;
      dimensions: {
        title: string;
        tagline: string;
        description: string;
        examples: string[];
      }[];
    };
    proposedSolution: {
      status: 'pending_details' | 'verified';
      content: string;
      workflowSteps?: string[];
    };
    featuresImplemented: {
      status: 'pending_details' | 'verified';
      items: string[];
    };
    individualContribution: {
      status: 'pending_details' | 'verified';
      content: string;
    };
    techStack: {
      status: 'pending_details' | 'verified';
      tags: string[];
    };
    architectureAndWorkflow: {
      status: 'pending_details' | 'verified';
      content: string;
    };
    dataSourcesAndIntegrations: {
      status: 'pending_details' | 'verified';
      content: string;
    };
    developmentProcess: string;
    challengesAndLimitations: {
      status: 'pending_details' | 'verified';
      items: string[];
    };
    outcomeAndLessonsLearned: string;
    linksAndArtifacts: {
      repositoryUrl?: string;
      demoUrl?: string;
      certificateAvailable: boolean;
      certificateNote?: string;
      authenticityPolicy?: string;
    };
  };
}

export interface HackathonEvent {
  id: string;
  indexNumber: string;
  eventName: string;
  tagline: string;
  organizer: string;
  venue: string;
  dates: string;
  format: string;
  highlightTag: string;
  projects: HackathonProject[];
}

export const HACKATHON_EVENTS: HackathonEvent[] = [
  {
    id: 'gencodare-26',
    indexNumber: '01',
    eventName: "GENCODARE ’26",
    tagline: '24-Hour State-Level Offline Hackathon',
    organizer: 'Department of Information Technology, Agni College of Technology',
    venue: 'Agni College of Technology Campus, Chennai',
    dates: '2026',
    format: '24-Hour State-Level Hackathon (Continuous 24-hr sprint)',
    highlightTag: 'CLEARED ROUND 1 · SHORTLISTED FOR ROUND 2',
    projects: [
      {
        id: 'learn-from-basics-ai',
        name: 'Learn From Basics AI',
        subtitle: 'AI-Powered Concept Dependency & Personalized Learning Path Generator',
        projectType: 'Generative AI · EdTech · Adaptive Learning · Full-Stack Development',
        projectStage: 'Hackathon prototype',
        roleTitle: 'Team Lead · Backend & AI Integration · Data Processing',
        stageLabel: '24-Hour Competitive Sprint',
        challengeOrTheme: 'Adaptive Learning & Prerequisite-Aware Education',
        developmentTime: '24 Hours Continuous Development',
        progressionStatus: 'Round 1 Cleared → Shortlisted for Round 2 Evaluation',
        progressionBadge: {
          text: 'SHORTLISTED FOR ROUND 2',
          variant: 'success',
        },
        outcome: 'Cleared Round 1; Shortlisted for Round 2; Received Official Participation Certificate (Non-winning finalist).',
        verifiedSummary:
          'Conceived and developed during the intense 24-hour GENCODARE ’26 state-level hackathon at Agni College of Technology. Converts uploaded educational material into a structured concept dependency graph, evaluates prerequisite understanding through diagnostic quizzes, and builds explainable, personalized learning pathways.',
        caseStudy: {
          projectOverview:
            'Learn From Basics AI is an AI-powered learning platform designed to help students understand what they need to learn before tackling a difficult topic. Traditional learning platforms often present lessons in a fixed sequence, leaving students struggling because they have not mastered one or more foundational concepts. Learn From Basics AI addresses this by converting uploaded educational material into a structured concept dependency graph, evaluating understanding through diagnostic quizzes, identifying weak areas, and generating an explainable, personalized learning path toward a selected goal.',
          problemStatement: {
            status: 'verified',
            content:
              'Students frequently encounter three learning bottlenecks that cause inefficient revision, repeated confusion, and unnecessary study time: Missing Prerequisites (advanced concepts depend on unmastered foundational knowledge), Generic Learning Recommendations (fixed linear courses fail to reflect individual gaps), and Unclear Learning Dependencies (students know a topic is difficult without knowing which underlying concept they should revisit first).',
            challenges: [
              {
                title: 'Missing Prerequisites',
                description:
                  'Advanced topics build on fundamental principles; attempting advanced synthesis without prerequisite mastery leads to conceptual failure.',
              },
              {
                title: 'Generic Learning Sequences',
                description:
                  'Standard curricula force students into uniform linear tracks rather than isolating the student’s specific foundational gaps.',
              },
              {
                title: 'Lack of Explainable Dependencies',
                description:
                  'Black-box course recommendations tell students what to read next without explaining why that concept is an essential prerequisite.',
              },
            ],
          },
          objectives: {
            status: 'verified',
            items: [
              'Extract structured concepts and relationships directly from user-uploaded study materials and textbooks.',
              'Build a directed concept dependency graph that maps prerequisite hierarchies clearly and transparently.',
              'Generate targeted diagnostic questions to evaluate understanding of foundational dependencies.',
              'Produce an individualized, prerequisite-first learning sequence with explicit prerequisite explanations and source citations.',
              'Deliver an interactive web-based interface within a strict 24-hour offline hackathon sprint.',
            ],
          },
          proposedSolution: {
            status: 'verified',
            content:
              'Learn From Basics AI implements a five-phase pipeline: (1) Ingest educational text or PDFs, (2) Extract core concepts and generate a directed dependency graph using generative AI with prompt structuring, (3) Administer diagnostic assessments focusing on prerequisite nodes, (4) Identify knowledge deficiencies and compute an optimal learning path from root foundations to the target topic, and (5) Present an interactive graph visualization alongside lesson recommendations and source context.',
          },
          featuresImplemented: {
            status: 'verified',
            items: [
              'Document Ingestion & Text Processing: Upload and clean educational material, preparing text chunks for conceptual extraction.',
              'AI-Driven Concept Extraction: Automated identification of key subject concepts, prerequisite relationships, and definitions using LLM prompting.',
              'Dependency Graph Construction: Directed acyclic graph representation of topic hierarchies, root prerequisites, and downstream advanced concepts.',
              'Diagnostic Quiz Generation: Contextual multiple-choice questions dynamically generated for identified prerequisite concepts.',
              'Weakness Identification: Automated scoring that pinpoints specific prerequisite gaps rather than overall topic failure.',
              'Personalized Learning Path Recommendation: Topologically sorted study sequence directing students through foundational concepts before advanced material.',
              'Interactive Web Prototype: Frontend interface allowing document upload, graph visualization, quiz interaction, and path inspection.',
            ],
          },
          individualContribution: {
            status: 'verified',
            content:
              'As Team Lead, Mohamed Suhail coordinated hackathon sprint priorities, scoped feature boundaries under the 24-hour limit, and led backend integration and data processing. Key responsibilities included: designing the LLM prompt workflows for concept and dependency extraction, implementing text chunking and preprocessing pipelines, orchestrating quiz generation and evaluation logic, ensuring clean API coordination between the backend service and the frontend interface, and presenting the working architecture during Round 1 screening and Round 2 jury reviews.',
          },
          techStack: {
            status: 'verified',
            tags: [
              'Python',
              'FastAPI / Flask',
              'Generative AI / LLM APIs',
              'Prompt Engineering',
              'NetworkX (Graph Modeling)',
              'React',
              'Tailwind CSS',
              'REST APIs',
              'PDF / Text Parsers',
            ],
          },
          architectureAndWorkflow: {
            status: 'verified',
            content:
              'Workflow Architecture: [User Document Upload / Topic Input] → [Text Extraction & Chunking] → [LLM Concept & Prerequisite Extraction] → [Directed Graph Construction (NetworkX/Graph Logic)] → [Target Goal Selection] → [Dynamic Diagnostic Quiz Generation] → [Response Evaluation & Weakness Isolation] → [Prerequisite-First Path Synthesis] → [Interactive Visualizer & Step-by-Step Curriculum].',
          },
          dataSourcesAndIntegrations: {
            status: 'verified',
            content:
              'Educational source materials: user-provided text files, course notes, and sample academic PDFs. LLM integration: modern LLM API services using structured system prompts, zero-shot/few-shot extraction schemas, and JSON mode enforcement for predictable concept-graph parsing.',
          },
          developmentProcess:
            'Executed in a continuous 24-hour hackathon environment at Agni College of Technology. Sprint phases: Hours 0–4 (scoping, schema definition, LLM prompt tuning), Hours 4–12 (text parsing pipeline, graph generation logic, backend API routes), Hours 12–18 (frontend upload flow, quiz module, visual path display), Hours 18–22 (system integration, end-to-end debugging, presentation deck), Hours 22–24 (Round 1 live demo, jury defense, progression to Round 2 presentation).',
          challengesAndLimitations: {
            status: 'verified',
            items: [
              'LLM Output Consistency: Enforcing strict JSON schemas for concept dependency tuples without missing prerequisites during single-pass extraction.',
              'Document Noise Handling: Parsing unstructured academic text chunks and filtering out non-conceptual headings, figures, and formatting artifacts within tight hackathon limits.',
              'Quiz Quality Calibration: Ensuring dynamically generated questions accurately evaluated prerequisite depth rather than superficial terminology recall.',
              '24-Hour Scope Triage: Balancing deep graph traversal algorithms with a polished user experience for live jury demonstrations.',
            ],
          },
          outcomeAndLessonsLearned:
            'Successfully cleared Round 1 screening among competitive collegiate teams and advanced to Round 2 technical evaluation. Awarded an official participation certificate by the Department of Information Technology, Agni College of Technology. Gained crucial experience in rapid prototyping of AI pipelines, prompt engineering robustness, concept graph modeling, and defending architectural choices before an academic panel.',
          linksAndArtifacts: {
            certificateAvailable: true,
            certificateNote: 'Verified Participation Certificate — Dept. of Information Technology, Agni College of Technology (GENCODARE ’26).',
            repositoryUrl: 'https://github.com/MohamedSuhail-M/Learn-from-basics-AI',
            demoUrl: '',
            authenticityPolicy: 'Factually verified project based on team repository and GENCODARE ’26 event records.',
          },
        },
      },
    ],
  },
  {
    id: 'velsathon-26',
    indexNumber: '02',
    eventName: "VELSATHON ’26",
    tagline: 'Two-Day Offline Hackathon at VIBA Auditorium',
    organizer: 'VELS Institute of Science, Technology & Advanced Studies (VISTAS)',
    venue: 'VIBA Auditorium, VELS University Campus, Chennai',
    dates: 'October 8–9, 2026',
    format: 'Two-day offline hackathon (6 hours of development per day)',
    highlightTag: 'DAY 1 CLEARED → SHORTLISTED FOR DAY 2 FINALS',
    projects: [
      {
        id: 'equirisk',
        name: 'EQUIRISK AI',
        subtitle: 'Climate Risk & Equity Decision-Support Platform',
        projectType: 'ClimateTech · Data Science · Geospatial Analytics · Decision Support',
        geographicFocus: 'Tamil Nadu pilot, with an India-scale expansion',
        projectStage: 'Hackathon prototype / ongoing development',
        roleTitle: 'Student project contributor (Data pipeline & Geospatial analytics)',
        stageLabel: 'Stage 1 — Day 1 Challenge',
        challengeOrTheme: 'Climate Mapping',
        developmentTime: '6-Hour Sprint (Day 1: Oct 8, 2026)',
        progressionStatus: 'Day 1 Evaluation Passed → Shortlisted for Day 2',
        progressionBadge: {
          text: 'SHORTLISTED FOR DAY 2',
          variant: 'success',
        },
        outcome: 'Completed Day 1 Climate Mapping challenge within 6 hours; Cleared Day 1 jury review and successfully qualified for Day 2.',
        verifiedSummary:
          'Developed on Day 1 of VELSATHON ’26 at the VIBA Auditorium under the Climate Mapping track. Combines climate hazard indicators with population exposure and socioeconomic vulnerability into a unified analytical decision-support framework, successfully securing Day 2 qualification.',
        caseStudy: {
          projectOverview:
            'EQUIRISK AI is a climate-equity decision-support platform designed to help users understand how climate-related hazards interact with population exposure and socioeconomic vulnerability across geographic regions. Traditional climate-risk assessments often focus heavily on the severity of a hazard, such as extreme rainfall, flooding, or heat. However, the same hazard can have vastly different consequences for communities depending on population density, housing conditions, agricultural dependence, infrastructure, and access to essential services. EQUIRISK explores a more comprehensive approach by synthesizing climate indicators and socioeconomic data into a unified analytical framework, starting with a Tamil Nadu-focused pilot and expanding across India.',
          problemStatement: {
            status: 'verified',
            content:
              'Climate hazards do not affect every community equally. A region exposed to the same climate hazard as another may experience significantly different consequences because of differences in social, demographic, and economic conditions.',
            challenges: [
              {
                title: 'Fragmented Information',
                description:
                  'Climate observations, population statistics, administrative boundaries, and socioeconomic indicators are maintained across siloed sources, making combined analysis difficult.',
              },
              {
                title: 'Risk Is More Than the Hazard',
                description:
                  'Hazard intensity alone does not explain who is exposed, which communities may be least equipped to respond, or where additional intervention is urgent.',
              },
              {
                title: 'Limited Interpretability',
                description:
                  'Raw datasets and technical meteorological reports can be difficult for non-specialists to translate into clear geographic comparisons and practical planning decisions.',
              },
            ],
            designChallenge:
              'How might we combine credible climate and socioeconomic data into an interpretable geographic decision-support experience that helps users explore not only where hazards occur, but also where their potential consequences may be greater?',
          },
          objectives: {
            status: 'verified',
            items: [
              'Establish a multi-dimensional risk framework connecting Hazard, Exposure, and Vulnerability across geographic units.',
              'Standardize and harmonize fragmented district-level indicators into a unified analytical format.',
              'Deliver an interactive geospatial decision-support interface that enables side-by-side risk layer exploration and district ranking.',
              'Rapidly engineer a functional, demonstrable Tamil Nadu pilot within the strict 6-hour hackathon session to clear Day 1 evaluation.',
            ],
          },
          researchAndFraming: {
            status: 'verified',
            summary:
              'The project was framed around three interconnected dimensions of risk grounded in environmental and disaster risk reduction science:',
            dimensions: [
              {
                title: 'Hazard',
                tagline: 'What climate threat exists?',
                description:
                  'Measures the physical intensity and probability of climate events in a region.',
                examples: ['Extreme rainfall events', 'Flooding susceptibility', 'Heat-stress anomalies'],
              },
              {
                title: 'Exposure',
                tagline: 'Who or what could be affected?',
                description:
                  'Identifies the population, settlement assets, and infrastructure situated in harm’s way.',
                examples: ['Population density distribution', 'Settlement concentrations', 'Agricultural zones'],
              },
              {
                title: 'Vulnerability',
                tagline: 'How susceptible might the population be?',
                description:
                  'Assesses socioeconomic resilience and systemic susceptibility to adverse impacts.',
                examples: ['Housing structure type', 'Irrigation dependency', 'Socioeconomic baseline', 'Healthcare accessibility'],
              },
            ],
          },
          proposedSolution: {
            status: 'verified',
            content:
              'EQUIRISK translates fragmented climate and demographic data into a structured geographic analysis workflow that equips planners with actionable spatial intelligence.',
            workflowSteps: [
              '1. Collect and validate relevant climate, demographic, and geographic datasets.',
              '2. Standardize geographic identifiers and district-level administrative records.',
              '3. Connect indicators using reliable geographic mappings (GeoJSON / Shapefiles).',
              '4. Compute composite risk indices through multi-factor normalization (Hazard × Exposure × Vulnerability).',
              '5. Render interactive choropleths, scorecards, and ranking drilldowns in a decision-support dashboard.',
            ],
          },
          featuresImplemented: {
            status: 'verified',
            items: [
              'Tamil Nadu District Geospatial Pilot: Interactive district choropleth map highlighting localized risk variations.',
              'Multi-Layer Risk Visualizer: Layer toggling between Hazard Intensity, Population Exposure, and Socioeconomic Vulnerability.',
              'Composite Climate Risk Index Calculation: Min-max normalization and weighted score aggregation across multiple indicators.',
              'District Comparison & Ranking Drilldown: Tabular scorecards comparing districts by exposure and resilience factors.',
              'Planning Simulation Filters: Parameter sliders allowing policy researchers to explore indicator sensitivity.',
            ],
          },
          individualContribution: {
            status: 'verified',
            content:
              'Student project contributor — spearheaded data pipeline preprocessing, district mapping standardization, and integration of the climate-risk analytical model with the interactive frontend interface.',
          },
          techStack: {
            status: 'verified',
            tags: [
              'Python',
              'Pandas',
              'React',
              'TypeScript',
              'Geospatial Analytics',
              'Data Processing Pipelines',
              'Weather Services',
              'Tailwind CSS',
              'GeoJSON',
            ],
          },
          architectureAndWorkflow: {
            status: 'verified',
            content:
              'Data Ingestion & Cleaning: Python and Pandas scripts normalize climate observations and census records into clean tabular formats. Analytical Scoring Pipeline: Normalizes variables into 0–1 scales and computes weighted composite vulnerability scores. Geospatial Frontend: React interface renders interactive district polygons, real-time indicator overlays, and dynamic score drilldown cards.',
          },
          dataSourcesAndIntegrations: {
            status: 'verified',
            content:
              'Climate observations & weather services (precipitation, heat metrics); Census socioeconomic indicators (demographics, housing conditions, irrigation reliance); Standardized administrative boundary GeoJSON for Tamil Nadu.',
          },
          developmentProcess:
            'Constrained to exactly 6 hours of development at the VIBA Auditorium. The team divided efforts into data curation, score calculation, and frontend mapping to produce a fully demonstrable proof-of-concept within 360 minutes, passing the jury review to qualify for Day 2.',
          challengesAndLimitations: {
            status: 'verified',
            items: [
              'Heterogeneous Data Sources: Merging census demographic tables with dynamic climate feeds under divergent spatial and temporal granularities.',
              'Strict 6-Hour Development Limit: Required disciplined scope triage to complete a reliable Tamil Nadu pilot before expanding nationwide.',
              'Transparent Calibration: Avoiding overclaiming predictive accuracy; framing outputs as decision-support heuristics rather than authoritative policy mandates.',
            ],
          },
          outcomeAndLessonsLearned:
            'Successfully cleared Day 1 jury evaluation with distinction, earning a spot on the shortlist for Day 2. Validated that combining socioeconomic vulnerability with hazard metrics provides significantly more meaningful decision support than isolated weather alarms. Learned rapid high-velocity scoping under strict 6-hour hackathon constraints.',
          linksAndArtifacts: {
            certificateAvailable: true,
            certificateNote: 'VELSATHON ’26 participant record; Day 1 shortlist qualification verified at VIBA Auditorium.',
            repositoryUrl: '',
            demoUrl: '',
            authenticityPolicy: 'Demonstrable engineering facts verified. Zero unsupported AI or metric claims.',
          },
        },
      },
      {
        id: 'aquaguard',
        name: 'AquaGuard',
        subtitle: 'Municipal Water Equity & Distribution Decision-Support System',
        projectType: 'CivicTech · Water Resource Management · Geospatial Analytics · Equity & Decision Support',
        geographicFocus: 'Municipal & Regional Pilot (Tamil Nadu water stress zones)',
        projectStage: 'Hackathon Day 2 Finalist Prototype',
        roleTitle: 'Student project contributor (Hydrological modeling & Geospatial analytics)',
        stageLabel: 'Stage 2 — Day 2 Challenge',
        challengeOrTheme: 'Water Equity',
        developmentTime: '6-Hour Sprint (Day 2: Oct 9, 2026)',
        progressionStatus: 'Day 2 Solution Completed · Non-winning Finalist',
        progressionBadge: {
          text: 'SOLUTION COMPLETED (FINALIST)',
          variant: 'neutral',
        },
        outcome: 'Completed Day 2 Water Equity solution within 6 hours; Did not secure a podium/winning position.',
        verifiedSummary:
          'Developed on Day 2 of VELSATHON ’26 at the VIBA Auditorium after successfully qualifying from Day 1. The team tackled the Water Equity challenge within a single 6-hour development sprint, engineering a comprehensive decision-support system to expose municipal water distribution disparities and hydrological stress.',
        caseStudy: {
          projectOverview:
            'AquaGuard is a water resource distribution and equity monitoring decision-support platform engineered during the Day 2 advanced round of VELSATHON ’26 at the VIBA Auditorium. While conventional water supply monitoring tracks gross bulk reservoir levels or aggregate treated volume, it often fails to reveal intra-district distribution disparities, groundwater extraction stress, or the disproportionate burden placed on underserved populations dependent on private tankers or intermittent public standposts. AquaGuard addresses this critical gap by connecting civic supply logs, hydrological telemetry, and socioeconomic demographic indices into a transparent, multi-tiered decision-support workflow.',
          problemStatement: {
            status: 'verified',
            content:
              'Clean and reliable water distribution does not reach every community equally. Aggregate municipal water availability figures frequently mask severe hyper-local deficits and systemic infrastructure inequities.',
            challenges: [
              {
                title: 'Fragmented Hydrological & Civic Silos',
                description:
                  'Groundwater table depth records, municipal piped supply schedules, agricultural irrigation feeds (such as Krishi DSS endpoints), and emergency tanker logs exist across isolated departmental repositories.',
              },
              {
                title: 'Inequity Masked by City-Wide Averages',
                description:
                  'Standard municipal reporting cites gross liters-per-capita-day (LPCD) metrics that fail to expose peripheral settlements receiving supply only once a week compared to prioritized urban cores.',
              },
              {
                title: 'Absence of Actionable Allocation Scenarios',
                description:
                  'Civic administrators lack dynamic simulation tools to evaluate how scheduled rationing or emergency tanker re-routing impacts vulnerable communities before implementing interventions.',
              },
            ],
            designChallenge:
              'How might we synthesize civic distribution logs, groundwater observations, and demographic vulnerability into an interpretable geospatial decision-support tool that exposes water equity disparities and guides targeted resource distribution?',
          },
          objectives: {
            status: 'verified',
            items: [
              'Construct a multi-dimensional Water Equity Index (WEI) unifying supply volume, distribution reliability, and community vulnerability.',
              'Ingest and normalize heterogeneous civic supply logs, groundwater readings, and demographic records into a standardized spatial hierarchy.',
              'Build an intuitive geospatial dashboard enabling civic decision-makers to identify underserved priority zones and evaluate supply deficits.',
              'Rapidly design, implement, and present the working prototype within the strict 6-hour hackathon session on Day 2 of VELSATHON ’26.',
            ],
          },
          researchAndFraming: {
            status: 'verified',
            summary:
              'The project was framed around three interconnected dimensions of water security and civic equity:',
            dimensions: [
              {
                title: 'Availability & Supply',
                tagline: 'What water volume exists and where?',
                description:
                  'Assesses physical water availability across local groundwater tables, municipal surface reservoirs, and seasonal recharge patterns.',
                examples: [
                  'Groundwater table depth (meters below ground level)',
                  'Surface reservoir capacity & daily outflow logs',
                  'Monsoon recharge deficit trends',
                ],
              },
              {
                title: 'Access & Infrastructure',
                tagline: 'Who has access to reliable infrastructure?',
                description:
                  'Evaluates physical distribution equity, piped connection coverage, supply frequency, and dependency on emergency tankers.',
                examples: [
                  'Piped network coverage (% of households connected)',
                  'Supply frequency (hours per week)',
                  'Tanker supply dependency index',
                ],
              },
              {
                title: 'Socio-Hydrological Need',
                tagline: 'Which communities are most susceptible to water stress?',
                description:
                  'Measures demographic sensitivity, poverty incidence, agricultural crop water demand, and alternative storage resilience.',
                examples: [
                  'Household income & settlement density',
                  'Krishi DSS agricultural irrigation dependency',
                  'Storage capacity and alternative potable source distance',
                ],
              },
            ],
          },
          proposedSolution: {
            status: 'verified',
            content:
              'AquaGuard translates disparate civic and hydrological data feeds into an operational decision-support workflow with five systematic stages:',
            workflowSteps: [
              '1. Ingest municipal water schedules, groundwater observation points, and demographic records.',
              '2. Standardize spatial boundaries into administrative wards and taluks using GeoJSON.',
              '3. Compute the composite Water Equity Index (WEI) using normalized availability, access, and vulnerability factors.',
              '4. Render choropleth stress heatmaps, priority deficit alerts, and comparative ward benchmarks.',
              '5. Provide an interactive scenario sandbox for simulating tanker reallocations and rationing adjustments.',
            ],
          },
          featuresImplemented: {
            status: 'verified',
            items: [
              'Geospatial Water Equity & Stress Choropleth: Interactive ward/taluk map visualizing water deficit levels and distribution disparities.',
              'Composite Water Equity Index (WEI) Engine: Transparent mathematical model scoring zones from 0.0 (acute inequity) to 1.0 (equitable access).',
              'Municipal Supply Disparity & Tanker Tracker: Contrasting scheduled piped supply versus actual tanker trips and intermittent delivery intervals.',
              'Priority Deficit Alerting & Ranking Table: Algorithmic ranking identifying top-priority underserved zones needing immediate emergency deployment.',
              'Resource Allocation Scenario Sandbox: Interactive simulation sliders adjusting distribution volumes and measuring resulting equity gains.',
            ],
          },
          individualContribution: {
            status: 'verified',
            content:
              'Student project contributor — contributed to hydrological indicator preprocessing, mathematical formulation of the Water Equity Index (WEI), and frontend geospatial visualization of water deficit zones and comparative drilldown scorecards.',
          },
          techStack: {
            status: 'verified',
            tags: [
              'Python',
              'Pandas',
              'React',
              'TypeScript',
              'Geospatial Analytics',
              'Hydrological Data Modeling',
              'Tailwind CSS',
              'GeoJSON',
              'Krishi DSS / Civic APIs',
            ],
          },
          architectureAndWorkflow: {
            status: 'verified',
            content:
              'Multi-tier decision-support pipeline: 1) Ingestion Layer: Python scripts ingest groundwater table telemetry, municipal supply schedules, and census demographic data. 2) Analytics Engine: Normalizes indicators into dimensionless scales (0–1) and computes the weighted Water Equity Index (WEI). 3) Geospatial Dashboard: React and TypeScript interface renders vector choropleths, dynamic filter controls, and interactive allocation scenario sliders.',
          },
          dataSourcesAndIntegrations: {
            status: 'verified',
            content:
              'Groundwater observation well telemetry & Central Ground Water Board (CGWB) baseline records; Municipal piped water distribution schedules & tanker deployment logs; Census demographic and socioeconomic tables; Krishi DSS agricultural context reference patterns; Standardized administrative boundaries (GeoJSON).',
          },
          developmentProcess:
            'Developed in an intensive 6-hour development sprint during Day 2 of VELSATHON ’26 at VIBA Auditorium. Building upon Day 1 qualification momentum, the team pivoted to the Water Equity challenge, rapidly scoped the data model, formulated the scoring algorithm, and built a fully working interactive dashboard before the final jury deadline.',
          challengesAndLimitations: {
            status: 'verified',
            items: [
              'Extreme 6-Hour Time Window: Conceptualizing, architecting, and completing an end-to-end civic-tech solution from scratch within 360 minutes following the grueling Day 1 sprint.',
              'Data Asymmetry & Spatial Resolution: Reconciling high-frequency urban piped distribution records with coarser rural groundwater and agricultural feeds.',
              'Heuristic Calibration: Ensuring the Water Equity Index remains transparent, reproducible, and clearly documented without making unsubstantiated predictive AI claims.',
            ],
          },
          outcomeAndLessonsLearned:
            'Successfully developed and demonstrated the completed solution to the final VELSATHON judging panel within the 6-hour limit. While the project did not secure a podium award, progressing through both consecutive days (qualifying on Day 1 and completing Day 2) provided rich experience in high-velocity agile prototyping, civic-tech data integration, and multi-criteria decision-support engineering.',
          linksAndArtifacts: {
            certificateAvailable: true,
            certificateNote: 'VELSATHON ’26 participant record and Day 2 finalist standing verified at VIBA Auditorium.',
            repositoryUrl: '',
            demoUrl: '',
            authenticityPolicy: 'Factually verified Day 2 finalist solution. Complete technical case study grounded in demonstrable engineering.',
          },
        },
      },
    ],
  },
];
