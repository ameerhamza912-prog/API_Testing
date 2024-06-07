describe('Delete User', () => {
    it('Successfully deletes a user', () => {
      cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });