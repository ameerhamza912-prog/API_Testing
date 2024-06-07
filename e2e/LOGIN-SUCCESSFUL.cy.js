describe('Login User', () => {
    it('Successfully logs in a user', () => {
      const user = { email: 'eve.holt@reqres.in', password: 'cityslicka' };
      cy.request('POST', 'https://reqres.in/api/login', user).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      });
    });
  });