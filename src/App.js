import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [show,setShow]  =useState(false) ;

  const arr = [
    {
      productimg: "https://tse1.mm.bing.net/th?id=OIP.AnH9yfpLG6euj_RhqI5UugHaEA&pid=Api&P=0",
      productname: 'Fancy Product',
      productprice: '$40.00 - $80.00',
    },
    {
      productimg: "https://tse3.mm.bing.net/th?id=OIP.Llp0jLbHiW2a-WDfC-H4sgHaEK&pid=Api&P=0",
      productname: 'Special Item',
      productrating:'⭐⭐⭐⭐⭐',
      productprice: '$18.00',
    },
    {
      productimg: "https://tse2.mm.bing.net/th?id=OIP.VvEos956qzP_ty7F4avHMAHaDX&pid=Api&P=0",
      productname: 'Sale Item',
      productprice: '$25.00',
    },
    {
      productimg: "https://tse4.mm.bing.net/th?id=OIP.09FuzKnSiPf-4dVEJ3UiyQHaC9&pid=Api&P=0",
      productname: 'Popular Item',
      productrating:'⭐⭐⭐⭐⭐',
      productprice: '$40.00 ',
    },
    {
      productimg: "https://tse2.mm.bing.net/th?id=OIP.vksNujBrtRkNLmjdh1y--QHaDt&pid=Api&P=0",
      productname: 'Sale Item',
      productprice: '$25.00',
    },
    {
      productimg: "https://tse1.mm.bing.net/th?id=OIP.jheuz3_6oxE6oBnuMDX0vwAAAA&pid=Api&P=0",
      productname: 'Fancy Product',
      productprice: '$120.00 - $280.00',
    },
    {
      productimg: "https://tse2.mm.bing.net/th?id=OIP.E7d53r-wMoeT0DrKYmtEBgHaEw&pid=Api&P=0",
      productname: 'Special Item',
      productrating:'⭐⭐⭐⭐⭐',
      productprice: '$18.00',
    },
    {
      productimg: "https://tse1.mm.bing.net/th?id=OIP.jEBRXiGcjc93wa2cH2kKhQHaEK&pid=Api&P=0",
      productname: 'Popular Item',
      productrating:'⭐⭐⭐⭐⭐',
      productprice: '$40.00',
    }
  ];

  return (

    <div className="App">
        <div className="container">
      {arr.map((value,index)=><Cards
      index = {index}
      value = {value}/>)}
     </div>
    </div>
  );
}

export default App;


function Cards({value,index}){
const [show,setShow] = useState(true)
return(

  
     <Card className='cards' key={index} style={{ width: '18rem' }}>
       <Card.Img variant="top" src={value.productimg} />
       <Card.Body>
         <Card.Title>{value.productname}</Card.Title>
         <Card.Title>{value.productrating}</Card.Title>
         <Card.Text>
           {value.productprice}
         </Card.Text>
        { show ? <Button  onClick={()=>setShow(!show)}  variant="primary">Add to Cart</Button>:''}
        {!show ? <Button onClick={()=>setShow(!show)} variant="danger">Remove from Cart</Button>:''}
       </Card.Body>
     </Card>
 
   
   
)


}