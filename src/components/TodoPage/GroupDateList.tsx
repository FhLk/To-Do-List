import React, { FC, useEffect, useState } from 'react'
import { TaskData } from '../TodoAPI';
import moment, { Moment } from 'moment'

interface GroupedData {
    [data: string]: TaskData[];
}

interface Props {
    tasks: TaskData[]
    onDeleteTask: (taskId: string) => void;
}

const GroupDateList: FC<Props> = ({ tasks, onDeleteTask }: Props) => {

    const [groupTask, setGroupTask] = useState<GroupedData>({} as GroupedData)

    useEffect(() => {
        groupTodos()
    }, [tasks])

    const groupTodos = () => {
        const groupByDate: GroupedData = tasks.reduce((acc, todo) => {
            const formattedDate = moment(todo.createdAt).utc().format("L");
            if (!acc[formattedDate]) {
                acc[formattedDate] = [];
            }
            acc[formattedDate].push(todo);

            return acc;
        }, {} as GroupedData);
        setGroupTask(groupByDate);
    };

    const handleDeleteClick = (id: string) => {
        onDeleteTask(id);
    };

    return (
        <div className='w-[700px]'>
            {Object.keys(groupTask).map((groupKey) => (
                <div key={groupKey} className='py-3'>
                    <h3 className='text-lg my-2'>{groupKey}</h3>
                    <ul className='p-1'>
                        {groupTask[groupKey].map((task) => (
                            <li key={task.id} className='my-[10px]'>
                                <div className='flex justify-between items-center p-2 rounded-lg bg-red-400'>
                                    <h3><strong>{task.title}</strong></h3>
                                    <button onClick={() => handleDeleteClick(task.id)} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            { tasks.length === 0 && <h3 className='text-4xl text-center py-10'>Your task is empty.</h3> }
        </div>
    )
}

export default GroupDateList
