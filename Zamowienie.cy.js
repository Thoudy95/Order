describe('Zamowienie', () => {
beforeEach(() => {
    cy.visit('https://www.x-kom.pl')
    cy.url().should('eq','https://www.x-kom.pl/')
    cy.clearCookies()

  })
  it('przejscie do podsumowania', () => {
	cy.contains('W porządku').click()
	cy.contains("Twoje konto")

	 cy.get('[id="recommendedSection"]').first().click()
     cy.get('[id="recommendedSection"]')
         .should('not.exist')

	 cy.wait(25000);
     cy.contains('Dodaj do koszyka').click({force : true});
     cy.wait(25000);
	 cy.contains('Produkt dodany do koszyka').should('be.visible')
	 cy.wait(25000);
	 cy.contains('Przejdź do koszyka').click({force : true});

	 cy.wait(25000);
	 cy.contains('Przejdź do dostawy').click()
	 cy.wait(25000);
	 cy.url().should('include','/zamowienie/logowanie-lub-rejestracja')
	 cy.contains('Kontynuuj jako gość').click()
	 cy.wait(15000);
	 cy.url().should('include','/zamowienie')
	 cy.wait(25000);
	 cy.contains('Kurier').click()

    cy.contains('Imię i nazwisko lub nazwa firmy').type('Jan Kowalski')
    cy.contains('Ulica i numer').type('Opolska 13')
    cy.contains('Kod pocztowy').type('30-546')
    cy.contains('Miejscowość').type('Kraków')
    cy.contains('Telefon').type('767 777 777')
    cy.contains('E-mail').type('jankowalski@gmail.com')
    cy.contains('Akceptuję').click()
    cy.contains('Przejdź do podsumowania').click()
    cy.url().should('include','/zamowienie/podsumowanie')
  })
})
