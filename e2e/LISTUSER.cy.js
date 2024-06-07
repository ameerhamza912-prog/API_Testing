describe('API Testing with Cypress', () => {
    it('Verify the response status code is 200', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('Verify the response body structure', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        expect(response.body).to.have.property('page', 2);
        expect(response.body).to.have.property('per_page', 6);
        expect(response.body).to.have.property('total', 12);
        expect(response.body).to.have.property('total_pages', 2);
        expect(response.body).to.have.property('data');
        expect(response.body).to.have.property('support');
      });
    });
  
    it('Verify the pagination information', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        const { page, per_page, total, total_pages } = response.body;
        expect(page).to.eq(2);
        expect(per_page).to.eq(6);
        expect(total).to.eq(12);
        expect(total_pages).to.eq(2);
      });
    });
  
    it('Verify the user data', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        const users = response.body.data;
        expect(users).to.be.an('array').that.has.length(6);
  
        users.forEach((user) => {
          expect(user).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
          expect(user.email).to.match(/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
          expect(user.first_name).to.be.a('string');
          expect(user.last_name).to.be.a('string');
          expect(user.avatar).to.match(/^https:\/\/reqres\.in\/img\/faces\/\d+-image\.jpg$/);
        });
      });
    });
  
    it('Verify the support information', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        const support = response.body.support;
        expect(support).to.have.property('url', 'https://reqres.in/#support-heading');
        expect(support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!');
      });
    });
  });
  