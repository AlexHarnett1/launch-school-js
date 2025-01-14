export class APIManager {

  async createNewContact(formObject) {
    let response = await fetch('api/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    });
    
    if (!response.ok) {
      throw new Error(`Failed to create contact: ${response.statusText}`);
    }

    return response.json();
  }

  async deleteContact(id) {
    let response = await fetch(`api/contacts/${id}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error(`Failed to delete contact: ${response.statusText}`);
    }

    return response;
  }

  async updateContact(formObject) {
    let response = await fetch(`api/contacts/${formObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    });

    if (!response.ok) {
      throw new Error(`Failed to update contact: ${response.statusText}`);
    }

    return response.json();
  }

  async getAllContacts() {
    let response = await fetch('api/contacts/');
    
    if (!response.ok) {
      throw new Error(`Failed to update contact: ${response.statusText}`);
    }

    return response.json();
  }

  async getContact(id) {
    let response = await fetch(`api/contacts/${id}`)

    if (!response.ok) {
      throw new Error(`Failed to update contact: ${response.statusText}`);
    }

    return response.json();
  }

}
