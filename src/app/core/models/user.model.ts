export interface UserRequest {
   name?: string;
   email?: string;
   score?: string;
}

export interface UserResponse {
    id: string;
    name: string;
    email: string;
    score: string;
}