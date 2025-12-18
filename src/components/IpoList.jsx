import React from 'react'
import "../styles/IpoList.css"
import { ipoData } from '../data/ipoData'
import { useNavigate } from 'react-router-dom'

const IpoList = () => {

  const navigate = useNavigate();

  return (
    <div className='ipo-container'>
        <div className='ipo-header'>
            <span>Company / Issue date</span>
            <span>Issue Size</span>
            <span>Price range</span>
            <span>Min Invest/qty</span>
        </div>
        {ipoData.map((ipo) => (
            <div className='ipo-row' key={ipo.id} onClick={()=>navigate(`/ipo/${ipo.id}`)}>
                <div className='ipo-company'>
                    <img src={ipo.logo} alt={ipo.name} />
                    <div>
                        <p className='ipo-company-name'>{ipo.name}</p>
                        <p className='ipo-company-date'>{ipo.issueDate}</p>
                    </div>
                </div>
                <div className='ipo-cell bold'>&#8377;{ipo.issueSize}</div>
                <div className='ipo-cell bold'>&#8377;{ipo.priceRange}</div>

                <div className='ipo-cell'>
                    <p className='bold'>&#8377;{ipo.minInvestment}</p>
                    <p className='text'>&#8377;{ipo.quantity}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default IpoList