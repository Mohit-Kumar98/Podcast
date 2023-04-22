import React, { createContext } from 'react';
import PodcastList from '../components/PodcastList';





function Home(props) {
  const podcasts = [
    { id: 1, title: 'Podcast 1', image: 'https://img.freepik.com/free-photo/bottle-with-flowers-flower-it_1340-27075.jpg?w=82&t=st=1682086159~exp=1682086759~hmac=9944df1bba748dfb5e06ccc63a0476e0a70cae92d848682696a08baf6965014f' },
    { id: 2, title: 'Podcast 2', image: 'https://img.freepik.com/free-photo/bottle-with-flowers-flower-it_1340-27075.jpg?w=82&t=st=1682086159~exp=1682086759~hmac=9944df1bba748dfb5e06ccc63a0476e0a70cae92d848682696a08baf6965014f' },
    { id: 3, title: 'Podcast 3', image: 'https://img.freepik.com/free-photo/bottle-with-flowers-flower-it_1340-27075.jpg?w=82&t=st=1682086159~exp=1682086759~hmac=9944df1bba748dfb5e06ccc63a0476e0a70cae92d848682696a08baf6965014f' },
  ];

  return (
    <div>
      <h1>Popular Podcasts</h1>
      <PodcastList podcasts={podcasts} />
    </div>
  );
}

export default Home;