describe('Single Resource Not Found', () => {
    it('Returns 404 for non-existent resource', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/unknown/23', failOnStatusCode: false}).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  
    it('Validates empty response body for non-existent resource', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/unknown/23', failOnStatusCode: false}).then((response) => {
        expect(response.body).to.be.empty;
      });
    });
  
    it('Validates content-type header for non-existent resource', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/unknown/23', failOnStatusCode: false}).then((response) => {
        expect(response.headers['content-type']).to.include('application/json');
      });
    });
  
    it('Validates response time for non-existent resource', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/unknown/23', failOnStatusCode: false}).then((response) => {
        expect(response.duration).to.be.lessThan(1000); // Ensure the response time is less than 1 second
      });
    });
  
    it('Validates absence of support information in response for non-existent resource', () => {
      cy.request({method: 'GET', url: 'https://reqres.in/api/unknown/23', failOnStatusCode: false}).then((response) => {
        expect(response.body).to.not.have.property('support');
      });
    });
  });
  