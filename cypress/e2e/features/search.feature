Feature: Search page

    Feature search behavior when logged in and logged off

    Background:
        Given A user opens a Youtube Music

    Scenario: Success Search Without Login
        When A user click on the search button 
        And A user search for keyword "Joko Tingkir"
        Then The music title "Joko Tingkir" is displayed        

