import { ProgressBar } from "./Progressbar";

const topproducts = [
    { name: 'Aashirvad Atta', value: 142 },
    { name: 'Coca-Cola 750ml', value: 118 },
    { name: 'Parle-G 800g', value: 95 },
    { name: 'Amul Butter', value: 71 },
]

const Totalsale = 426;

function Topproducts() {
    return (
        <div className="min-w-80 p-3 bg-white border border-solid border-gray-200 rounded-2xl flex flex-col gap-2">
            <h3 className='font-bold text-lg'>Top products</h3>
            {topproducts.map((items) => (
                <>
                    <div className="flex font-semibold justify-between">
                        {items.name}
                        <span className='text-gray-400'>{items.value}</span>
                    </div>
                    <ProgressBar value={items.value} max={Totalsale}/>
                </>
            ))}
        </div>
    )
}

export default Topproducts
