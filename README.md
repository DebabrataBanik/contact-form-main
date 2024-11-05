# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj).

## Table of Contents

- [The Challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [My Process](#my-process)
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

![alt text](contact_form_using_react/design/desktop-preview.jpg)

### Links

- [Live Site URL]()
- [Solution URL]()


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- ReactJs
- React Hook Form

### My Process 

**Input, Textarea, and Confirmation Toast**

In this project, separate components have been created for Input, Textarea, and ConfirmationToast to maintain modularity and reusability. Each child component utilizes forwardRef to expose its control to the parent component, allowing the parent to directly manage their behavior.

**Form Validation with react-hook-form**

The form validation is handled using the react-hook-form library, which simplifies the validation process and manages form states efficiently. The errors generated during form validation are passed down to the child components, enabling them to render error messages with the desired styling.

**Confirmation Toast**

An isValid state variable is used to determine if the form submission is successful. When the form is validated and submitted correctly, the confirmation toast is displayed to inform the user of a successful action.

### Continued Development

Try using other frameworks or libraries for validation. 