import Service from '@ember/service';

export default class DatabaseService extends Service {
  async get() {
    return await fetch('http://localhost:5000/apartments');
  }

  async update(body, id) {
    try {
      const response = await fetch(`http://localhost:5000/apartments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await fetch(`http://localhost:5000/apartments/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  }

  async createApartment(name) {
    try {
      const response = await fetch(`http://localhost:5000/apartments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name}),
      });
      if (!response.ok) {
        throw new Error('Failed to create data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating data:', error);
      throw error;
    }
  }
}
