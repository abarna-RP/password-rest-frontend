# API Integration
The frontend expects a backend API with these endpoints:

# POST /auth/forgot-password

Request body: { email: string }

Response: { success: boolean, message?: string }



# POST /auth/reset-password:token

Request body: { token: string, newPassword: string }

Response: { success: boolean }

# login : 
{ "email":"prabaabu62@gmail.com",
"password":"abarna12#"
}
