import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { addCount } from "./../store.js"

let Cart = ()=>{
				
				
				
				let state = useSelector((state)=>state);
				let dispatch = useDispatch();
				return(
				<>
				
				<Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
				
				{
				state.cart.map((a,i)=>
								<tr>
      <td>{state.cart[i].id}</td>
      <td>{state.cart[i].title}</td>
      <td>{state.cart[i].count}</td>
      <td onClick={()=>{
      				dispatch(addCount(state.cart[i].id))
      }} >+</td>
    </tr>
				
				)
				}
  </tbody>
</Table> 
				
				
				
				
				</>
				)
				
				
				
}

export default Cart;