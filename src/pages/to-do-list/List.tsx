import { Button } from "@/components/ui/button.tsx";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import type { Task } from "@/pages/to-do-lists/Lists.tsx";

type Props = {
    title: string;
    description: string;
    tasks: Task[];
};
export const List = (props: Props) => {
    const { title, description, tasks } = props;

    return (
        <Card className={"flex min-w-2.5 max-w-md"}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardAction>
                    <Button variant={"secondary"}>x</Button>
                </CardAction>
                <CardDescription>{description.slice(0, 10)}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.attributes.title}</li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button variant={"default"}>ALL</Button>
                <Button variant={"outline"}>ACTIVE</Button>
                <Button variant={"outline"}>COMPLETED</Button>
            </CardFooter>
        </Card>
    );
};
