describe("Validar o endpoint /character/{id}", () => {
  it("Validar o método GET", () => {
    cy.request("/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8").as(
      "getCharacter",
    );
    cy.get("@getCharacter").then((response) => {
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
