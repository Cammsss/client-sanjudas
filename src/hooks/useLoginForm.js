import { useState } from "react";
import { useLogin } from "./useLogin";

export const useLoginForm = (onLoginSuccess) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const { login, loading, error, clearError } = useLogin();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) {
            clearError();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmail = formData.username.includes('@');
        const loginData = {
            password: formData.password
        };

        if (isEmail) {
            loginData.email = formData.username;
        } else {
            loginData.username = formData.username;
        }

        const result = await login(loginData);

        if (result.success) {
            if (onLoginSuccess) {
                onLoginSuccess(result.data.userDetails);
            }
        } else {
            console.error("Error en login:", result.error);
        }
    };

    return {
        formData,
        loading,
        error,
        handleInputChange,
        handleSubmit
    };
};
