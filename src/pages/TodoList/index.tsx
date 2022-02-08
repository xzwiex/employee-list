import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTodos } from '../../api'
import { Todo } from '../../model'
import { Task } from '../../components/Task'
import { useLocalStorage } from '../../hooks'

export const TodoList: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [tasks, setTasks] = useState<Todo[]>([])

  const [completed, setCompleted] = useLocalStorage<{ [id: number]: boolean }>('completedTasks', {})

  const markAsCompleted = (taskId: number) => {
    setCompleted((values) => ({ ...values, [taskId]: true }))
  }

  useEffect(() => {
    setTasks([])
    const load = async () => {
      if (id) {
        const tasks = await getTodos(parseInt(id))
        setTasks(tasks)
      }
    }
    load()
  }, [id])

  const tasksWithStatus = tasks.map((task) => ({ ...task, completed: completed[task.id] || task.completed }))

  return (
    <div>
      {tasksWithStatus.map((task) =>
        <Task
          isCompleted={task.completed}
          title={task.title}
          key={`task_${task.id}`}
          onComplete={() => markAsCompleted(task.id)}
        />
      )}
    </div>
  )
}