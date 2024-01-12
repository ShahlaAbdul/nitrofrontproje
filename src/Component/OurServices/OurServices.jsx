import React, { useContext, useEffect, useState } from 'react';
import "./ourServices.scss"
import { SearchContext } from '../../UseContext/searchContext';

function OurServices() {
    const [fetchData, setFetchData] = useState([])
    const { searchData, searchbyFilter } = useContext(SearchContext)
    const [sortedProperty, setSortedProperty] = useState(null)
    useEffect(() => {
        getAllData()
    }, [])

    function getAllData() {
        fetch("http://localhost:3500/")
            .then((res) => res.json())
            .then((data) => setFetchData(data))
    }

    return (
        <section id='our_services'>

            <div className="our_services">
                <div className="our_services_head">
                    <p>Our Services</p>
                </div>
                <div className="searchByFilter">
                    <input type="text" placeholder='search' onChange={(e) => searchbyFilter(e)} />
                    <div className='priceSort'>
                        <p onClick={() => setSortedProperty({ property: 'name',asc: true })}>A-z</p>
                        <p onClick={() => setSortedProperty({ property: 'name',asc: false })}>Z-a</p>
                        <p onClick={() => setSortedProperty(null)}>Default</p>
                    </div>
                </div>
                <div className="our_services_cards">
                    {fetchData
                        .filter((x) => x.name.toLowerCase().includes(searchData.toLowerCase()))
                        .sort((a, b) => {
                            if (sortedProperty&& sortedProperty.asc) {
                                return (a[sortedProperty.property] > b[sortedProperty.property] ? 1 : (b[sortedProperty.property] > a[sortedProperty.property] ? -1 : 0))
                            } else if (sortedProperty && sortedProperty.asc===false) {
                                return (a[sortedProperty.property] < b[sortedProperty.property] ? 1 : ((b[sortedProperty.property] < a[sortedProperty.property] ? -1 : 0)))
                            }else{
                                return 0
                            }
                        })
                        
                
                        .map((x) => (
                            <div className='our_services_card'>
                                <ul key={x._id}>
                                    <div className='image'> <li className={x.image}></li></div>
                                    <li>{x.name}</li>
                                    <li>{x.description}</li>
                                    <li className='learn_more'>Learn More</li>
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default OurServices