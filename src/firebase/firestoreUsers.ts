import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from './config'
import { User } from '@/types/user'

// agregar usuario
export const saveUser = async (userData: User, userEmail: string) => {
    try {
        const userRef = doc(db, "users", userEmail)

        // Crear una copia del objeto userData sin la propiedad password
        const userDataWithoutPassword = { ...userData }
        delete userDataWithoutPassword.password

        await setDoc(userRef, {
            ...userDataWithoutPassword,
            email: userEmail
        })

        console.log("Usuario guardado exitosamente")
        return userEmail
    } catch (error) {
        throw new Error(`Error al guardar usuario: ${error}`)
    }
}

// obtener un usuario
export const getUser = async (email: string): Promise<User> => {
    try {
        const userRef = doc(db, "users", email)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists()) {
            const userData = userSnap.data() as Omit<User, 'password'>

            return {
                name: userData.name,
                email: userData.email
            }
        } else {
            throw new Error("No such user!")
        }
    } catch (error) {
        throw new Error(`Error fetching user: ${error}`)
    }
}

// actualizar usuario
export const updateUser = async (email: string, updatedData: Partial<User>) => {
    try {
        const userRef = doc(db, "users", email)

        const userSnap = await getDoc(userRef)

        if (!userSnap.exists()) {
            throw new Error("User not found!")
        }

        if ('password' in updatedData) {
            const dataWithoutPassword = { ...updatedData }
            delete dataWithoutPassword.password

            await updateDoc(userRef, dataWithoutPassword)
        } else {
            await updateDoc(userRef, updatedData)
        }

        console.log("User updated succesfully")
        return true
    } catch (error) {
        throw new Error(`Error updating user: ${error}`)
    }
}
// borrar usuario
export const deleteUser = async (email: string) => {
    try {
        const userRef = doc(db, "users", email)

        const userSnap = await getDoc(userRef)

        if (!userSnap.exists()) {
            throw new Error("User not found!")
        }

        await deleteDoc(userRef)
        console.log("User deleted succesfully")
        return true
    } catch (error) {
        throw new Error(`Error deleting user: ${error}`)
    }
}
