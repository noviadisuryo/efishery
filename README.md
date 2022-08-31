# Efishery QA Engineer Test #

Simpel project UI End To End testing menggunakan cypress dengan Allure Reporter

## How to Run the Test
```bash
# run test di cmd (headless)
npx cypress run

# run test dengan browser tertentu
npx cypress run --browser chrome
npx cypress run --browser firefox

# run test non headless
npx cypress run --headed

# run test lewat cypress UI
npx cypress open

# run test menggunakan allure report
npm run test:allure

# run the test from github
Make any changes on the repo, and workflow will be activated and trigger the test
```