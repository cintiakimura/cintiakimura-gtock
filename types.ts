

export interface ModuleAssets {
  videoUrl?: string;
  podcastUrl?: string;
  slidesUrl?: string;
  infographicUrl?: string;
}

export interface Module {
  id: number;
  title: string;
  path: string;
  quizPath: string;
  content?: string;
  assets?: ModuleAssets;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
  explanation: string;
}

export interface Quiz {
  questions: Question[];
}