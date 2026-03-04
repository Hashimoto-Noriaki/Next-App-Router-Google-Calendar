import { getDate } from 'date-fns'
import { dateColor } from '@/libs/date'

export const CalendarBody = ({ currentDate, dateList }) => {
    return (
        <tbody>
            {dateList.map((oneWeek)=> (
                <tr key={`week-${getDate(oneWeek[0])}`} className="mx-10">
                    {oneWeek.map((item)=> (
                        <td
                            key={`day-${getDate(item)}`}
                            className="bg-white h-[10vh] border-2 border-solid border-lime-800"
                        >
                            <span className={`inline-block w-5 leading-5 text-center ${dateColor(item,currentDate)}`}>
                                {getDate(item)}
                            </span>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
