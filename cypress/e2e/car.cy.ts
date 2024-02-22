describe('Cars Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cars');
  });

  it('should render navigation buttons correctly', () => {
    cy.contains('Motoristas').should('be.visible');
    cy.contains('Veículos').should('be.visible');
  });

  it('should render the logo correctly', () => {
    cy.get('img[alt="Logo da aplicação"]').should('be.visible');
  });

  it('should open the form modal when Add button is clicked', () => {
    cy.contains('Adicionar').click();
    cy.get('[data-testid="modal-add-car"]').should('be.visible');
  });

  it('should close the form modal when Cancel button is clicked', () => {
    cy.contains('Adicionar').click();
    cy.get('[data-testid="modal-add-car"]').should('be.visible');
    cy.contains('Cancelar').click();
    cy.get('[data-testid="modal-add-car"]').should('not.exist');
  });
});
