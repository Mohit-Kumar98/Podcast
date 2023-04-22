import React from 'react';

function EpisodeItem(props) {
  const { episode, onEpisodeClick } = props;

  const handleClick = () => {
    onEpisodeClick(episode.id);
  }

  return (
    <div className="episode-item" onClick={handleClick}>
      <img src={episode.image} alt={episode.title} />
      <div className="episode-details">
        <h3>{episode.title}</h3>
        <p>{episode.description}</p>
      </div>
    </div>
  );
}

export default EpisodeItem;




