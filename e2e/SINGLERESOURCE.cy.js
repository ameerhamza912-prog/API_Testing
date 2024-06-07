describe('Color API Testing', () => {
    it('Returns status code 200', () => {
      cy.request('GET', 'https://reqres.in/api/color/2').then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('Validates the response body structure', () => {
      cy.request('GET', 'https://reqres.in/api/color/2').then((response) => {
        expect(response.body).to.have.property('data');
        expect(response.body).to.have.property('support');
      });
    });
  
    it('Validates the properties of the color data', () => {
      cy.request('GET', 'https://reqres.in/api/color/2').then((response) => {
        const colorData = response.body.data;
        expect(colorData).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value');
        expect(colorData.id).to.be.a('number');
        expect(colorData.name).to.be.a('string');
        expect(colorData.year).to.be.a('number');
        expect(colorData.color).to.match(/^#[0-9A-Fa-f]{6}$/);
        expect(colorData.pantone_value).to.match(/^\d{2}-\d{4}$/);
      });
    });
  
    it('Validates the support information', () => {
      cy.request('GET', 'https://reqres.in/api/color/2').then((response) => {
        const support = response.body.support;
        expect(support).to.have.property('url', 'https://reqres.in/#support-heading');
        expect(support).to.have.property('text', 'To keep ReqRes free, contributions towards server costs are appreciated!');
      });
    });
  });
  