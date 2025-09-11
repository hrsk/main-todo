export const todolistApi = {
    getBoards: () => {
        return fetch(`https://trelly.it-incubator.app/api/1.0/boards`, {
            headers: {
                "api-key": "2cc2e676-3d75-466e-8ce3-4e0dfeabf610",
            },
        }).then((response) => response.json());
    },
    getTasks: () => {
        return fetch(`https://trelly.it-incubator.app/api/1.0/boards/tasks`, {
            headers: {
                "api-key": "2cc2e676-3d75-466e-8ce3-4e0dfeabf610",
            },
        }).then((response) => response.json());
    },
    getMyBoards: () => {
        return fetch(`https://trelly.it-incubator.app/api/1.0/boards/my`, {
            headers: {
                "api-key": "2cc2e676-3d75-466e-8ce3-4e0dfeabf610",
            },
        }).then((response) => response.json());
    },
};
