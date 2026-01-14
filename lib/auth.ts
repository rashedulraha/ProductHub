// Simple auth utilities for mock authentication
const ADMIN_EMAIL = "admin@example.com"
const ADMIN_PASSWORD = "123456"

export function validateCredentials(email: string, password: string): boolean {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export function setAuthCookie(response: Response, token: string): void {
  const expires = new Date()
  expires.setTime(expires.getTime() + 24 * 60 * 60 * 1000) // 24 hours
  const cookieValue = `auth=${token}; Path=/; Expires=${expires.toUTCString()}; HttpOnly; SameSite=Strict`
  response.headers.append("Set-Cookie", cookieValue)
}

export function getAuthToken(): string {
  return "mock-auth-token-" + Date.now()
}
