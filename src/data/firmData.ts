import { PracticeItem, TargetSector } from '../types';

export const TARGET_SECTORS: TargetSector[] = [
  {
    id: 'green-construction',
    name: 'Green Construction',
    tagline: 'Sustainable infrastructure, environmental permitting & decarbonization leadership',
    focus: 'Guiding progressive builders, sustainable materials innovators, and environmental developers through high-stakes civic approvals and sustainable brand architecture.',
    prPillar: 'Positioning executive leadership as pioneers in sustainable development, architectural resilience, and carbon-neutral standards.',
    publicAffairsPillar: 'Aligning with municipal planning commissions, state environmental bodies, and local community stakeholders to secure approvals.',
    personaProtection: 'Insulating developers from environmental bad-faith disputes and preempting hostile zoning campaigns before public hearings.',
    spotlightReadiness: 'Preparing leadership for landmark project unveilings, public testimony before planning commissions, and premier architecture forums.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    tagline: 'Health systems, bio-innovation, patient advocacy & regulatory navigation',
    focus: 'Protecting clinical reputation, navigating complex health department mandates, and elevating transformative medical advances.',
    prPillar: 'Crafting thoughtful institutional narratives for medical directors, health executives, and pioneering life-science innovators.',
    publicAffairsPillar: 'Engaging legislative health committees, regulatory agencies, and patient advocacy coalitions on policy and reimbursement frameworks.',
    personaProtection: 'Maintaining strict confidentiality under attorney-client privilege coordination during clinical scrutiny or regulatory reviews.',
    spotlightReadiness: 'Training medical chiefs for high-impact medical conferences, congressional health hearings, and tier-one broadcast interviews.'
  },
  {
    id: 'energy',
    name: 'Energy',
    tagline: 'Clean transition, grid resilience, utility regulation & public policy',
    focus: 'Navigating the intricate intersection of renewable power development, grid modernization, and municipal regulatory oversight.',
    prPillar: 'Articulating complex technological transitions into clear, persuasive narratives of regional economic vitality and reliable power.',
    publicAffairsPillar: 'Building authentic multi-county coalitions with local landowners, civic councils, and public utility commissioners.',
    personaProtection: 'Shielding energy executives from sensationalized policy disputes and hostile public utility proceedings.',
    spotlightReadiness: 'Preparing leaders for legislative energy panels, investor presentations, and major state capitol hearings.'
  },
  {
    id: 'education',
    name: 'Education',
    tagline: 'Higher education eminence, institutional governance & educational reform',
    focus: 'Insulating academic eminence, stewarding institutional transitions, and shaping state educational policy.',
    prPillar: 'Elevating chancellors, boards of trustees, and educational leaders as authoritative voices on generational learning and research.',
    publicAffairsPillar: 'Advocating before state legislative education committees, funding boards, and regional civic accreditation bodies.',
    personaProtection: 'Preempting campus crises, board-level disputes, and coordinated social discourse before media amplification takes root.',
    spotlightReadiness: 'Staging commencement addresses, legislative budget justifications, and global academic leadership summits.'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    tagline: 'Executive persona insulation, studio counsel & high-exposure media',
    focus: 'Managing high-velocity media scrutiny, creative asset launches, and executive reputation in an era of hyperactive news cycles.',
    prPillar: 'Disciplined narrative curation for studio executives, production principals, and high-profile creative organizations.',
    publicAffairsPillar: 'Guiding production incentive policy, labor coalition engagement, and municipal filming agreements.',
    personaProtection: 'Deflecting tabloid speculation, neutralizing bad-faith social campaigns, and safeguarding personal and enterprise integrity.',
    spotlightReadiness: 'Precision media choreography for premier festival debuts, keynote fireside chats, and global creative showcases.'
  }
];

