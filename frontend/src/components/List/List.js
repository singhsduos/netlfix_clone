import React, { useRef, useState } from 'react';
import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from '../ListItem/ListItem';
import "./SCSS/List.css";


const List = ({list}) => {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

    const listRef = useRef();

    const handleClick = (drxn) => {
        setIsMoved(true);
        // set of 10 list css
        let distance = (listRef.current.getBoundingClientRect().x)-50;
        if (drxn === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }

        if (drxn === "right" && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return (
        <div className='list'>
            <span className="listTitle">{list.title }</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    {list.content.map((item,index) => (
                        <ListItem key={index} index={index} item={item}/>
                    ))}
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};

export default List;
