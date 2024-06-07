describe('Register User', () => {
    it('Successfully registers a user', () => {
      const user = { email: 'eve.holt@reqres.in', password: 'pistol' };
      cy.request('POST', 'https://reqres.in/api/register', user).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token');
      });
    });
  });