export const PR_PRACTICES: PracticeItem[] = [
  {
    id: 'pr-1',
    pillar: 'pr',
    pillarLabel: 'Public Relations · Precision Architecture',
    number: '01',
    title: 'Crisis Architecture & Rapid Defense',
    summary: 'Preemptive operational containment and instant reputational fortification against reputational threats.',
    strategicObjective: 'Neutralize narrative contagion within the critical initial news window before algorithmic amplification takes hold.',
    operationalCapabilities: [
      'Real-time media war room deployment',
      'Legal counsel narrative synchronization & privilege coordination',
      'Digital counter-briefing & search ecosystem insulation',
      'Board-level decision support & rapid stakeholder triage'
    ],
    caseScenario: 'An enterprise facing urgent media inquiries and unverified reporting during a critical corporate moment.',
    measurableOutcome: 'Rapid containment established, reputational insulation secured, and verified factual record permanently affirmed.'
  },
  {
    id: 'pr-2',
    pillar: 'pr',
    pillarLabel: 'Public Relations · Precision Architecture',
    number: '02',
    title: 'Executive Positioning & Persona Eminence',
    summary: 'Transforming institutional chiefs and principal stakeholders into definitive sovereign voices of market authority.',
    strategicObjective: 'Cultivate impenetrable intellectual gravity for leaders across summits, tier-one editorial desks, and civic forums.',
    operationalCapabilities: [
      'Keynote & global forum narrative curation',
      'Tier-one longform profile management & selective editorial access',
      'Sovereign thought leadership white papers & authorial placement',
      'Broadcast interview preparation & hostile inquiry fencing'
    ],
    caseScenario: 'An executive assuming corporate leadership amidst institutional transition and industry transformation.',
    measurableOutcome: 'Executive persona fortified, positive institutional standing established, and authoritative market voice secured.'
  },
  {
    id: 'pr-3',
    pillar: 'pr',
    pillarLabel: 'Public Relations · Precision Architecture',
    number: '03',
    title: 'Geopolitical & Regulatory Advisory',
    summary: 'Navigating multi-jurisdictional scrutiny, cross-border considerations, and complex governmental reviews.',
    strategicObjective: 'Align strategic intelligence with public reputation to ensure commercial continuity and trust.',
    operationalCapabilities: [
      'Cross-border regulatory review narrative defense',
      'Multilateral institutional communications',
      'Policy compliance framing & stakeholder reassurance',
      'National bureau investigative engagement'
    ],
    caseScenario: 'An organization undergoing intensive cross-jurisdictional agency compliance and public interest scrutiny.',
    measurableOutcome: 'Full regulatory compliance affirmed, hostile narratives defused, and institutional credibility preserved.'
  },
  {
    id: 'pr-4',
    pillar: 'pr',
    pillarLabel: 'Public Relations · Precision Architecture',
    number: '04',
    title: 'M&A, Capital Markets & Transaction Communications',
    summary: 'Decisive communications choreography for transformative corporate transactions and major liquidity milestones.',
    strategicObjective: 'Protect enterprise reputation, minimize regulatory friction, and maintain stakeholder confidence throughout transactions.',
    operationalCapabilities: [
      'Transaction announcement staging & confidentiality management',
      'Pre-announcement leak containment & response protocols',
      'Investor & stakeholder narrative orchestration',
      'Antitrust & regulatory communications coordination'
    ],
    caseScenario: 'A landmark corporate consolidation facing intense public scrutiny and complex regulatory milestones.',
    measurableOutcome: 'Transaction narrative successfully held, regulatory hurdles cleared, and stakeholder trust maintained.'
  },
  {
    id: 'pr-5',
    pillar: 'pr',
    pillarLabel: 'Public Relations · Precision Architecture',
    number: '05',
    title: 'Tier-1 Investigative Media Relations',
    summary: 'Direct, disciplined engagement with premier investigative desks at influential publications.',
    strategicObjective: 'Deflect speculative stories, clarify factual records, and ensure truthful representation before publication.',
    operationalCapabilities: [
      'Off-the-record background negotiation with senior editors',
      'Comprehensive factual rebuttal dossiers & forensic documentation',
      'Pre-publication legal coordination aligned with litigation counsel',
      'Post-publication corrections & archival clarification'
    ],
    caseScenario: 'An organization responding to an in-depth investigative inquiry from national business and policy reporters.',
    measurableOutcome: 'Unsubstantiated claims withdrawn prior to publication; core institutional integrity preserved.'
  },
  {
    id: 'pr-6',
    pillar: 'pr',
    pillarLabel: 'Public Relations · Precision Architecture',
    number: '06',
    title: 'Cultural Narrative & Brand Redefinition',
    summary: 'Authoritative repositioning of institutions navigating generational shifts, market evolution, or societal changes.',
    strategicObjective: 'Reclaim moral and market authority through enduring, culturally resonant institutional storytelling.',
    operationalCapabilities: [
      'Comprehensive institutional heritage & future-state messaging',
      'Multi-stakeholder perception alignment',
      'High-impact cinematic visual asset commissions',
      'Strategic civic & institutional partnership architecture'
    ],
    caseScenario: 'A long-standing enterprise evolving into modern sustainable infrastructure and next-generation services.',
    measurableOutcome: 'Public standing renewed, authentic community goodwill established, and brand narrative solidified.'
  }
];

