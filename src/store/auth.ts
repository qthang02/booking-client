import {create} from "zustand";
import {persist} from "zustand/middleware";


interface AuthState {
    authToken: string;
    setAuthToken: (token: string | undefined) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            authToken: "",

            setAuthToken: (authToken: string | undefined) => {
                set((state) => ({...state, authToken}));
            },
        }),
        {
            name: "auth-state"
        }
    ),
);