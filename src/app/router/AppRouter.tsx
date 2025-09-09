import { Route, Routes } from "react-router";

import { routesConfig } from "../../shared/config";

export const AppRouter = () => {
    return (
        <div>
            <Routes>
                {Object.values(routesConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </div>
    );
};
