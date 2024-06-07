describe('Color API Testing', () => {
    it('Returns status code 200', () => {
      cy.request('GET', 'https://reqres.in/api/colors').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('Validates the response body structure', () => {
      cy.request('GET', 'https://reqres.in/api/colors').then((response) => {
        expect(response.body).to.have.property('page', 1);
        expect(response.body).to.have.property('per_page', 6);
        expect(response.body).to.have.property('total', 12);
        expect(response.body).to.have.property('total_pages', 2);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array').that.has.lengthOf(6);
        expect(response.body).to.have.property('support');
      });
    });
  
    it('Validates each item in the data array', () => {
      cy.request('GET', 'https://reqres.in/api/colors').then((response) => {
        const colors = response.body.data;
        colors.forEach((color) => {
          expect(color).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value');
          expect(color.id).to.be.a('number');
          expect(color.name).to.be.a('string');
          expect(color.year).to.be.a('number');
          expect(color.color).to.match(/^#[0-9A-Fa-f]{6}$/);
          expect(color.pantone_value).to.match(/^\d{2}-\d{4}$/);
        });
      });
    });
  
    it('Verifies the support information', () => {
      cy.request('GET', 'https://reqres.in/api/colors').then((response) => {
        const support = response.body.support;
        expect(support).to.have.property('url', 'https://reqres.in/#support-heading');
        expect(support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!');
      });
    });
  });
  