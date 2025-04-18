import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential,
    deleteUser,
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential
} from 'firebase/auth'
import { auth } from './config'

export const loginUser = async (email: string, password: string): Promise<UserCredential> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('An unknown error occurred')
        }
    }
}

export const logoutUser = async (): Promise<void> => {
    try {
        await signOut(auth)
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('An unknown error occurred')
        }
    }
}

export const signupUser = async (email: string, password: string): Promise<UserCredential> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return userCredential
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('An unknown error occurred')
        }
    }
}

/**
 * Deletes a user from Firebase Authentication
 * Requires the user to be currently authenticated
 */
export const removeUser = async (password: string): Promise<void> => {
    try {
        const currentUser = auth.currentUser
        if (!currentUser || !currentUser.email) {
            throw new Error('No authenticated user')
        }

        // Re-authenticate user
        const credential = EmailAuthProvider.credential(currentUser.email, password)
        await reauthenticateWithCredential(currentUser, credential)

        // Now delete user
        await deleteUser(currentUser)
        console.log('User successfully deleted')
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error deleting user: ${error.message}`)
        } else {
            throw new Error('An unknown error occurred while deleting the user')
        }
    }
}

export const updateUserPassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    try {
        const user = auth.currentUser
        if (!user || !user.email) {
            throw new Error('No authenticated user or email missing')
        }

        // Re-authenticate user before changing password
        const credential = EmailAuthProvider.credential(user.email, currentPassword)
        await reauthenticateWithCredential(user, credential)

        // Update password
        await updatePassword(user, newPassword)
        console.log('Password successfully updated')
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Error updating password: ${error.message}`)
        } else {
            throw new Error('An unknown error occurred while updating the password')
        }
    }
}