function validateEmail(email) {
  const r = /\S+@\S+\.\S+/; 
  
  
   return regularExpression.test(email);
}
export default validateEmail;
