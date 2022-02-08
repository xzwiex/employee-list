
interface Address {
  city: string
  geo: {
    lat: string
    lng: string
  }
  street: string
  suite: string
  zipcode: string
}

interface Company {
  bs: string
  catchPhrase: string
  name: string
}

export interface User {
  company: Company
  address: Address
  email: string
  id: number
  name: number
  phone: string
  username: string
  website: string
}

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}