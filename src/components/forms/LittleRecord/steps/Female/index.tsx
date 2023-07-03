import { Cat } from "../../../../../@types/cat";
import CatInfo from "../../../../CatInfo";

import FormGroup from "../../../../FormGrop";
import InputAutocomplete from "../../../../InputAutocomplete";

type FemaleProps = {
  female?: Cat;
  females: Cat[];
  handleChangeCat: (name: string, gender: "male" | "female") => void;
  getErrorMessageByFieldName: (fieldName: string) => string;
};

export default function Female({
  female,
  females,
  handleChangeCat,
  getErrorMessageByFieldName,
}: FemaleProps) {
  return (
    <>
      <FormGroup error={getErrorMessageByFieldName("female")}>
        <InputAutocomplete
          placeholder="Pesquise por uma fêmea"
          suggestions={females.map((female) => female.catData.name)}
          onChange={(name) => handleChangeCat(name, "female")}
          error={getErrorMessageByFieldName("female")}
        />
      </FormGroup>

      {female && <CatInfo cat={female} />}
    </>
  );
}
