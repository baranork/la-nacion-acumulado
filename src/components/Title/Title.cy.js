import React from 'react'
import Title from './Title'

describe('<Title />', () => {
  it('renders', () => {
    cy.mount(<Title />)
    cy.get('h1').should('have.text', 'Acumulado Grilla')
  })
})