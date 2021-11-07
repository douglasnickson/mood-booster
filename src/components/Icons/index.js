import React from 'react';
import PropTypes from 'prop-types';

import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import spotify from '../../assets/spotify.png';
import disney from '../../assets/disney.png';
import primevideo from '../../assets/primevideo.png';
import netflix from '../../assets/netflix.png';
import hbo from '../../assets/hbo.png';
import google from '../../assets/google.png';
import deezer from '../../assets/deezer.png';
import youtube from '../../assets/youtube.png';

export default function Icons({ session }) {
  return (
    <>
      {(session === 'Filmes' || session === 'Tv Shows') && (
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <img
              src={netflix}
              alt="netflix"
              style={{
                width: '48px',
                height: '48px',
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <img
              src={primevideo}
              alt="prime video"
              style={{
                width: '48px',
                height: '48px',
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <img
              src={hbo}
              alt="hbo"
              style={{
                width: '48px',
                height: '48px',
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <img
              src={disney}
              alt="disney"
              style={{
                width: '48px',
                height: '48px',
              }}
            />
          </IconButton>
        </CardActions>
      )}
      {session === 'Músicas' && (
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <img
              src={spotify}
              alt="spotify"
              style={{
                width: '48px',
                height: '48px',
              }}
            />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <img
              src={deezer}
              alt="deezer"
              style={{
                width: '48px',
                height: '48px',
              }}
            />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <img
              src={youtube}
              alt="youtube"
              style={{
                width: '48px',
                height: '48px',
              }}
            />
          </IconButton>
        </CardActions>
      )}
      {session === 'Livros' && (
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <img
              src={google}
              alt="google"
              style={{
                width: '48px',
                height: '48px',
              }}
            />
          </IconButton>
        </CardActions>
      )}
    </>
  );
}

Icons.propTypes = {
  session: PropTypes.string,
};

Icons.defaultProps = {
  session: '',
};
