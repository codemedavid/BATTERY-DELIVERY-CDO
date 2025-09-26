# Admin Login Setup

This document explains how to set up admin authentication for the Battery Delivery CDO admin dashboard.

## Overview

The admin system uses a simple password-based authentication. This provides a straightforward way to secure the admin dashboard without requiring complex user management.

## Default Admin Password

The default admin password is: `battery@Admin!2025`

## Changing the Admin Password

To change the admin password, edit the `ADMIN_PASSWORD` constant in `/src/contexts/AuthContext.tsx`:

```typescript
// Admin password - you can change this to any secure password
const ADMIN_PASSWORD = 'batteryAdmin';
```

## How It Works

1. **Password Storage**: The password is stored as a constant in the code
2. **Session Management**: Authentication status is stored in localStorage
3. **Route Protection**: Admin routes are protected and require authentication
4. **Automatic Logout**: Users are logged out when they close the browser or clear localStorage

## Testing the Login

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the admin page:**
   - Go to `http://localhost:5173/admin`
   - You should see the login form

3. **Login with the admin password:**
   - Enter the password: `battery@Admin!2025`
   - Click "Sign In"

## Security Features

- **Password Protection**: Simple but effective password-based authentication
- **Session Management**: Authentication status stored in localStorage
- **Route Protection**: Admin routes are protected and require authentication
- **Secure Logout**: Proper session cleanup on logout
- **No External Dependencies**: No need for external authentication services

## Troubleshooting

### Login Not Working
- Make sure you're using the correct password: `battery@Admin!2025`
- Check the browser console for any error messages
- Try clearing your browser's localStorage and trying again

### Password Not Working
- Verify the password in `/src/contexts/AuthContext.tsx`
- Make sure there are no extra spaces or characters
- Check that the password constant is correctly set

### Session Issues
- Clear localStorage in your browser's developer tools
- Refresh the page and try logging in again
- Check that localStorage is enabled in your browser

## Security Considerations

- **Change the Default Password**: Always change the default password in production
- **Use a Strong Password**: Choose a complex password with letters, numbers, and symbols
- **Keep the Password Secret**: Don't commit the password to version control
- **Regular Updates**: Consider changing the password periodically

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify the password is correct
3. Try clearing localStorage and logging in again
