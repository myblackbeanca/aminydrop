import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { DropOptions } from './components/DropOptions';
import { Testimonials } from './components/Testimonials';
import { VisualShowcase } from './components/VisualShowcase';
import { MinySlider } from './components/MinySlider';

function App() {
  return (
    <Layout>
      <Hero />
      <DropOptions />
      <Testimonials />
      <VisualShowcase />
      <MinySlider />
    </Layout>
  );
}

export default App;