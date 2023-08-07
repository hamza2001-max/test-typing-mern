import { useGetData } from "../../hooks/useGetData";

interface wpmRowInterface {
    _id: number;
    wpm: number;
    accuracy: number;
    correctChars: number;
    error: number;
    extras: number;
    missed: number;
    time: number;
}

export const History = () => {
    const { data } = useGetData();

    return (
        <div>
            {
                data?.map((wpmRow: wpmRowInterface) => {
                    return <span>{wpmRow.wpm}</span>
                })
            }
        </div>
    )
}