export const PA_PRACTICES: PracticeItem[] = [
  {
    id: 'pa-1',
    pillar: 'pa',
    pillarLabel: 'Public Affairs · Bespoke Strategic Architecture',
    number: '01',
    title: 'Campaign Management',
    summary: 'Comprehensive issue campaign governance that shapes legislative, municipal, and public outcomes.',
    strategicObjective: 'Build durable stakeholder consensus that protects enterprise freedom and advances policy objectives.',
    operationalCapabilities: [
      'Full-spectrum public affairs campaign mechanics',
      'Legislative session tracking & amendment advisory',
      'Multi-channel constituent & policymaker engagement',
      'Advocate recruitment, training, and strategic media deployment'
    ],
    caseScenario: 'An enterprise facing restrictive legislative proposals that threaten operational feasibility.',
    measurableOutcome: 'Key legislative committees aligned, balanced compromise reached, and statutory protections secured.'
  },
  {
    id: 'pa-2',
    pillar: 'pa',
    pillarLabel: 'Public Affairs · Bespoke Strategic Architecture',
    number: '02',
    title: 'Coalition & Grassroots Management',
    summary: 'Mobilizing authentic community, business, and civic allies into unified advocacy coalitions.',
    strategicObjective: 'Transform diffuse community support into organized, decisive advocacy at local and state levels.',
    operationalCapabilities: [
      'Broad-based community & civic leadership recruitment',
      'Local stakeholder coalition governance & charter alignment',
      'Constituent testimony coordination at public hearings',
      'District-by-district legislative touchpoint coordination'
    ],
    caseScenario: 'A pioneering development project seeking municipal zoning and environmental authorizations.',
    measurableOutcome: 'Broad civic coalition mobilized, local support affirmed on the public record, and full permits granted.'
  },
  {
    id: 'pa-3',
    pillar: 'pa',
    pillarLabel: 'Public Affairs · Bespoke Strategic Architecture',
    number: '03',
    title: 'Strategic Communications',
    summary: 'Precision messaging designed specifically for policymakers, regulatory staff, and legislative influencers.',
    strategicObjective: 'Frame complex regulatory questions in terms that resonate with policy priorities and economic health.',
    operationalCapabilities: [
      'Policy white papers & economic contribution briefings',
      'Executive memorandums tailored for committee counsel',
      'Capital insider media narrative placement',
      'Hearing testimony drafting & live hearing simulation'
    ],
    caseScenario: 'An innovative enterprise seeking regulatory pathway clarity from state oversight boards.',
    measurableOutcome: 'Bipartisan policy inquiry initiated, formal rulemaking clarified, and favorable guidance issued.'
  },
  {
    id: 'pa-4',
    pillar: 'pa',
    pillarLabel: 'Public Affairs · Bespoke Strategic Architecture',
    number: '04',
    title: 'Public Opinion Research',
    summary: 'Exacting qualitative research, sentiment analysis, and message stress-testing.',
    strategicObjective: 'Uncover the authentic levers of public persuasion before committing institutional resources.',
    operationalCapabilities: [
      'Predictive constituent sentiment modeling',
      'Discourse & vulnerability mapping',
      'In-depth stakeholder focus groups for narrative refinement',
      'Counter-argument benchmarking & message testing'
    ],
    caseScenario: 'An initiative requiring deep understanding of public sentiment prior to civic engagement.',
    measurableOutcome: 'Core persuasive themes identified, messaging aligned with community values, and public support established.'
  },
  {
    id: 'pa-5',
    pillar: 'pa',
    pillarLabel: 'Public Affairs · Bespoke Strategic Architecture',
    number: '05',
    title: 'Media Relations (Political & Policy Press)',
    summary: 'Deep-rooted relationships with capital bureaus, political columnists, and regulatory trade reporters.',
    strategicObjective: 'Ensure your perspective defines the framing of policy discussions across state and national capitals.',
    operationalCapabilities: [
      'Daily policy newsletter and trade journal placement',
      'Editorial board briefings with top regional publications',
      'Fast-response rebuttals to adversarial public statements',
      'Strategic briefings and background clarification'
    ],
    caseScenario: 'An organization navigating intense legislative scrutiny regarding statewide infrastructure modernization.',
    measurableOutcome: 'Balanced editorial framing secured, factual clarity established, and policy roadmap sustained.'
  },
  {
    id: 'pa-6',
    pillar: 'pa',
    pillarLabel: 'Public Affairs · Bespoke Strategic Architecture',
    number: '06',
    title: 'Digital Advocacy',
    summary: 'Precision digital mobilization activating engaged constituents directly into policymaker offices.',
    strategicObjective: 'Modernize advocacy through localized digital influence campaigns that educate and engage.',
    operationalCapabilities: [
      'Geo-targeted civic & legislative digital education',
      'Direct-to-lawmaker digital constituent engagement',
      'Thought-leader amplification & policy awareness',
      'Rigorous message testing and conversion optimization'
    ],
    caseScenario: 'An industry seeking statutory inclusion during an active legislative budget cycle.',
    measurableOutcome: 'Constituent voices mobilized into key legislative offices, ensuring priority language was maintained.'
  },
  {
    id: 'pa-7',
    pillar: 'pa',
    pillarLabel: 'Public Affairs · Bespoke Strategic Architecture',
    number: '07',
    title: 'Crisis Management (Government & Regulatory)',
    summary: 'High-intensity navigation of agency inquiries, regulatory investigations, and public committee hearings.',
    strategicObjective: 'Shield corporate officers and enterprise sovereignty during high-stakes government inquiries.',
    operationalCapabilities: [
      'Legislative hearing preparation & intense mock questioning',
      'Joint defense team communications coordination',
      'Simultaneous press gallery & stakeholder briefings',
      'Inquiry response coordination & public narrative containment'
    ],
    caseScenario: 'An organization subpoenaed for informational testimony by an oversight committee.',
    measurableOutcome: 'Testimony delivered with authority, inquiries addressed, and regulatory standing preserved.'
  }
];

