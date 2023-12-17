export interface Item {
    id: number;
    title: string;
    content: string;
}

export const dummyData: Item[] = [
    {
        id: 1,
        title: 'First Task',
        content: 'This is the first task for the day'
    },
    {
        id: 2,
        title: 'Second Task',
        content: 'This is the Second task for the day'
    },
    {
        id: 3,
        title: 'Third Task',
        content: 'This is the Third task for the day'
    },
    {
        id: 4,
        title: 'Fourth Task',
        content: 'This is the Fourth task for the day'
    }
]