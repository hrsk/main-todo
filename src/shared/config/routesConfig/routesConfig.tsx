import type { RouteProps } from "react-router";

import { Main } from "../../../app/Main.tsx";
import { List, Lists, PageNotFound, SignIn } from "../../../pages";

export const Paths = {
    MAIN: "main",
    TO_DO: "to_do_list",
    TO_DO_LISTS: "to_do_lists",
    SIGN_IN: "sign_in",
    PAGE_NOT_FOUND: "page_not_found",
};

type RoutePaths = (typeof Paths)[keyof typeof Paths];

export const RoutePath: Record<RoutePaths, string> = {
    [Paths.MAIN]: "/",
    [Paths.TO_DO]: "/to-do-list",
    [Paths.TO_DO_LISTS]: "/to-do-lists",
    [Paths.SIGN_IN]: "/sign-in",
    [Paths.PAGE_NOT_FOUND]: "*",
};

export const routesConfig: Record<RoutePaths, RouteProps> = {
    [Paths.MAIN]: {
        path: RoutePath.main,
        element: <Main />,
    },
    [Paths.SIGN_IN]: {
        path: RoutePath.sign_in,
        element: <SignIn />,
    },
    [Paths.PAGE_NOT_FOUND]: {
        path: RoutePath.page_not_found,
        element: <PageNotFound />,
    },
    [Paths.TO_DO]: {
        path: RoutePath.to_do_list,
        element: <List />,
    },
    [Paths.TO_DO_LISTS]: {
        path: RoutePath.to_do_lists,
        element: <Lists />,
    },
};
