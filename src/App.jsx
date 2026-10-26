import './App.css'
import Card from './components/Card';
import img1 from './assets/iphone 13.jpg'
import img2 from './assets/iphone 14.jpg'
import img3 from './assets/iphone 15.jpg'
import img5 from './assets/iphone 17.jpg'
import img6 from './assets/iphone 18.jpg'
import { FaApple } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import m0 from './assets/mac 13.jpg'
import m1 from './assets/mac 14.jpg'
import m2 from './assets/mac 15.jpg'
import m3 from './assets/mac 166.jpg'
import pro from './assets/mac pro.jpg'
function App() {
  return (
    <div className='cont'>
      <nav>
        <ul>
          <li><FaApple size={'30px'} /></li>
          <li><AiOutlineMenu size={'30px'} /></li>
        </ul>
      </nav>
      <div className='App'>
        <Card title={"Iphone 13"} im={img1} price={900} />
        <Card title={"Iphone 14"} im={img2} price={1000} />
        <Card title={"Iphone 15"} im={img3} price={1300} />
        <Card title={"Iphone 17"} im={img5} price={1400} />
        <Card title={"Iphone 18"} im={img6} price={2000} />

        <Card title={"MacBook m1"} im={m0} price={1300}/>
        <Card title={"MacBook m2"} im={m1} price={1400}/>
        <Card title={"MacBook m3"} im={m2} price={1500}/>
        <Card title={"MacBook m4"} im={m3} price={1800}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
        <Card title={"MacBook pro"} im={pro} price={2000}/>
      </div> 
    </div>




  )
}
export default App;