export const METHOD_PHASES = [
  {
    step: '01',
    name: 'Persona Analysis & Threat Reconnaissance',
    tagline: 'Deep signal detection before challenges break into public view.',
    description: 'We diagnose emerging vulnerabilities, regulatory shifts, and public perceptions before they surface in the news cycle. Understanding the underlying workings of persona protection is our foundational first step.'
  },
  {
    step: '02',
    name: 'Sovereign Blueprinting & Truth Alignment',
    tagline: 'Engineering messages anchored in undeniable factual integrity.',
    description: 'Built on our fundamental principles of truth and honesty, we craft narrative architectures that withstand scrutiny from regulators, investigative journalists, and competitors alike.'
  },
  {
    step: '03',
    name: 'Spotlight Preparation & Coalition Alignment',
    tagline: 'Preparing leadership for the moments that define enterprise eminence.',
    description: 'Before our clients step into the spotlight, we prepare them with exhaustive message training, media rehearsal, and strategic third-party coalition alignment across Sacramento and national centers.'
  },
  {
    step: '04',
    name: 'Narrative Fortification & Enduring Sovereignty',
    tagline: 'Permanent reputational insulation that endures news cycle volatility.',
    description: 'We protect client wellbeing as our supreme duty, immunizing enterprise standing, legislative freedom, and long-term prestige across future generations.'
  }
];
