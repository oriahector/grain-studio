/**
 * Clients Data
 */
export interface Client {
  name: string;
  type: string;
}

export const CLIENTS: Client[] = [
  { name: "Kiehl's", type: 'UGC Content' },
  { name: "Group L'Oreal", type: 'UGC Content' },
  { name: 'WETACA', type: 'UGC Content' },
  { name: 'Grosso Napoletano', type: 'Photography' },
  { name: 'Orna Group', type: 'Web Development' },
  { name: 'CIRCA Waste', type: 'Web Development' },
  { name: 'Tree Brothers', type: 'Web Development' },
  { name: 'ScandicGo', type: 'Photography' },
] as const;
