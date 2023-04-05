// import React,{lazy} from 'react'
// const Home = lazy(()=>import('./Home))

const Home = React.lazy(()=>import('./Home'));
const About = React.lazy(()=>import("./About"));

function App() {
  return (
    <div className="App">
      {/* <Axios/> */}
      <Router>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>        
        </Suspense>
        </Router>
    </div>
  );
}

export default App;
