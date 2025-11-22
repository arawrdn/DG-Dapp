// src/data/themes.ts
export interface ThemeOption {
  index: number;
  answer: string;
}

export interface VoteTheme {
  id: number; // Corresponds to the themeId in your VoteManager.sol contract
  month: string;
  question: string;
  options: ThemeOption[];
}

export const CURRENT_THEMES: VoteTheme[] = [
  // Contoh data dari JSON Anda (Misal: oct_themes.json)
  {
    id: 1, 
    month: "October",
    question: "Should the project allocate funds for a new marketing campaign?",
    options: [
      { index: 0, answer: "Yes, allocate 10 ETH." },
      { index: 1, answer: "No, save the funds." },
    ]
  },
  // Tambahkan data dari nov_themes.json, december_themes.json, dsb.
];
