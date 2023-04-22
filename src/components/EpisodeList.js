import React from 'react';
import EpisodeItem from '../components/EpisodeItem';

function EpisodeList(props) {
  const { episodes, onEpisodeClick } = props;

  return (
    <div className="episode-list">
      {episodes.map((episode) => (
        <EpisodeItem key={episode.id} episode={episode} onEpisodeClick={onEpisodeClick} />
      ))}
    </div>
  );
}

export default EpisodeList;
