# Charta.js - jot down your thoughts anytime, anywhere.

This library can help you include a compact text editor with cloud storage into your web application.

## Ideas / Brainstorm about charta.js:
* Inspired by Sticky Notes application on Mac. Can this library offer the handiness of Sticky Notes, but at the same time store all data securely?
* Auto-saving feature would be important.
  * *concerning the Cloud Storage Feature* I think using the [Google Cloud Storage API](https://cloud.google.com/storage/docs/apis) would be a good route to go for you. Its free! It has a [javascript library that helps in implementation](https://github.com/googleapis/nodejs-storage) and because something else deals with the cloud storage concept, it could potentially save a lot of time on your end. There are a couple problems though, such as the need to connect a bank account to your google developer console account thing (i promise its free) and other setup things that may make automating/codefying this bit into a library more tricky. Any questions with using google API's you can send my way!
* This library could be integrated into web conferencing software, learning platforms, browsers...
* Please add more of your thoughts!  
* Ideas:
  * A visual timeline with previous versions of a note
  * Simple style/theme/color templates
  * "Drawing notes" using your mouse
  * Ability to stack notes
  * Password-locked notes
  * Import/export of notes (by sharing files or through cloud)
    * Ability to export as different file types (ex. .txt, .rtf, possibly .pdf), as well as import from various file types
