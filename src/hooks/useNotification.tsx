import toast from 'react-hot-toast';


function useNotification() {
  const successMessage = (message) => {
    return toast.success(message, {
      duration: 5000,
      position: 'bottom-center',
    });
  };

  const errorMessage = (message) => {
    return toast.error(message, {
      duration: 5000,
      position: 'bottom-center',
      style: {
        borderRadius: '10px',
        background: '#ff0000a9',
        color: '#fff',
      },
    });
  };

  return {errorMessage, successMessage};
}

export default useNotification;
