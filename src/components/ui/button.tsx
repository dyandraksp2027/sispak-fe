import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export function Button({ children, variant = 'default', ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  const variantStyles = variant === 'default' 
    ? "bg-blue-500 text-white hover:bg-blue-600" 
    : "border border-gray-300 text-gray-700 hover:bg-gray-50"

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  )
}

