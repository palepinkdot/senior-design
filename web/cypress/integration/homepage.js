const USER = Cypress.env("user");
describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("renders correctly", () => {    
    cy.get("#getStarted").should("exist");
  })

  it("allows the date picker to be used", () => {
    cy.get('#getStarted').click();
    cy.get(':nth-child(1) > .css-vd6y3a > .chakra-text').click();
    cy.get('#firstname').clear();
    cy.get('#firstname').type(USER);
    cy.get('#lastname').clear();
    cy.get('#lastname').type(USER);
    cy.get('#username').clear();
    cy.get('#username').type(USER);
    cy.get('#email').clear();
    cy.get('#email').type(USER+'@gmail.com');
    cy.get('#password').clear();
    cy.get('#password').type(USER);
    cy.get('#verifypassword').clear();
    cy.get('#verifypassword').type(USER);
    // cy.get('.chakra-button').click();
    // cy.get('#animalPreference').clear();
    // cy.get('#animalPreference').type('cat');
    // cy.get('#age').clear();
    // cy.get('#age').type('1');
    // cy.get('.chakra-button').click();
    // cy.get('.css-orefsx > :nth-child(4)').click();
  })


  //create multiple methods with previous steps in it so that it runs with a check
})
