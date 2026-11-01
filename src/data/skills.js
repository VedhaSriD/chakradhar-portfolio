import { Code2, LayoutTemplate, Server, Database, BookOpen, LineChart, ShieldCheck, Cpu, Blocks, Wrench } from 'lucide-react';

// Levels: Learning < Foundational < Familiar < Working Knowledge. Edit honestly.
const s = (name, level) => ({ name, level });

export const skillCategories = [
  { title: 'Programming Languages', icon: Code2, items: [s('Python', 'Familiar'), s('Java', 'Familiar'), s('JavaScript', 'Familiar')] },
  { title: 'Frontend Development', icon: LayoutTemplate, items: [s('HTML5', 'Familiar'), s('CSS3', 'Familiar'), s('React', 'Familiar')] },
  { title: 'Backend Fundamentals', icon: Server, items: [s('FastAPI', 'Learning'), s('Node.js', 'Learning')] },
  { title: 'Database', icon: Database, items: [s('SQL', 'Familiar'), s('SQLite', 'Familiar'), s('PostgreSQL', 'Foundational')] },
  { title: 'CS Fundamentals', icon: BookOpen, items: [s('Data Structures and Algorithms', 'Foundational'), s('Object-Oriented Programming', 'Foundational'), s('DBMS', 'Foundational'), s('Operating Systems', 'Foundational'), s('Computer Networks', 'Foundational')] },
  { title: 'Data Analytics', icon: LineChart, items: [s('Data Analysis Fundamentals', 'Foundational'), s('Python-based Data Processing', 'Familiar'), s('Pandas', 'Familiar'), s('NumPy', 'Familiar'), s('Scikit-learn', 'Learning')] },
  { title: 'Cybersecurity & Network Security', icon: ShieldCheck, items: [s('Cybersecurity Fundamentals', 'Learning'), s('Network Security Fundamentals', 'Learning'), s('Cyber Threat Awareness', 'Learning'), s('Cyber Attack Concepts', 'Learning'), s('Network Protocol Fundamentals', 'Foundational'), s('Security Awareness', 'Foundational'), s('Basic Security Analysis', 'Learning')] },
  { title: 'IoT & Embedded Systems', icon: Cpu, items: [s('Arduino', 'Familiar'), s('Arduino Nano', 'Familiar'), s('Hardware-Software Interfacing', 'Foundational'), s('Sensor Interfacing', 'Foundational'), s('Embedded Systems Fundamentals', 'Foundational'), s('IoT Fundamentals', 'Foundational')] },
  { title: 'Blockchain', icon: Blocks, items: [s('Blockchain Fundamentals', 'Foundational'), s('Bitcoin Fundamentals', 'Foundational'), s('Distributed Ledger Concepts', 'Foundational')] },
  { title: 'Development Tools', icon: Wrench, items: [s('Git', 'Familiar'), s('GitHub', 'Familiar'), s('Visual Studio Code', 'Familiar')] },
];

export const levelScale = { Learning: 1, Foundational: 2, Familiar: 3, 'Working Knowledge': 4 };
