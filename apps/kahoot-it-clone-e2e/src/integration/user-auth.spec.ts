import {
  dashboard,
  fillLoginForm,
  fillSignUpForm,
  headerLoginButton,
  headerLogoutButton,
  headerSignupButton,
  loginForm,
  submitloginForm,
  submitSignupForm
} from '../support/user-auth.po';

describe('User auth story', () => {
  const user = {
    username: 'test',
    email: 'test@email.com',
    password: 'password'
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('should create an account', () => {
    headerSignupButton().should('be.visible');
    headerSignupButton().click();

    fillSignUpForm(user);
    submitSignupForm()
      .should('be.enabled')
      .click();
    loginForm().should('be.visible');
  });

  it('should login and navigate to dashboard', () => {
    loginForm().should('be.visible');

    fillLoginForm({ email: 'lostpants404@email.com', password: 'password' });
    submitloginForm()
      .should('be.enabled')
      .click();
    dashboard().contains('dashboard works!');

    headerLoginButton().should('not.be.visible');
    headerSignupButton().should('not.be.visible');

    headerLogoutButton().click();
    loginForm().should('be.visible');
  });
});
