export class UIManager {
  constructor() {
    this.contactForm = document.getElementById('contact-form');
    this.contactContainer = document.querySelector('div.contact-container');
    
    this.contactsTemplate = Handlebars.compile(document.getElementById('contacts').innerHTML);
    this.contactPartialTemplate = Handlebars.compile('{{> contact }}');
    this.contacts;
  }

  addContact(contactJson) {
    const contactHTML = this.contactPartialTemplate(contactJson);
    this.contactContainer.insertAdjacentHTML('beforeend', contactHTML);
    this.contacts.push(contactJson);
  }

  removeContact(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== Number(id));
    let contactToRemove = document.querySelector(`.contact[data-id='${id}']`);
    contactToRemove.remove();
  }

  updateContact(contactJson) {
    this.removeContact(contactJson.id);
    this.addContact(contactJson);
  }

  populateAllContacts(contactsJson) {
    this.contacts = contactsJson;
    this.contactContainer.innerHTML = '';
    this.contactContainer.insertAdjacentHTML('beforeend', this.contactsTemplate({ contacts: contactsJson }));
  }

  populateContactForm(contactJson) {
    document.getElementById('full-name').setAttribute('value', contactJson.full_name);
    document.getElementById('email').setAttribute('value', contactJson.email);
    document.getElementById('telephone').setAttribute('value', contactJson.phone_number);
  }

  toggleContactForm() {
    let contactDiv = document.querySelector('div.add-contact');
    let homeDiv = document.querySelector('div.home');
    if (contactDiv.classList.contains('hidden')) {
      contactDiv.classList.remove('hidden');
      homeDiv.classList.add('hidden');
    } else {
      contactDiv.classList.add('hidden');
      homeDiv.classList.remove('hidden');
    }
  }

  filterContacts(str) {
    let contactsToShow = this.contacts.filter(contact => {
      return contact.full_name.toLowerCase().includes(str.toLowerCase())
  });

    this.contactContainer.innerHTML = '';
    this.contactContainer.insertAdjacentHTML('beforeend', this.contactsTemplate({ contacts: contactsToShow }));

  }

}