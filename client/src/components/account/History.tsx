import { useGetData } from "../../hooks/useGetData";
import { wpmRowInterface } from "../../types";
import { Tooltip } from "../include/Tooltip";

export const History = () => {
    const { data } = useGetData();

    return (
        <table className="w-[80vw]">
            <thead>
                <tr className="text-sm text-custom-primary">
                    <th className="py-3 font-normal">wpm</th>
                    <th className="py-3 font-normal">accuracy</th>
                    <th className="py-3 font-normal">
                        <Tooltip
                            element={"chars"}
                            hover={"correct/errors/extras/missed"}
                            nowrap={true}
                            space="bottom-8"
                        />
                    </th>
                    <th className="py-3 font-normal">time</th>
                    <th className="py-3 font-normal" colSpan={2}>mode</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((wpmRow: wpmRowInterface, index: number) => {
                        return (<tr key={index} className={`${index % 2 === 1 ? "bg-custom-fadedFill" : "bg-custom-fill"} text-custom-secondary text-center`}>
                            <td className="py-3">{wpmRow.wpm}</td>
                            <td className="py-3">{wpmRow.accuracy}%</td>
                            <td className="py-3">{wpmRow.correctChars}/{wpmRow.error}/{wpmRow.extras}/{wpmRow.missed}</td>
                            <td className="py-3">{wpmRow.time}s</td>
                            <td className="py-3">{wpmRow.mode}</td>
                            <td className="py-3">{wpmRow.limiter}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    )
}
