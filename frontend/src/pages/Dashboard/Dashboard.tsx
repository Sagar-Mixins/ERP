import Navbar from '../../layout/Navbar'
import Graph from './components/Graph'
import Statcard from './components/Statcard'
import Topproducts from './components/Topproducts'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-4 sm:p-5 flex flex-col gap-5">
        <Statcard />
        <div className='flex flex-col gap-5 xl:flex-row'>
          <Graph />
          <Topproducts />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
