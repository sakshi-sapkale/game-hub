import useGenres, { Ganres } from "../hooks/useGenere";

interface Props {
  ganres: Ganres[];
}
export const GanresList = ({ ganres }: Props) => {
  const { error } = useGenres();
  return (
    <>
      {error && <span>Error fetching ganres</span>}

      <ul>
        {ganres.map((ganre) => (
          <li key={ganre.id}>{ganre.name}</li>
        ))}
      </ul>
    </>
  );
};
