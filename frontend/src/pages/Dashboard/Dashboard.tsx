import Navbar from '../../layout/Navbar'
import Graph from './components/Graph'
import Statcard from './components/Statcard'
import Topproducts from './components/Topproducts'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-5 flex flex-col gap-5">
        <Statcard />
        <div className='flex gap-5'>
          <Graph/>
          <Topproducts/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
