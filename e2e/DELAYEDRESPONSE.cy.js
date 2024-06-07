describe('Delayed Response', () => {
    it('Successfully retrieves a delayed response', () => {
      cy.request('GET', 'https://reqres.in/api/users?delay=3').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('Verifies response time for delayed response', () => {
      cy.request('GET', 'https://reqres.in/api/users?delay=3').then((response) => {
        expect(response.duration).to.be.greaterThan(3000); // Expecting response time greater than 3 seconds
      });
    });
  
    it('Verifies content of the delayed response', () => {
      cy.request('GET', 'https://reqres.in/api/users?delay=3').then((response) => {
        expect(response.body).to.have.property('data').that.is.an('array');
      });
    });
  });
  