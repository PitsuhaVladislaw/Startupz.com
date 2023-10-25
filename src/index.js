import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hiring from './pages/Hiring/Hiring';
import Who from './pages/Who/Who';
import Form from './pages/Form/Form';
import Values from './pages/Values/Values';
import OurWorks from './pages/OurWorks/OurWorks';
import Solving from './pages/Solving/Solving';
import BotAssistant from './components/BotAssistant/BotAssistant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BotAssistant />
    <Header />
    <Who />
    <Solving />
    <Values />
    <OurWorks />
    <Hiring />
    <Form />
    <Footer />
  </React.StrictMode>
);