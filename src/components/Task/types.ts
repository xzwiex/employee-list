export interface TaskProps {
  title: string
  isCompleted: boolean
  onComplete?: () => void
}