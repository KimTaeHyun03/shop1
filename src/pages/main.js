import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import styled from 'styled-components';
import PdList from '../pdList.js';
import {addItem} from './../store.js';
import { useDispatch } from "react-redux"

let Btn =styled.button`
padding-left:10px;
background : none;
`



let Main =()=>{
				let [cp_pd, changePd] = useState(PdList);
				let [clickTime, changeClick] = useState(0);
  
  
  
  
  
  useEffect(() => {
    // pdList 데이터를 상태에 설정
    changePd(PdList);
  }, []);

				
				return(
								<div>
				
				
				
				
				<div className="mainImg">
								<img src={process.env.PUBLIC_URL+'/images/bg.png'} className="bg_png" />
				</div>
				
				
				<br/>
				<div>
				
				
								<h7 className="sugPd">추천 상품</h7>
								
								<Row className="pdLayout" >
												{ cp_pd.map((a, i)=>{
         return <Col key={i} xs={4} sm={4} md={4} > <Card shoes={a} i={i+1} ></Card></Col>
        })}
								</Row>
				</div>
				
				
<Btn
  onClick={() => {
    // clickTime을 이전 값에서 증가시키도록 수정
    changeClick((prevClickTime) => {
      const newClickTime = prevClickTime + 1;

      if (newClickTime % 2 === 1) {
        // clickTime이 홀수일 때
        axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {
          let copy = [...cp_pd, ...결과.data];
          
          changePd(copy);
        });
      } else {
        // clickTime이 짝수일 때
        axios.get('https://codingapple1.github.io/shop/data3.json').then((결과) => {
          let copy = [...cp_pd, ...결과.data];
          changePd(copy);
        });
      }

      return newClickTime;
    });
  }}
>
  더보기
</Btn>
				
				
				
				
				</div>
				)
}

function Card(props) {
  
  let dispatch=useDispatch();
				
				if (!props.shoes) {
    return null; // 또는 빈 div 반환
  } 
				
  return (
												<div className="imgDiv">
																							<img className="pdImg" src={process.env.PUBLIC_URL+props.shoes.img_url }  />
																							<h6>{props.shoes.title}</h6>
																							<span>{props.shoes.id}</span>
																							<span>{props.shoes.price}</span>
																				 <span className="spanCss">{props.shoes.color}</span>
  <Btn onClick={()=>{
    dispatch(addItem({ id : props.shoes.id,
      title : props.shoes.title,
      count : 1}))
    
    
  }}>구매</Btn>
													
				
												</div>
				)}



export default Main;