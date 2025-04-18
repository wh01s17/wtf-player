import { create } from 'zustand'
import {
    saveUser as addUserFirestore,
    getUser as getUserFirestore,
    updateUser as updateUserFirestore,
    deleteUser as deleteUserFirestore
} from '../firebase/firestoreUsers'
import { logoutUser, removeUser, updateUserPassword } from '@/firebase/auth'
import { FirebaseError } from 'firebase/app'
import { UserStore } from '@/types/user'

const initialUserData = {
    name: '',
    email: '',
    password: ''
}

export const useSignUpStore = create<UserStore>(
    (set, get) => ({
        userData: { ...initialUserData },
        loading: false,

        setUser: (field, value) =>
            set((state) => ({
                userData: {
                    ...state.userData,
                    [field]: value,
                },
            })),

        addUser: async (data) => {
            set({ loading: true })
            try {
                // Crear una copia del objeto data sin la propiedad password
                const dataWithoutPassword = { ...data }
                delete dataWithoutPassword.password

                await addUserFirestore(dataWithoutPassword, data.email)
                set({ loading: false })
            } catch (error) {
                console.error("Error adding user:", error)
                set({ loading: false })
            }
        },

        getUser: async (email) => {
            set({ loading: true })
            try {
                const data = await getUserFirestore(email)
                set({ userData: { ...initialUserData, ...data }, loading: false })
                return Promise.resolve()
            } catch (error) {
                console.error("Error getting user:", error)
                set({ loading: false })
                return Promise.reject(error)
            }
        },

        updateUser: async (email, data) => {
            set({ loading: true })
            try {
                await updateUserFirestore(email, data)

                const currentData = get().userData
                const updatedData = { ...currentData, ...data }

                set({ userData: updatedData, loading: false })
                return Promise.resolve()
            } catch (error) {
                console.error("Error updating user:", error)
                set({ loading: false })
                return Promise.reject(error)
            }
        },

        updatePassword: async (oldPasswd, newPasswd) => {
            set({ loading: true })
            try {
                await updateUserPassword(oldPasswd, newPasswd)
                set({ loading: false })
                return Promise.resolve()
            } catch (error) {
                console.error(`Error updating password: ${error}`)
                set({ loading: false })
                return Promise.reject(error)
            }
        },

        deleteUser: async (email, passwd) => {
            set({ loading: true });
            try {
                await removeUser(passwd);
                await deleteUserFirestore(email);
                await logoutUser();
                set({ userData: { ...initialUserData }, loading: false });
            } catch (error: unknown) {
                if (error instanceof FirebaseError) {
                    if (error.code === 'auth/wrong-password') {
                        set({ loading: false });
                        throw new Error('Incorrect password');
                    }
                }
                set({ loading: false });
                throw error;
            }
        },
    })
)