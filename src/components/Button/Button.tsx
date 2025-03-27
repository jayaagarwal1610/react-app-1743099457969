import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{
  variant: string;
  size: string;
  fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  white-space: nowrap;
  
  /* Size styles */
  padding: ${({ size }) => 
    size === 'small' ? '0.375rem 0.75rem' : 
    size === 'large' ? '0.75rem 1.5rem' : 
    '0.5rem 1rem'};
  
  font-size: ${({ size }) => 
    size === 'small' ? '0.875rem' : 
    size === 'large' ? '1.125rem' : 
    '1rem'};
  
  /* Width styles */
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  /* Variant styles */
  background-color: ${({ variant }) => 
    variant === 'primary' ? 'var(--primary-color)' : 
    variant === 'secondary' ? 'var(--background-light)' : 
    'transparent'};
  
  color: ${({ variant }) => 
    variant === 'primary' ? 'white' : 
    variant === 'text' ? 'var(--primary-color)' : 
    variant === 'outline' ? 'var(--primary-color)' : 
    'var(--text-secondary)'};
  
  border: ${({ variant }) => 
    variant === 'outline' ? '1px solid var(--primary-color)' : 
    variant === 'secondary' ? '1px solid var(--border-color)' : 
    'none'};
  
  &:hover {
    background-color: ${({ variant }) => 
      variant === 'primary' ? 'var(--primary-hover)' : 
      variant === 'secondary' ? 'var(--border-color)' : 
      variant === 'outline' || variant === 'text' ? 'rgba(59, 130, 246, 0.1)' : 
      'transparent'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;