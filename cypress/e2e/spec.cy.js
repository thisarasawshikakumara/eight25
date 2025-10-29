/// <reference types="cypress" />
require('cypress-xpath');

describe('Eight25 Media Website Tests', () => {

  // 1️⃣ Homepage Test
  it('Visits the homepage and checks the title', () => {
    cy.visit('https://www.eight25media.com/');
    cy.title().should('include', 'EIGHT25'); // unable to assert as the text because it is in image format
  });

  // 2️⃣ Navigation Test
  it('Navigates to the Work page and verifies content', () => {
    cy.visit('https://www.eight25media.com/');
    cy.xpath('(//button)[13]').click(); 
    cy.contains('a', 'Work', { matchCase: false }).click();
    cy.contains(/our work/i).should('be.visible'); // there is no any word to find as our work
  });

  // 3️⃣ Form Interaction Test
  it('Fills in the Contact form fields correctly', () => {
    cy.visit('https://www.eight25media.com/');
    cy.contains('a', 'Contact Us', { matchCase: false }).click();
    cy.get('input[name="your-name"]').type('Test User');
    cy.get('input[name="your-email"]').type('testuser@example.com');
    cy.get('textarea[name="your-message"]').type('This is a test message');

    // assertions to ensure data is typed correctly
    cy.get('input[name="your-name"]').should('have.value', 'Test User');
    cy.get('input[name="your-email"]').should('have.value', 'testuser@example.com');
    cy.get('textarea[name="your-message"]').should('have.value', 'This is a test message');
  });

  // 4️⃣ Responsive Check (Bonus)
  it('Checks mobile view for hamburger menu', () => {
    cy.viewport(375, 667); // iPhone 6/7/8 size
    cy.visit('https://www.eight25media.com/');
    cy.get('.navbar-toggler').should('be.visible');
  });

});
