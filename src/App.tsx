import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useActions from './hooks/useActions';
import useTypedSelector from './hooks/useTypedSelector';
import styles from "./App.module.scss";

function App() {
  const actions = useActions();

  const state = useTypedSelector(state => state);

  useEffect(() => {
    actions.getPostsApi({ limit: 10 });
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
                    onClick={() => actions.removePost(item.id)}
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
        <button onClick={() => actions.getPostsApi({ limit: 1 })}>
          Load 1 post
        </button>
        <button onClick={() => actions.getPostsApi({ limit: 5 })}>
          Load 5 posts
        </button>
        <button onClick={() => actions.getPostsApi({ limit: 10 })}>
          Load 10 posts
        </button>
        <button onClick={() => actions.clearStore()}>Clear all posts</button>
      </div>
    </div>
  );
}

export default App;
