describe('Register User Unsuccessful', () => {
    it('Fails to register a user without a password', () => {
      const user = { email: 'eve.holt@reqres.in' };
      cy.request({ method: 'POST', url: 'https://reqres.in/api/register', body: user, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  
    it('Fails to register a user without an email', () => {
      const user = { password: 'password123' };
      cy.request({ method: 'POST', url: 'https://reqres.in/api/register', body: user, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  
    it('Fails to register a user with an invalid email format', () => {
      const user = { email: 'invalid-email', password: 'password123' };
      cy.request({ method: 'POST', url: 'https://reqres.in/api/register', body: user, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  
    it('Fails to register a user with a password less than 6 characters', () => {
      const user = { email: 'user@example.com', password: '12345' };
      cy.request({ method: 'POST', url: 'https://reqres.in/api/register', body: user, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  
    it('Fails to register a user with an existing email', () => {
      const existingUser = { email: 'janet.weaver@reqres.in', password: 'password123' };
      cy.request({ method: 'POST', url: 'https://reqres.in/api/register', body: existingUser, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  });
  