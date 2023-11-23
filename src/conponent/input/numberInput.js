import React, { useState } from "react";

const NumberInput = (props) => {

    // const [increasebtn, setIncreasebtn] = useState();
    const [decreasebtn, setDecreasebtn] = useState(false);

    const handleIncrease = (i) => {
        let constprice = 0;
        let notifycount = 0;

        const newdata = props.cartProducts.map((item, index) => {
            // 👇️ if id equals 2 replace object
            if (index === props.i) {
                return { id: item.id, title: item.title, amount: parseInt(item.amount) + 1 };
            }

            // 👇️ otherwise return the object as is
            return item;
        });

        localStorage.setItem("datakey", JSON.stringify(newdata))

        newdata.map((item) => {
            notifycount += parseInt(item.amount);
            constprice += parseInt(item.amount) * 2.5;
            props.setPrice(constprice)
        })
        localStorage.setItem("notify", notifycount);
        props.setCartProducts(newdata);
    }

    const handleDecrease = () => {
        let constprice = 0;
        let notifycount = 0;

        const newdata = props.cartProducts.map((item, index) => {
            // 👇️ if id equals 2 replace object
            if (index === props.i) {
                return { id: item.id, title: item.title, amount: parseInt(item.amount) - 1 };
            }

            // 👇️ otherwise return the object as is
            return item;
        });

        localStorage.setItem("datakey", JSON.stringify(newdata))

        newdata.map((item) => {
            notifycount += parseInt(item.amount);
            constprice += parseInt(item.amount) * 2.5;
            props.setPrice(constprice)
        })
        if (props.cartProducts[props.i].amount == 1) {
            setDecreasebtn(true);
        }
        localStorage.setItem("notify", notifycount);
        props.setCartProducts(newdata);
    }

    return (
        <div className="flex w-auto">
            {
                !decreasebtn ?
                    <button className="w-[25px] border border-primary-400 active:bg-primary-200" onClick={() => handleDecrease(props.amount)}><p className="text-center">-</p></button>
                    :
                    <button disabled className="w-[25px] border border-primary-400 active:bg-primary-200" onClick={() => handleDecrease(props.amount)}><p className="text-center">-</p></button>
            }
            <input type="number" min={0} className="cartInput w-[50px] p-1 text-sm border border-y-primary-400 text-center" value={props.cartProducts[props.i].amount} />
            <button className="w-[25px] border border-primary-400 active:bg-primary-200" onClick={() => handleIncrease(props.amount)}><p className="text-center">+</p></button>
        </div>
    );
}

export default NumberInput;