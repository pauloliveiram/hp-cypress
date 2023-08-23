describe("Validar o endpoint /characters/house/{house}", () => {
  it("Validar o método GET", () => {
    cy.request("/characters/house/gryffindor").as("getCharactersHouse");
    cy.get("@getCharactersHouse").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body[0].id).to.be.a("string");
      expect(response.body[0].name).to.be.a("string");
      expect(response.body[0].alternate_names).to.be.an("array");
      expect(response.body[0].alternate_names[0]).to.be.a("string");
      expect(response.body[0].species).to.be.a("string");
      expect(response.body[0].gender).to.be.a("string");
      expect(response.body[0].house).to.be.a("string");
      expect(response.body[0].dateOfBirth).to.be.a("string");
      expect(response.body[0].yearOfBirth).to.be.a("number");
      expect(response.body[0].wizard).to.be.a("boolean");
      expect(response.body[0].ancestry).to.be.a("string");
      expect(response.body[0].eyeColour).to.be.a("string");
      expect(response.body[0].hairColour).to.be.a("string");
      expect(response.body[0].wand.wood).to.be.a("string");
      expect(response.body[0].wand.core).to.be.a("string");
      expect(response.body[0].wand.length).to.be.a("number");
      expect(response.body[0].patronus).to.be.a("string");
      expect(response.body[0].hogwartsStudent).to.be.a("boolean");
      expect(response.body[0].hogwartsStaff).to.be.a("boolean");
      expect(response.body[0].actor).to.be.a("string");
      expect(response.body[0].alternate_actors).to.be.an("array");
      expect(response.body[0].alive).to.be.a("boolean");
      expect(response.body[0].image).to.be.a("string");
    });
  });
});
