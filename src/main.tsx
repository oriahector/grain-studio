import { createRoot } from 'react-dom/client';
import '@fontsource/anton';
import '@fontsource/pt-mono';
import '@/styles/main.css';
import App from './app';

const el = document.getElementById('root')!;
createRoot(el).render(<App />);
