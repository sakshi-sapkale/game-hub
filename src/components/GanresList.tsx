import useGenres from "../hooks/useGenere";

export const GanresList = () => {
  const { error, data } = useGenres();
  return (
    <>
      {error && <span>Error fetching ganres</span>}

      <ul>
        {data.map((ganre) => (
          <li key={ganre.id}>{ganre.name}</li>
        ))}
      </ul>
    </>
  );
};
