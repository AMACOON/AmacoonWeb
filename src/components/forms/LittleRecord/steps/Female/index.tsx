import { Cat } from "../../../../../@types/cat";
import CatInfo from "../../../../CatInfo";

import FormGroup from "../../../../FormGrop";
import InputAutocomplete from "../../../../InputAutocomplete";

type FemaleProps = {
  female?: Cat;
  females: Cat[];
  handleChangeCat: (name: string, sex: "M" | "F") => void;
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
          suggestions={females.map((female) => female.Name)}
          onChange={(name) => handleChangeCat(name, "F")}
          error={getErrorMessageByFieldName("female")}
        />
      </FormGroup>

      {female && <CatInfo cat={female} />}
    </>
  );
}
