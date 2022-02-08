import { Todo, User } from "../model"

const API_URL = 'https://jsonplaceholder.typicode.com/'

const getData = async <T = any>(url: string): Promise<T> => {
  const response = await fetch(`${API_URL}${url}`)
  const result = await response.json()
  return result as T
}

export const getTodos = (userId: number) => getData<Todo[]>(`todos?userId=${userId}`)
export const getUsers = () => getData<User[]>(`users`)