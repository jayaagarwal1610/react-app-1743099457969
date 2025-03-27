import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import QuestionCard from './components/QuestionCard/QuestionCard';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import Button from './components/Button/Button';
import { getQuestions, getCategories, getFeaturedQuestion } from './services/api';
import { Question, Category } from './types';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const MainContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

function App() {
  return (
    <>
      <Header />
      <MainContent>
        {/* Your app content here */}
      </MainContent>
      <Footer />
    </>
  );
}

export default App;