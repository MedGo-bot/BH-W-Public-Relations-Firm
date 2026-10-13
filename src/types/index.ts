export type PillarType = 'all' | 'pr' | 'pa';

export interface TargetSector {
  id: string;
  name: string;
  tagline: string;
  focus: string;
  prPillar: string;
  publicAffairsPillar: string;
  personaProtection: string;
  spotlightReadiness: string;
}

export interface PracticeItem {
  id: string;
  pillar: 'pr' | 'pa';
  pillarLabel: string;
  number: string;
  title: string;
  summary: string;
  strategicObjective: string;
  operationalCapabilities: string[];
  caseScenario: string;
  measurableOutcome: string;
}

export interface InquiryFormData {
  fullName: string;
  organization: string;
  title: string;
  workEmail: string;
  phone: string;
  pillarInterest: 'pr' | 'pa' | 'dual' | 'crisis';
  urgency: 'immediate' | 'regulatory_window' | 'strategic_planning';
  briefDescription: string;
  attorneyPrivilegeRequested: boolean;
  ndaRequired: boolean;
}
