// import React, { useState, useEffect } from 'react';
// import { PostCard } from '../PostCard/PostCard.jsx';
// import { Data } from '../../../Data.js';

// export function SmallCardList() {
//     const [smallCards, setSmallCards] = useState([]);

//     useEffect(() => {
//         const filteredCards = Data.filter(card => card.type === 'sm');
//         setSmallCards(filteredCards);
//     }, []);

//     return (
//         <ul className={`list-group`}>
//             {smallCards.map((card) => (
//                 <li key={card.id} className="list-group-item p-2 d-flex align-items-start">
//                     <PostCard
//                         id={card.id}
//                         type={card.type}
//                         title={card.title}
//                         description={card.description}
//                         img={card.img}
//                     />
//                 </li>
//             ))}
//         </ul>
//     );
// }