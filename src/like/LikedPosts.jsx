import { useState, useEffect } from 'react';
import './LikedPosts.css';

function LikedPosts() {
  // Separate states for liked and scrapped posts
  const [likedPosts, setLikedPosts] = useState([]);
  const [scrapPosts, setScrapPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [view, setView] = useState('likes'); // 'likes' or 'scrap'

  useEffect(() => {
    if (view === 'likes' && likedPosts.length === 0) {
      fetchMorePosts('likes', 1); // Load the first page for likes if not already loaded
    } else if (view === 'scrap' && scrapPosts.length === 0) {
      fetchMorePosts('scrap', 1); // Load the first page for scrap if not already loaded
    }
  }, [view]);

  const fetchMorePosts = (viewType, pageNumber) => {
    // Simulate fetching posts from an API
    const fetchedPosts = viewType === 'likes'
      ? [
          { id: pageNumber * 3 + 1, likes: 123, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'like' },
          { id: pageNumber * 3 + 2, likes: 98, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'like' },
          { id: pageNumber * 3 + 3, likes: 75, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'like' },
        ]
      : [
          { id: pageNumber * 3 + 1, likes: 45, content: 'Scrapped post 1.', type: 'scrap' },
          { id: pageNumber * 3 + 2, likes: 23, content: 'Scrapped post 2.', type: 'scrap' },
          { id: pageNumber * 3 + 3, likes: 12, content: 'Scrapped post 3.', type: 'scrap' },
        ];

    if (viewType === 'likes') {
      setLikedPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
    } else {
      setScrapPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
    }
  };

  const handleViewChange = (newView) => {
    setView(newView);
    setPage(1); // Reset page number when switching views
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchMorePosts(view, page);
    }
  }, [page]);

  const postsToDisplay = view === 'likes' ? likedPosts : scrapPosts;

  return (
    <div className="liked-posts-container">
      <div className="icons">
        <button className={`icon ${view === 'likes' ? 'active' : ''}`} onClick={() => handleViewChange('likes')}>
          <span role="img" aria-label="like">💖</span> 좋아요
        </button>
        <button className={`icon ${view === 'scrap' ? 'active' : ''}`} onClick={() => handleViewChange('scrap')}>
          <span role="img" aria-label="scrap">🔖</span> 스크랩
        </button>
      </div>
      <div className="posts">
        {postsToDisplay.map(post => (
          <div key={post.id} className="post">
            <div className="post-image-placeholder">
              <img src="https://via.placeholder.com/100x100" alt="placeholder" />
            </div>
            <div className="post-content">
              <div className="post-likes">
                {post.likes} <span role="img" aria-label="like">💖</span>
              </div>
              <div className="post-text">
                <p>{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedPosts;


