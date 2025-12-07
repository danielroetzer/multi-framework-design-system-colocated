/** @jsxImportSource react */
import { type ButtonHTMLAttributes } from 'react';

// Extend standard HTML Button props so consumers get intellisense
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
