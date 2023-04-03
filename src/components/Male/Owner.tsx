import CatData from "../CatsData";
import Select from "../Select";

type OwnerProps = {
  cats: any[];
  selectedCat: any;
  handleSelectedCat: (catId: number) => void;
};

export default function Owner({
  cats,
  selectedCat,
  handleSelectedCat,
}: OwnerProps) {
  return (
    <>
      {cats.length > 0 ? (
        <Select
          options={cats.map((cat) => ({
            value: cat.CatID,
            label: cat.Name,
          }))}
          selectedOption={selectedCat}
          handleSelectedOption={() => handleSelectedCat(Number(selectedCat))}
        />
      ) : (
        <p>Nenhum macho cadastrado</p>
      )}

      {selectedCat && Object.keys(selectedCat).length > 0 && (
        <CatData cat={selectedCat} subtitle="Dados do Macho" />
      )}
    </>
  );
}
