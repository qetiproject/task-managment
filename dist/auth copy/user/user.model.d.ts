export interface UserModel {
    id: string;
    name: string;
    email: string;
    password: string;
    status: UserStatus;
}
export declare enum UserStatus {
    ADMINISTRATOR = "ADMINISTRATOR",
    MANAGER = "MANAGER"
}
