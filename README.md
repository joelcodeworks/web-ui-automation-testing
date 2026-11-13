# Web UI Automation Testing

UI test automation project developed with **Playwright** and **JavaScript**.
  This repository contains automated end-to-end tests covering login functionality and basic  navigation on web pages. 

## Technologies

- JavaScript
- Playwright Test
- Node.js
- Git and GitHub

## Automated Test Scenarios

### Login Tests

Website: https://the-internet.herokuapp.com/login

- Successful login with valid credentials.
- Login attempt with an incorrect password.
- Login attempt with an incorrect username.

### Playwright Website Tests

Website: https://playwright.dev/

- Verify the expected page title.
- Verify that the "Get started" link is visible.
- Verify navigation to the documentation after clicking the link.

### Browser Coverage

Tests are configured to run on:

- Chromium
- Firefox
- WebKit

### Installation

Clone the repository and install dependencies:

	npm install

Install Playwright browsers if needed:

	npx playwright install

### Running Tests

Run all tests:

	npx playwright test

Run login tests only:

	npx playwright test tests/login.spec.js

Run portfolio tests only:

	npx playwright test tests/portfolio.spec.js

### Test Reports

An HTML report is generated after test execution.
To open the report:

	npx playwright show-report

### Project Purpose

This project is part of my ongoing learning process in software testing and test automation, focusing on Playwright, browser interaction, assertions, and cross-browser testing.