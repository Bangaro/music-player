import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song, i) => {
          return (
            <LibrarySong
              key={i}
              id={song.id}
              song={song}
              setCurrentSong={setCurrentSong}
              songs={songs}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;