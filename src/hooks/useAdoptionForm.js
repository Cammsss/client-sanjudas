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

    const sanitizeInput = (input) => {
        if (typeof input !== 'string') return input;
        // Eliminar <, > (XSS) y $, {, } (NoSQL)
        return input.replace(/[<>$}{]/g, '').trim();
    };

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

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9\-\+\s()]+$/;
        const dangerousPattern = /[<>$}{]/;

        // Comprobación de seguridad básica
        const fieldsToCheck = [formData.fullName, formData.email, formData.phone, formData.country];
        for (const field of fieldsToCheck) {
            if (dangerousPattern.test(field)) {
                alert("Se han detectado caracteres no permitidos en el formulario.");
                return false;
            }
        }

        if (!emailRegex.test(formData.email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return false;
        }
        if (formData.email !== formData.confirmEmail) {
            alert("Los correos electrónicos no coinciden.");
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return false;
        }
        if (formData.password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return false;
        }
        if (!phoneRegex.test(formData.phone)) {
            alert("El número de teléfono no tiene un formato válido.");
            return false;
        }
        if (formData.phone !== formData.confirmPhone) {
            alert("Los números de teléfono no coinciden.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Sanitización final antes de enviar
        const sanitizedData = {
            fullName: sanitizeInput(formData.fullName),
            email: sanitizeInput(formData.email),
            birthDate: sanitizeInput(formData.birthDate),
            phone: sanitizeInput(formData.phone),
            country: sanitizeInput(formData.country),
            dogName: sanitizeInput(dogName)
        };

        const result = await createAdoption(sanitizedData);

        setIsSubmitting(false);

        if (!result.error) {
            onClose();
            navigate(`/app/adopcion-exitosa?dogName=${encodeURIComponent(dogName)}`);
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
