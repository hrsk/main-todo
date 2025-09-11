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

export const List = () => {
    return (
        <Card className={"flex min-w-2.5 max-w-md"}>
            <CardHeader>
                <CardTitle>Todolist title</CardTitle>
                <CardAction>
                    <Button variant={"secondary"}>x</Button>
                </CardAction>
                <CardDescription>
                    Date created: {new Date().getFullYear()}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <span>Tasks</span>
            </CardContent>
            <CardFooter>
                <Button variant={"default"}>ALL</Button>
                <Button variant={"outline"}>ACTIVE</Button>
                <Button variant={"outline"}>COMPLETED</Button>
            </CardFooter>
        </Card>
    );
};
