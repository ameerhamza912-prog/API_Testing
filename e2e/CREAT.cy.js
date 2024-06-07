describe('User Creation API Testing', () => {
    it('Returns status code 201 for successful user creation', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'morpheus',
          job: 'leader'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  
    it('Validates the response body structure', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'morpheus',
          job: 'leader'
        }
      }).then((response) => {
        expect(response.body).to.have.all.keys('name', 'job', 'id', 'createdAt');
      });
    });
  
    it('Validates the name field in the response', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'morpheus',
          job: 'leader'
        }
      }).then((response) => {
        expect(response.body.name).to.eq('morpheus');
      });
    });
  
    it('Validates the job field in the response', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'morpheus',
          job: 'leader'
        }
      }).then((response) => {
        expect(response.body.job).to.eq('leader');
      });
    });
  
    it('Validates the id field in the response', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'morpheus',
          job: 'leader'
        }
      }).then((response) => {
        expect(response.body.id).to.be.a('string');
      });
    });
  
    it('Validates the createdAt field in the response', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: 'morpheus',
          job: 'leader'
        }
      }).then((response) => {
        expect(response.body.createdAt).to.be.a('string');
      });
    });
  });
  