import Card from "./components/Card"

function App() {
  
  return (
    <div className="flex lg:h-screen h-auto bg-slate-400">
      <div className="m-auto">
      <h1 className="font-sans font-bold text-6xl mb-11 text-center">Props</h1>
        <div className="lg:flex gap-5 space-y-3 mb-3">
          <Card name="sarah Dayon" position="Staff Engineer" location="Algolia" img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Card name="John Buh" position="Software Engineer" location="USA" img="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Card name="Brad Johnson" position="Manager" location="London" img="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div>
    </div>
  )
}

export default App
