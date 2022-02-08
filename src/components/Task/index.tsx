import React from 'react'
import { TaskProps } from './types'

export const Task: React.FC<TaskProps> = (
  props
) => {
  const { title, isCompleted, onComplete = () => { } } = props
  return (
    <div>
      <input type="checkbox" onChange={onComplete} disabled={isCompleted} checked={isCompleted} />
      <span>{title}</span>
    </div>
  )
}