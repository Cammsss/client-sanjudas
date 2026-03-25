import { useState, useEffect } from 'react';
import { getDogs } from '../services/dogService';

export const useDogs = (category) => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDogs = async () => {
            setLoading(true);
            try {
                const allDogs = await getDogs();
                const filteredDogs = category ? allDogs.filter(dog => {
                    if (dog.category === category) return true;
                    // Corrección para problemas de codificación de texto en la base de datos (ej. Raza Pequea)
                    if (category === 'Raza Pequeña' && dog.category && dog.category.includes('Peque')) return true;
                    if (category === 'Raza Mediana' && dog.category && dog.category.includes('Median')) return true;
                    if (category === 'Raza Grande' && dog.category && dog.category.includes('Grand')) return true;
                    return false;
                }) : allDogs;
                setDogs(filteredDogs);
                setError(null);
            } catch (err) {
                console.error("Error fetching dogs:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDogs();
    }, [category]);

    return { dogs, loading, error };
};
