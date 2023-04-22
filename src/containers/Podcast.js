import React from 'react';
import EpisodeList from '../components/EpisodeList';
import EpisodePlayer from '../components/EpisodePlayer';

function Podcast(props) {
  const podcast = { id: 1, title: 'Podcast 1', image: 'https://img.freepik.com/free-photo/bottle-with-flowers-flower-it_1340-27075.jpg?w=826&t=st=1682086159~exp=1682086759~hmac=9944df1bba748dfb5e06ccc63a0476e0a70cae92d848682696a08baf6965014f' };
  const episodes = [
    { id: 1, title: 'Episode 1', audio: 'https://example.com/episode1.mp3' },
    { id: 2, title: 'Episode 2', audio: 'https://example.com/episode2.mp3' },
    { id: 3, title: 'Episode 3', audio: 'https://example.com/episode3.mp3' },
  ];

  return (
    <div>
      <h1>{podcast.title}</h1>
      <img src={podcast.image} alt={podcast.title} />
      <EpisodeList episodes={episodes} />
      <EpisodePlayer episode={episodes[0]} />
    </div>
  );
}

export default Podcast;