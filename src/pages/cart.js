import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { addCount } from "./../store.js"

let Cart = ()=>{
				
				
				
				let state = useSelector((state)=>state);
				let dispatch = useDispatch();
				
				// 상태가 준비되지 않았을 경우 처리
  if (!state.cart || !Array.isArray(state.cart)) {
    return <div>Loading...</div>;
  }
				
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
								<tr key={a.id}>
      <td>{a.id}</td>
      <td>{a.title}</td>
      <td>{a.count}</td>
      <td onClick={()=>{
      				dispatch(addCount(a.id))
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