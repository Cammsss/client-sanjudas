import axios from 'axios';

const API_URL = 'http://127.0.0.1:3001/api/dogs';


export const getDogs = async () => {
    try {
        const response = await axios.get(API_URL);
        
        // Ensure we always return an array
        let data = response.data;
        
        if (Array.isArray(data)) {
            return data;
        } else if (data && typeof data === 'object') {
            if (Array.isArray(data.dogs)) return data.dogs;
            if (Array.isArray(data.allDogs)) return data.allDogs;
            if (Array.isArray(data.data)) return data.data;
        }
        
        return [];
    } catch (error) {
        console.error('Error fetching dogs from API:', error);
        return [];
    }
};



export const createDog = async (dogData) => {
    try {
        const response = await axios.post(`${API_URL}/api/dogs`, dogData);
        return response.data;
    } catch (error) {
        console.error('Error creating dog:', error);
        throw error;
    }
};

export const updateDog = async (id, dogData) => {
    try {
        const response = await axios.put(`${API_URL}/api/dogs/${id}`, dogData);
        return response.data;
    } catch (error) {
        console.error('Error updating dog:', error);
        throw error;
    }
};

export const deleteDog = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/api/dogs/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting dog:', error);
        throw error;
    }
};
