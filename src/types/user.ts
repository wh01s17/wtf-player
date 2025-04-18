export type UserStore = {
    userData: User
    loading: boolean

    setUser: (field: keyof User, value: string) => void
    addUser: (data: User) => Promise<void>
    getUser: (email: string) => Promise<void>
    updateUser: (email: string, data: User) => Promise<void>
    updatePassword: (oldPasswd: string, newPasswd: string) => Promise<void>
    deleteUser: (email: string, passwd: string) => Promise<void>
}

export type User = {
    name: string
    email: string
    password?: string
}