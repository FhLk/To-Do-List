import React, { FC, useEffect, useState } from 'react'
import { TaskData } from '../TodoAPI';
import moment, { Moment } from 'moment'

interface GroupedData {
    [data: string]: TaskData[];
}

interface Props {
    task: TaskData[];
}

const GroupDateList: FC<Props> = ({ task }) => {

    const [groupTask, setGroupTask] = useState<GroupedData>({} as GroupedData)
    
    useEffect(()=>{
        groupTodos()
    },[task])
    
    const groupTodos = () => {
        const groupByDate: GroupedData = task.reduce((acc, todo) => {
          const formattedDate = moment(todo.createdAt).utc().format("L");
          if (!acc[formattedDate]) {
            acc[formattedDate] = [];
          }
          acc[formattedDate].push(todo);
      
          return acc;
        }, {} as GroupedData);
        setGroupTask(groupByDate);
      };
    
    return (
        <div className=''>
            {Object.keys(groupTask).map((groupKey) => (
                <div key={groupKey} className=''>
                    <h3>{groupKey}</h3>
                    <ul>
                        {groupTask[groupKey].map((task) => (
                            <li key={task.id}>
                                <strong>{task.title}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default GroupDateList
