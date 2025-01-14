import { APIManager } from './api_manager.js';
import { UIManager } from './ui_manager.js';

class ContactManager {
  constructor() {
    this.apiManager = new APIManager;
    this.uiManager = new UIManager;
    this.contactForm = document.getElementById('contact-form');
    this.contactContainer = document.querySelector('div.contact-container');
    Handlebars.registerPartial('contact', document.querySelector('#contact').innerHTML);

    this.createAllEventListeners();
    this.populateContacts();
  }

  createAllEventListeners() {
    document.querySelector('a.add-contact').addEventListener('click', (e) => {
      this.uiManager.toggleContactForm();
    });

    this.contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      let formObject = this.getFormDataObject(e);
      if (e.target.getAttribute('data-id') === '') {
        try {
          let contactJson = await this.apiManager.createNewContact(formObject);
          this.uiManager.addContact(contactJson);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          formObject.id = e.target.getAttribute('data-id');
          let contactJson = await this.apiManager.updateContact(formObject);
          this.uiManager.updateContact(contactJson);
        } catch (error) {
          console.error(error);
        }
        
      }
      e.target.reset();
    });

    this.contactForm.addEventListener('reset', () => {
      this.contactForm.setAttribute('data-id', '');
      this.contactForm.querySelectorAll('input').forEach(input => input.removeAttribute('value'));
      this.uiManager.toggleContactForm();
    });

    this.contactContainer.addEventListener('click', async (e) => {
      e.preventDefault();
      if (e.target.tagName !== 'BUTTON') return;

      let button = e.target;
      let contactId = button.parentElement.getAttribute('data-id')
      if (button.classList.contains('edit')) {
        this.createEditMenu(contactId);
      } else if (button.classList.contains('delete')) {
        try {
          await this.apiManager.deleteContact(contactId);
          this.uiManager.removeContact(contactId);
        } catch (error) {
          console.error(error);
        }
      }
    });

    document.querySelector('input.search-bar').addEventListener('keyup', (e) => {
      this.uiManager.filterContacts(e.target.value);
    });
  }

  async populateContacts() {
    try {
      let contactsJson = await this.apiManager.getAllContacts();
      this.uiManager.populateAllContacts(contactsJson);
    } catch (error) {
      console.error(error);
    }
  }

  getFormDataObject(event) {
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    return formObject;
  }

  async createEditMenu(id) {
    this.contactForm.setAttribute('data-id', id);
    this.uiManager.toggleContactForm();
    try {
      let contactJson = await this.apiManager.getContact(id);
      this.uiManager.populateContactForm(contactJson);
    } catch (error) {
      console.error(error);
    }
  }

}

document.addEventListener('DOMContentLoaded', () => {
  new ContactManager();
});
