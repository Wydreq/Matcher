export interface RegisterUserData {
  email: string
  password: string
  name: string
  age: number | null
  gender: string
  ///enum
  searchFor: string ///enum
  ///photos
  //hobbies
  desc: string
  city: string
}