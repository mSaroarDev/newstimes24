
export default async function SummaryCard({icon, name, value}){


    return (
        <>
            <div className="h-[150px] w-[200px] rounded-md shadow-md p-5 flex flex-col items-center justify-center text-center">
                <h3 className='text-5xl font-bold mb-2'>{value}</h3>
                <p className="flex items-center gap-3">{icon} {name}</p>
            </div>
        </>
    )
}