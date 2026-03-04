'use client'

import { eachDayOfInterval,eachWeekOfInterval,endOfMonth,endOfWeek,getMonth,startOfMonth } from 'date-fns'
import { CalendarBody } from '@/shared/components/organisms/CalendarBody'
import { CalendarHeader } from '@/shared/components/organisms/CalendarHeader'

export default function CalendarPage() {
    const today = new Date()

    const monthOfSundayList = eachWeekOfInterval({
        start:startOfMonth(today),
        end:endOfMonth(today),
    })

    const dateList: Date[][] = monthOfSundayList.map((date)=> {
        return eachDayOfInterval({
            start:date,
            end:endOfWeek(date),
        })
    })

    return (
        <>
            <h1 className="font-bold text-3xl mb-5">
                {`${getMonth(today)+ 1}月`}
            </h1>
            <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 tabled-fixed">
                <CalendarHeader/>
                <CalendarBody currentDate={today} dateList={dateList}/>
            </table>
        </>
    )
}
