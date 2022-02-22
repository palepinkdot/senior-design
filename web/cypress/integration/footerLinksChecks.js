const USER = Cypress.env("user");
describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("renders correctly", () => {    
    cy.get("#getStarted").should("exist");
  })

  it("footer links are working fine", () => {
    cy.get('[href="/AboutUs"]').click();
    cy.get("#mission").should("exist");
    cy.get("#missionText").should("exist");
    cy.get("#missionText").contains("Swipet is a web-based platform");
  })

})
