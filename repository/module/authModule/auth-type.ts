export type LoginResponse = {
    error: String;
    message: String;
    data : any;
} | null;

export type LoginRequest = {
    email: String;
    password: String;
}