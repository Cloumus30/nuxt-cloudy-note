type authStateType = {
    isAuthenticated: Boolean;
    user: any;
    role: any;
    key: String;
}

export const useAuthState = () => useState<authStateType>('auth', () => {
    return  {
        isAuthenticated:false,
        user:null, 
        role:null, 
        key:""
    }
 })