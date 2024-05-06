
const credentials=[{
  email:'som@gmail.com',
  password:'SOM@React@1'
},{
  email:'sandy@gmail.com',
  password:'S@k@4@'
}]

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  return passwordRegex.test(password);
};
export const validateCredentials = (email:string,password: string): boolean => {
  for (let i = 0; i < credentials.length; i++) {
    const { email: storedEmail, password: storedPassword } = credentials[i];
    if (email === storedEmail && password === storedPassword) {
      return true; 
    }
  }
  return false; 
};