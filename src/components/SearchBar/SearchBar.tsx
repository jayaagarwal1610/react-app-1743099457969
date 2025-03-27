import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { searchQuestions } from '../../services/api';
import { Question } from '../../types';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;