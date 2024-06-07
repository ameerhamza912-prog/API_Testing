describe('Update User', () => {
    describe('PUT Method', () => {
      it('Successfully updates a user with PUT', () => {
        const updatedUser = { name: 'Jane Doe', job: 'Product Manager' };
        cy.request('PUT', 'https://reqres.in/api/users/2', updatedUser).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('name', 'Jane Doe');
          expect(response.body).to.have.property('job', 'Product Manager');
        });
      });
    
      it('Validates response body structure after PUT', () => {
        const updatedUser = { name: 'Jane Doe', job: 'Product Manager' };
        cy.request('PUT', 'https://reqres.in/api/users/2', updatedUser).then((response) => {
          expect(response.body).to.have.all.keys('name', 'job', 'updatedAt');
        });
      });
    });
  
    describe('PATCH Method', () => {
      it('Successfully updates a user with PATCH', () => {
        const updatedUser = { name: 'Jane Smith', job: 'Product Owner' };
        cy.request('PATCH', 'https://reqres.in/api/users/2', updatedUser).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('name', 'Jane Smith');
          expect(response.body).to.have.property('job', 'Product Owner');
        });
      });
    
      it('Validates response body structure after PATCH', () => {
        const updatedUser = { name: 'Jane Smith', job: 'Product Owner' };
        cy.request('PATCH', 'https://reqres.in/api/users/2', updatedUser).then((response) => {
          expect(response.body).to.have.all.keys('name', 'job', 'updatedAt');
        });
      });
    });
  });
  