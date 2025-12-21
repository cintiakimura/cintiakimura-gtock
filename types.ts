

export interface ModuleAssets {
  videoUrl?: { [key: string]: string };
  podcastUrl?: { [key: string]: string };
  slidesUrl?: { [key: string]: string };
  infographicUrl?: { [key: string]: string };
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