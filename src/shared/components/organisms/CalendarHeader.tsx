import { DAYS_LIST } from '@/constants/calendar'

export const CalendarHeader = () => {
    return (
        <thead>
            <tr className="bg-lime-800 text-white rounded-tr-lg rounded-tl-lg py-10">
                {DAYS_LIST.map((day)=> (
                    <th key={day} className="font-bold text-3xl py-5">
                        {day}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
