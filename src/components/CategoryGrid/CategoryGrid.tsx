import React from 'react';
import { styled } from 'styled-components';
import { Category } from '../../types';
import { formatNumber } from '../../utils/helpers';

interface CategoryGridProps {
  categories: Category[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;