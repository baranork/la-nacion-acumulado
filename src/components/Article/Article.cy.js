import React from 'react'
import Article from './Article'

const mockTitle = 'Test';
const mockDate = '2023-09-15T17:50:17.735Z';
const mockImageUrl = 'https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg';

describe('<Article />', () => {
  it('renders', () => {
    cy.mount(
        <Article
          title={mockTitle}
          date={mockDate}
          imageUrl={mockImageUrl}
        />
      );
    cy.get('h2').should('have.text', mockTitle);
    cy.get('h4').should('have.text', '15 de Septiembre de 2023')
  })
})