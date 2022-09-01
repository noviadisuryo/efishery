class SearchPage {
    elements = {
      usernameInput: () => cy.get("#user-name"),
      passwordInput: () => cy.get("#password"),
      searchBtn: () => cy.get('search-icon').type('joko tingkir{enter}'),
      loginBtn: () => cy.get("#login-button"),
      titleResult: () => cy.get(':nth-child(2) > #contents > :nth-child(1) > .flex-columns > .title-column > .title > .yt-simple-endpoint'),
      clickSongTitle: () => cy.get(':nth-child(2) > #contents > :nth-child(1) > .flex-columns > .title-column > .title > .yt-simple-endpoint'),
      wait: () => cy.wait(3000),
    };  
   
    typeKeyword(keyword) {
        this.elements.searchBtn().type(keyword);
      }
  
    clickSearch() {
      this.elements.searchBtn().click();      
    }

    clickTitle() {
        this.elements.clickSongTitle().click();
    }

    assertVideoPlaying() {
        this.elements.assertVideo()
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
      }
    
    typePassword(password) {
        this.elements.passwordInput().type(password);
      }

    clickLogin() {
      this.elements.loginBtn().click();
    }
  }
  
  module.exports = new SearchPage();
  