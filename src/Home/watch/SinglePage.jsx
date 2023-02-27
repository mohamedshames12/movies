import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData, recommended} from '../../DummyData'
import Upcomming from '../../components/Upcomming/Upcomming'
import './style.css'
const SinglePage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null);

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id))
        if(item) {
            setItem(item);
        }
    },[id])
    const [rec, setRec] = useState(recommended);
  return (
    <>
        {item ? (
            <>
                <section className='singlePage'>
                    <div className="singleHeading">
                        <h1>{item.name}</h1>
                        <span> | {item.time} |</span> <span>HD</span>
                    </div>
                    <div className="container">
                        <video src={item.video} controls></video>
                        <h3>Date: {item.date}</h3>
                        <p>{item.desc}</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus a obcaecati quae nisi laboriosam, amet praesentium libero. Facilis unde dolores, et sit officia nihil repellendus eum est quaerat dolorum sint corrupti. Id rem earum dolore optio praesentium eligendi adipisci iusto.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus a obcaecati quae nisi laboriosam, amet praesentium libero. Facilis unde dolores, et sit officia nihil repellendus eum est quaerat dolorum sint corrupti. Id rem earum dolore optio praesentium eligendi adipisci iusto.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus a obcaecati quae nisi laboriosam, amet praesentium libero. Facilis unde dolores, et sit officia nihil repellendus eum est quaerat dolorum sint corrupti. Id rem earum dolore optio praesentium eligendi adipisci iusto.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus a obcaecati quae nisi laboriosam, amet praesentium libero. Facilis unde dolores, et sit officia nihil repellendus eum est quaerat dolorum sint corrupti. Id rem earum dolore optio praesentium eligendi adipisci iusto.</p>
                    </div>
                    <div className="socail">
                        <h3>Share : </h3>
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" />
                        <img src="https://img.icons8.com/color/48/000000/twitter-circled.png" alt="" />
                        <img src="https://img.icons8.com/color/48/000000/linkedin-circled.png" alt="" />
                    </div>
                </section>
                <Upcomming  items={rec} title="Recommended Movies"/>
            </>
        ) : null}
    </>
  )
}

export default SinglePage