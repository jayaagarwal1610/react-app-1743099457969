import React, { useState } from 'react';
import { styled } from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import UserMenu from '../UserMenu/UserMenu';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  background-color: var(--background-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;