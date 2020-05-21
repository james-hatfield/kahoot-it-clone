// Sign up component
export const submitSignupForm = () => cy.get("[e2e='signup-submit-button']");
export const signupForm = () => cy.get("[e2e='signup-form']");

// Login component
export const submitloginForm = () => cy.get("[e2e='login-submit-button']");
export const loginForm = () => cy.get("[e2e='login-form']");

// Header
export const headerLoginButton = () => cy.get("[e2e='login-button']");
export const headerLogoutButton = () => cy.get("[e2e='logout-button']");
export const headerSignupButton = () => cy.get("[e2e='signup-button']");
export const toolbar = () => cy.get('mat-toolbar');

// Dashboard
export const dashboard = () => cy.get("[e2e='dashboard']");

// Inputs
const usernameInput = () => cy.get("[e2e='username-input']");
const emailInput = () => cy.get("[e2e='email-input']");
const passwordInput = () => cy.get("[e2e='password-input']");

export const fillSignUpForm = (user: {
  username: string;
  email: string;
  password: string;
}) => {
  signupForm().should('be.visible');
  usernameInput().type(user.username);
  emailInput().type(user.email);
  passwordInput().type(user.password);
};

export const fillLoginForm = (user: { email: string; password: string }) => {
  loginForm().should('be.visible');
  emailInput().type(user.email);
  passwordInput().type(user.password);
};
