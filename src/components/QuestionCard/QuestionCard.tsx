import React from 'react';
import { styled } from 'styled-components';
import { FiArrowUp, FiArrowDown, FiMessageSquare, FiEye } from 'react-icons/fi';
import { Question } from '../../types';
import { formatRelativeTime, formatNumber } from '../../utils/helpers';

interface QuestionCardProps {
  question: Question;
  featured?: boolean;
}

const CardContainer = styled.div<{ featured: boolean }>`
  background-color: var(--background-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  padding: ${props => props.featured ? '1.5rem' : '1.25rem'};
  margin-bottom: 1rem;
  box-shadow: ${props => props.featured ? 'var(--shadow-md)' : 'var(--shadow-sm)'};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;