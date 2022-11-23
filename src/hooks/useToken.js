import { useEffect, useState } from "react";


const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        console.log(email, 'emailll');
        if (email) {
            fetch(`https://doctors-portal-server-kappa-nine.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log('Rasel', data);
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken);
                    }
                });
        }

    }, [email]);

    return [token];
};

export default useToken;