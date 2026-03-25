import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAdoption } from '../services/apiService';

export const useAdoptionForm = (onClose, dogName) => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        phone: '',
        confirmPhone: '',
        country: 'Guatemala',
        terms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSuccessConfirm = () => {
        setShowSuccessModal(false);
        onClose();
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.email !== formData.confirmEmail) {
            alert("Los correos electrónicos no coinciden");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        if (formData.phone !== formData.confirmPhone) {
            alert("Los números de teléfono no coinciden");
            return;
        }
        setIsSubmitting(true);

        const result = await createAdoption({
            fullName: formData.fullName,
            email: formData.email,
            birthDate: formData.birthDate,
            phone: formData.phone,
            country: formData.country,
            dogName: dogName
        });

        setIsSubmitting(false);

        if (!result.error) {
            setShowSuccessModal(true);
        } else {
            alert(result.message || "Error al realizar el registro");
        }
    };

    return {
        formData,
        isSubmitting,
        showSuccessModal,
        handleChange,
        handleSubmit,
        handleSuccessConfirm
    };
};
