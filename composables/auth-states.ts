type authStateType = {
    isAuthenticated: Boolean;
    key: String;
}

export const useAuthState = () => useState<authStateType>('auth', () => {
    return  {
        isAuthenticated:false,
        key:""
    }
 })