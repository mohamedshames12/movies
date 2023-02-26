import React from 'react'

const UpCard = ({item: {id, cover, name , tiem}}) => {
  return (
    <>
        <div className="MovieBox">
            <div className="img">
                <img src={cover} alt="" />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <span>{tiem}</span> <br />
                <button className='primary-btn'>
                    <i className="fa fa-play"></i> PLAY NOW
                </button>
            </div>
        </div>
    </>
  )
}

export default UpCard