
// Podemos cambiar la implementacion a nuestra propia libreria de alerts, gracias al principio solid de inversion de dependencia
const useAlert = () => {
    const dispatchSuccessAlert = (message: string) => {
        alert('SUCCESS: my success message')
    };

    const dispatchErrorAlert = (message: string) => {
        
    };

    return {
        dispatchSuccessAlert,
        dispatchErrorAlert
    };
};

export default useAlert;
