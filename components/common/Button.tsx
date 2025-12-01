import React from 'react'
import { ButtonProps } from '../../interfaces'

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      {label}
    </button>
  )
}

export default Button
