import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/IpoDetails.css";
import { ipoData } from '../data/ipoData';

const IpoDetails = () => {
  const { id } = useParams();

  const ipo = ipoData.find(item => item.id === Number(id));

  if (!ipo) <p>IPO not found</p>;

  return (
    <div className='ipo-details-container'>

      <div className='ipo-top'>
        <div className='ipo-title'>
          <img src={ipo.logo} alt='logo' />
          <div>
            <h2>{ipo.name}</h2>
            <p>{ipo.name} Private Limited</p>
          </div>
        </div>
        <button className='apply-btn'>Apply now</button>
      </div>

      <div className='card'>
        <h3>IPO Details</h3>

        <div className='details-grid'>
          <div className="detail">
            <p className='label'>Issue size</p>
            <p className='value'>&#8377;{ipo.issueSize}</p>
          </div>

          <div className="detail">
            <p className='label'>Price range</p>
            <p className='value'>&#8377;{ipo.priceRange}</p>
          </div>

          <div className="detail">
            <p className='label'>Issue size</p>
            <p className='value'>&#8377;{ipo.minInvestment}</p>
          </div>

          <div className='detail'>
            <p className='label'>Lot size</p>
            <p className='value'>{ipo.quantity}</p>
          </div>

          <div className="detail">
            <p className='label'>Issue dates</p>
            <p className='value'>{ipo.issueDate}</p>
          </div>

          <div className="detail">
            <p className='label'>Listed on</p>
            <p className='value'>{ipo.listedOn}</p>
          </div>

          <div className="detail">
            <p className='label'>Listed Price</p>
            <p className='value'>{ipo.listedPrice}</p>
          </div>

          <div className="detail">
            <p className='label'>Listing gains</p>
            <p className='value'>&#8377;10 (<span className='danger'>{(ipo.listingGains)}</span>)</p>
          </div>
        </div>
      </div>

      <div className='card'>
        <h3>IPO timeline</h3>
        <div className="timeline">
          {ipo.timeline.map((step, index) => (
            <div className="timeline-step" key={index}>
              <div className="circle">&#x2713;</div>
              <div className='timeline-text'>
                <p className='step-title'>{step.title}</p>
                <p className='step-date'>{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>About the company</h3>
        <p className='about-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nulla incidunt aut, aspernatur placeat sit quo voluptates? Deleniti a, corrupti dolorum necessitatibus quam repellat blanditiis dolorem veritatis magni hic quibusdam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam odit, impedit placeat voluptatem eligendi, debitis cupiditate sit vero quisquam delectus adipisci. Alias earum dolorum illo nemo placeat non saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum ipsa voluptates, sapiente iste maiores reprehenderit nulla, ad architecto quae, nesciunt cupiditate officia dignissimos iure optio mollitia in perferendis. Eius!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla harum amet dolores commodi iste ea culpa non quae quaerat cumque qui quibusdam dignissimos aliquid tempore, ad cum quis autem facilis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis accusantium voluptatem expedita est recusandae natus aspernatur illo ea culpa, a aliquid, sunt harum, iste possimus. Sint impedit culpa rem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit vero porro nisi quibusdam quos laboriosam, nam non maxime iste fugiat, placeat, quidem labore aut vitae recusandae enim totam debitis.
        </p>
      </div>

    </div>
  );
};

export default IpoDetails;
