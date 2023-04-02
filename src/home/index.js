import Forms from "./forms/Forms";
import Cards from "./cards/Cards";
import img from "../assest/test.jpg"
import prof from "../assest/imgProf.jpg"
import {useEffect, useState} from "react";

const Home = ()=>{
    // const input = "123456";
    // const isNumber = .test(input);
    // console.log(isNumber);
    const [cardInfo , setCardInfo] = useState({
        name:"",
        detail:{
            numberCard:"",
            cvc:"",
            Expiration : {
                year:"",
                month:""
            }
        }
    })
    function setNumberCartView() {
        if (cardInfo.detail.numberCard.length> 16){
            return;
        }else {
            if (/^\d+$/.test(cardInfo.detail.numberCard) || cardInfo.detail.numberCard === ""){
                let data = cardInfo.detail.numberCard.padEnd(16, '0')
                return data.match(/.{1,4}/g).join(' ')
            }

        }
    }

    useEffect(()=>{
        setNumberCartView()
    })

    const getInputsData = (e, name)=>{
        console.log(name)
        console.log(e.target.value)

        switch (name) {
            case 'name':
                if (e.target.value.length <= 25){
                    setCardInfo({...cardInfo , name:e.target.value})
                }
                break;
            case 'number':
                if (/^\d+$/.test(e.target.value === "" ? 0 :e.target.value) && e.target.value.length <= 16){
                    setCardInfo({...cardInfo, detail: {...cardInfo.detail, numberCard: e.target.value}})
                }
                break;
            case 'year':
                if (/^\d+$/.test(e.target.value === "" ? "0" :e.target.value) && e.target.value.length <= 4){
                    setCardInfo({...cardInfo, detail: {...cardInfo.detail , Expiration:{...cardInfo.detail.Expiration , year:e.target.value }}})
                }
                break;
            case 'month':
                if (/^\d+$/.test(e.target.value === "" ? "0" :e.target.value) && e.target.value.length <= 2){
                    setCardInfo({...cardInfo, detail: {...cardInfo.detail , Expiration:{...cardInfo.detail.Expiration , month:e.target.value }}})
                }
                break;
            case 'cvc':
                if (/^\d+$/.test(e.target.value === "" ? "0" :e.target.value) && e.target.value.length <= 3){
                    setCardInfo({...cardInfo, detail: {...cardInfo.detail, cvc: e.target.value}})
                }

                break;
            default:
        }
    }

    return (
        <div className="container min-h-screen bg-pink-100 bg-no-repeat bg-[length:48%_100%] " style={{backgroundImage:`url(${img})`}}>
            <div className="flex flex-col md:flex-row md:justify-between items-center h-full">
                <div className="flex w-[100%] flex-col md:h-full md:w-[48%]  mt-32  md:mt-0 justify-center items-center ">
                        <div className=" w-[70%] md:w-auto  max-w-md  min-w-[390px]  md:mr-[10%] mb-10 rounded-md p-5" style={{background: "linear-gradient(to bottom, #cd57fc, #50a0ff)"}}>
                            <div className="flex row items-center ">
                                <div className="w-[50px] h-[50px] rounded-[50%] bg-white overflow-hidden"><img src={prof} className="w-full h-full object-cover" alt=""/></div>
                                <div className="w-[30px] h-[30px] rounded-[50%] border-2 border-white ml-2"/>
                            </div>
                            <div className="flex flex-col mt-5 gap-5">
                                <span className="italic text-base w-[90%] truncate font-bold ">{cardInfo.name !== "" ? cardInfo.name : "Name . . ."}</span>
                                <span className="italic text-4xl tabular-nums text-center">{setNumberCartView()}</span>
                                <div className="w-full flex justify-between">
                                    <span>Expiration</span>
                                    <span>{cardInfo.detail.Expiration.year !== "" ?  cardInfo.detail.Expiration.year : "y"} / {cardInfo.detail.Expiration.month !== "" ?  cardInfo.detail.Expiration.month : "m"}</span>
                                </div>
                            </div>

                        </div>
                        <div className=" w-[70%]  md:w-auto  max-w-md  min-w-[390px]  min-h-[230px] bg-fuchsia-600 md:ml-[10%] rounded-md relative " style={{background: "linear-gradient(to bottom, #4e4e4e, #c4c4c4)"}}>
                            <span className="absolute top-[100px] right-[50px]">{cardInfo.detail.cvc !== "" ? cardInfo.detail.cvc : "Cvc . . ."}</span>
                        </div>
                </div>
                <div className="flex w-[100%] flex-col md:h-full md:w-[48%] mt-20 md:mt-0 justify-center items-center ">
                    <form className="w-[90%]">
                        <label className="relative flex flex-col gap-9">
                            <input
                                className="custom-Input"
                                onChange={(e) => getInputsData(e, "name")}
                                value={cardInfo.name}
                                placeholder="Name . . ." type="text" name="Name"/>
                            <input
                                className="custom-Input"
                                onChange={(e) => getInputsData(e, "number")}
                                value={cardInfo.detail.numberCard}
                                placeholder="NumberCard . . . " type="text" name="numberCard"/>

                            <div className="w-full flex justify-between">
                                <div className="flex gap-1 justify-between mr-4">
                                    <input
                                        className="custom-Input"
                                        onChange={(e) => getInputsData(e, "year")}
                                        value={cardInfo.detail.Expiration.year}
                                        placeholder="year" type="text" name="year"/>
                                    <input
                                        className="custom-Input"
                                        onChange={(e) => getInputsData(e, "month")}
                                        value={cardInfo.detail.Expiration.month}
                                        placeholder="month" type="text" name="month"/>
                                </div>
                                <input
                                    className="custom-Input mr-2"
                                    onChange={(e) => getInputsData(e, "cvc")}
                                    value={cardInfo.detail.cvc}
                                    placeholder="cvc" type="text" name="cvc"/>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;