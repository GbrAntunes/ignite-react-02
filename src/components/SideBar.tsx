import { Button } from './Button';

import { GenreResponseProps } from '../interfaces/GenreResponseProps'

interface SideBarProps{
  setSelectedGenreId: (id: number) => void
  selectedGenreId: number
  genres: GenreResponseProps[]
}

export function SideBar({ setSelectedGenreId, selectedGenreId, genres }: SideBarProps) {
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}