describe("Validar o endpoint /spells", () => {
  it("Validar o método GET", () => {
    cy.request("/spells").as("getAllSpells");
    cy.get("@getAllSpells").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body[0].id).to.be.a("string");
      expect(response.body[0].name).to.be.a("string");
      expect(response.body[0].description).to.be.a("string");
    });
  });
});
