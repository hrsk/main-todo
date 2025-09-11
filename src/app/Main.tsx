import { useEffect } from "react";

import { authApi } from "@/pages/sign-in/api/api.ts";

export const Main = () => {
    useEffect(() => {
        authApi.auth().then((res) => {
            console.log(res.json());
        });
    }, []);

    return <div></div>;
};
