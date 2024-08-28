// import PropTypes from 'prop-types';
// import './scrapDetail.css';

// function ScrapDetail({ posts = [] }) { // 기본값으로 빈 배열 설정
//   return (
//     <div className="scrapped-posts-container">
//       <h2>Scrapped Posts</h2>
//       <div className="scrapped-posts-list">
//         {posts.length > 0 ? (
//           posts.map((post, index) => (
//             <div key={index} className="scrapped-post">
//               <img src={post.imageUrl} alt={post.title} className="scrapped-post-image" />
//               <div className="scrapped-post-content">
//                 <div className="scrapped-post-title">{post.title}</div>
//                 <div className="scrapped-post-likes">
//                   {post.likes} 💖
//                 </div>
//                 <div className="scrapped-post-description">
//                   {post.content}
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No posts available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// // Add PropTypes validation
// ScrapDetail.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       likes: PropTypes.number.isRequired,
//       content: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//     })
//   )
// };

// export default ScrapDetail;
