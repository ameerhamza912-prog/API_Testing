describe('Single User Not Found', () => {
    it('Returns 404 for non-existent user', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/users/23', failOnStatusCode: false}).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  
    it('Verify response body is empty for non-existent user', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/users/23', failOnStatusCode: false}).then((response) => {
        expect(response.body).to.be.empty;
      });
    });
  
    it('Verify response headers for non-existent user', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/users/23', failOnStatusCode: false}).then((response) => {
        expect(response.headers).to.have.property('content-type');
        expect(response.headers['content-type']).to.contain('application/json');
      });
    });
  
    it('Verify response time is within acceptable limit for non-existent user', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/users/23', failOnStatusCode: false}).then((response) => {
        expect(response.duration).to.be.lessThan(1000); // Ensure the response time is less than 1 second
      });
    });
  
    it('Verify no support information is present in response for non-existent user', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/users/23', failOnStatusCode: false}).then((response) => {
        expect(response.body).to.not.have.property('support');
      });
    });
  });
  