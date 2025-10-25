import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
import App from './app';

const el = document.getElementById('root')!;
createRoot(el).render(<App />);
