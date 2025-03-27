import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import { FiChevronDown, FiUser, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { User } from '../../types';

interface UserMenuProps {
  user: User;
}

const UserMenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;