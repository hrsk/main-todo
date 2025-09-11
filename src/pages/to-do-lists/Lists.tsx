import { useEffect, useState } from "react";

import { List } from "@/pages";
import { todolistApi } from "@/pages/to-do-lists/api/api.ts";

export type Board = {
    id: string;
    type: "boards";
    attributes: {
        id: string;
        title: string;
        description: string;
        addedAt: string;
        updatedAt: string;
        order: 0;
        isImportant: boolean;
        images: {
            main: [null];
        };
    };
};

export type Task = {
    id: string;
    type: "tasks";
    attributes: {
        id: string;
        title: string;
        boardId: string;
        status: number;
        priority: number;
        addedAt: string;
        attachmentsCount: number;
    };
};

export const Lists = () => {
    const [todos, setTodos] = useState<Board[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        todolistApi.getBoards().then((res) => {
            setTodos(res.data);
        });
        todolistApi.getTasks().then((res) => {
            setTasks(res.data);
        });
    }, []);

    return (
        <div>
            {todos.map((td) => (
                <List
                    key={td.id}
                    tasks={tasks}
                    title={td.attributes.title}
                    description={td.attributes.addedAt}
                />
            ))}
        </div>
    );
};
