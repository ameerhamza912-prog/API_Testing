describe('Login User Unsuccessful', () => {
    it('Fails to log in a user without a password', () => {
      const user = { email: 'eve.holt@reqres.in' };
      cy.request({ method: 'POST', url: 'https://reqres.in/api/login', body: user, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  
    it('Fails to log in a user without an email', () => {
      const user = { password: 'password123' };
      cy.request({ method: 'POST', url: 'https://reqres.in/api/login', body: user, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  
    it('Fails to log in a user with an invalid email format', () => {
      const user = { email: 'invalid-email', password: 'password123' };
      cy.request({ method: 'POST', url: 'https://reqres.in/api/login', body: user, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  });
  