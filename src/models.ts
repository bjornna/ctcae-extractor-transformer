
/**
 * Defines the simplified CTCAE model to be used in the
 */
export type CTCAE_MODEL = {
  code: number;
  category: string;
  term: string;
  g1: string;
  g2: string;
  g3: string;
  g4: string;
  g5: string;
  definition: string;
  change: string;
};

/**
 * Defines the columns in the Excel spreadshett 
 */
export type CPCA_ROW = {
  "MedDRA Code": number;
  "MedDRA SOC": string;
  "CTCAE Term": string;
  "Grade 1   ": string;
  "Grade 2   ": string;
  "Grade 3   ": string;
  "Grade 4   ": string;
  "Grade 5   ": string;
  "Definition": string;
  "CTCAE v5.0 Change": string;
};

export type CTCAE_DATABASE = {
  categories: CTCAE_CATEGORY[];
  models: CTCAE_MODEL[];
};
export type CTCAE_CATEGORY = {
  id: number;
  name: string;
};