# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj).

## Table of Contents

- [The Challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My Process](#my-process)
- [Built with](#built-with)
- [Continued Development](#continued-development)

### The Challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![alt text](design/desktop-preview.jpg)

### Links

- [Live Site URL](https://debabratabanik.github.io/contact-form-main/)
- [Solution URL](https://www.frontendmentor.io/solutions/contact-form-main-XMOg-zAiC5)

### My Process

As for my process I will only mention the validation approach I took. I first targeted each input element and took them in separate variables. Then each input was attached with listeners to validate on the go. Created a separate function for error validation to display error messages. And in order to display all errors on submit, created a flag that checks if every entry is valid which finally allows submitting and resetting the form and also displaying the confirmation modal. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### Continued development

Improve validation approach by refactoring parts of the code. Implement this project using frameworks like React and its integrated libraries. 