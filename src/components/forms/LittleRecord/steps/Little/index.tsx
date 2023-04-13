import { Cat } from "../../../../../@types/cat";

import FormGroup from "../../../../FormGrop";
import Input from "../../../../Input";

type LittleProps = {
  female?: Cat;
};

export default function Little({ female }: LittleProps) {
  return (
    <>
      <FormGroup>
        <Input type="text" value={female?.BreederName} disabled />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Data de Nascimento" type="date" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Quantidade de Filhotes" type="number" />
      </FormGroup>
    </>
  );
}
