describe('API Testing with Cypress', () => {
    it('Verify the response status code is 200', () => {
      cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('Verify the response body structure', () => {
      cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.body).to.have.property('data');
        expect(response.body).to.have.property('support');
      });
    });
  
    it('Verify the user data', () => {
      cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
        const user = response.body.data;
        expect(user).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
        expect(user.id).to.eq(2);
        expect(user.email).to.eq('janet.weaver@reqres.in');
        expect(user.first_name).to.eq('Janet');
        expect(user.last_name).to.eq('Weaver');
        expect(user.avatar).to.eq('https://reqres.in/img/faces/2-image.jpg');
      });
    });
  
    it('Verify the email format', () => {
      cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
        const email = response.body.data.email;
        expect(email).to.match(/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
      });
    });
  
    it('Verify the avatar URL format', () => {
      cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
        const avatar = response.body.data.avatar;
        expect(avatar).to.match(/^https:\/\/reqres\.in\/img\/faces\/\d+-image\.jpg$/);
      });
    });
  
    it('Verify the support information', () => {
      cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
        const support = response.body.support;
        expect(support).to.have.property('url', 'https://reqres.in/#support-heading');
        expect(support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!');
      });
    });
  });
  