import React, { useEffect } from 'react';

import './App.css';
import styles from "./App.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearStore, getPostsApi } from './store/actions';
import { removePost } from './store/slices';

import { stateSelector } from './store/selectors';

function App() {
  const dispatch = useDispatch();

  const state = useSelector(stateSelector);

  useEffect(() => {
    dispatch(getPostsApi({ limit: 10 }));
  }, []);

  


  return (
    <div className={styles.wrapper}>
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.postsLists}>
          {state.posts.length
            ? state.posts.map(item => (
                <div key={item.id} className={styles.postWrapper}>
                  {item.title}{' '}
                  <span
                    onClick={() => dispatch(removePost(item.id))}
                    className={styles.deleteButton}
                  >
                    <i className='bx bxs-trash'></i>
                  </span>
                </div>
              ))
            : 'No posts'}
        </div>
      )}

      <div className={styles.buttonsWrapper}>
        <button onClick={() => dispatch(getPostsApi({ limit: 1 }))}>
          Load 1 post
        </button>
        <button onClick={() => dispatch(getPostsApi({ limit: 5 }))}>
          Load 5 posts
        </button>
        <button onClick={() => dispatch(getPostsApi({ limit: 10 }))}>
          Load 10 posts
        </button>
        <button onClick={() => dispatch(clearStore())}>Clear all posts</button>
      </div>
    </div>
  );
}

export default App;
