import React, { useEffect, useState } from 'react'
import MainContent from './MainContent'
import sampleMainItem from '../sample/data/board.json'
import axios from 'axios';
const Main = () => {
    // const generateMainContent = () => {
    //     let items = [];
    //     //질문 데이터 push
    //     let questionItems = sampleMainItem.filter((e) => e.boardType === "QUST").sort(
    //         function compare(a,b){
    //             return new Date(b.writeDate) - new Date(a.writeDate)
    //         }
    //     ).slice(0,5);
    //     let noticeItems = sampleMainItem.filter((e) => e.boardType === "NOTICE").sort(
    //         function compare(a,b){
    //             return new Date(b.writeDate) - new Date(a.writeDate)
    //         }
    //     ).slice(0,5);
    //     let intShareItems = sampleMainItem.filter((e) => e.boardType === "INTSH").sort(
    //         function compare(a,b){
    //             return new Date(b.writeDate) - new Date(a.writeDate)
    //         }
    //     ).slice(0,5);
    //     let communityItems = sampleMainItem.filter((e) => e.boardType === "COMM").sort(
    //         function compare(a,b){
    //             return new Date(b.writeDate) - new Date(a.writeDate)
    //         }
    //     ).slice(0,5);
    //     return [...questionItems, ...noticeItems, ...intShareItems, ...communityItems];
    // }
    const [mainItems, setMainItems] = useState([]);
    useEffect(()=>{
        mainBoardSelect();
    },[])

    const mainBoardSelect = () => {
        axios.get(`${REQUEST_ORIGIN}/board/main`,{
            params : {
                type : "type"
            }
        })
        .then((res) => {
            setMainItems(res.data)
        })
        .catch((err) => {
            console.dir(err);
        })
    }
  return (
        <MainContent mainItems={mainItems}/>
  )
}

export default Main