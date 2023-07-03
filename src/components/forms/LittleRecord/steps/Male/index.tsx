import { Cat, ManualCat } from "../../../../../@types/cat";
import CatInfo from "../../../../CatInfo";

import FormGroup from "../../../../FormGrop";
import Input from "../../../../Input";
import InputAutocomplete from "../../../../InputAutocomplete";
import InputRadio from "../../../../InputRadio";
import Select from "../../../../Select";
import { Manual } from "./styles";

type MaleProps = {
  male?: Cat;
  manualMale?: ManualCat;
  males: Cat[];
  typeOwnerMale: string;
  handleChangeTypeOwnerMale: (type: string) => void;
  maleCatRegistration: string;
  handleCatByRegister: (register: string, gender: "male" | "female") => void;
  handleChangeCat: (name: string, gender: "male" | "female") => void;
  handleChangeManualCat: (key: string, value: string) => void;
  getErrorMessageByFieldName: (fieldName: string) => string;
};

export default function Male({
  male,
  manualMale,
  males,
  typeOwnerMale,
  handleChangeTypeOwnerMale,
  maleCatRegistration,
  handleCatByRegister,
  handleChangeCat,
  handleChangeManualCat,
  getErrorMessageByFieldName,
}: MaleProps) {
  return (
    <>
      <FormGroup>
        <InputRadio
          label="Escolha uma das opções abaixo:"
          options={[
            {
              label: "Sou proprietário",
              value: "owner",
            },
            {
              label: "Não sou proprietário - Buscar do clube",
              value: "not-owner",
            },
            {
              label: "Não sou proprietário - Preencher manualmente",
              value: "not-owner-manual",
            },
          ]}
          value={typeOwnerMale}
          onChange={handleChangeTypeOwnerMale}
        />
      </FormGroup>

      {typeOwnerMale === "owner" && (
        <FormGroup error={getErrorMessageByFieldName("male")}>
          <InputAutocomplete
            placeholder="Pesquise por um macho"
            suggestions={males.map((male) => male.catData.name)}
            onChange={(name) => handleChangeCat(name, "male")}
            error={getErrorMessageByFieldName("male")}
          />
        </FormGroup>
      )}

      {typeOwnerMale === "not-owner" && (
        <FormGroup error={getErrorMessageByFieldName("male")}>
          <Input
            placeholder="Número de registro do macho"
            type="text"
            onChange={(e) => handleCatByRegister(e.target.value, "male")}
            value={maleCatRegistration}
            error={!!getErrorMessageByFieldName("male")}
          />
        </FormGroup>
      )}

      {typeOwnerMale === "not-owner-manual" && (
        <Manual>
          <div>
            <p>Dados do gato</p>
            <FormGroup error={getErrorMessageByFieldName("manualMale.name")}>
              <Input
                placeholder="Nome"
                type="text"
                onChange={(e) => handleChangeManualCat("name", e.target.value)}
                value={manualMale?.name}
                error={!!getErrorMessageByFieldName("manualMale.name")}
              />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName("manualMale.chip")}>
              <Input
                placeholder="Chip"
                type="text"
                onChange={(e) => handleChangeManualCat("chip", e.target.value)}
                value={manualMale?.chip}
                error={!!getErrorMessageByFieldName("manualMale.chip")}
              />
            </FormGroup>

            <FormGroup>
              <Select
                placeholder="Raça"
                onChange={(e) => handleChangeManualCat("breed", e.target.value)}
                value={manualMale?.breed}
              >
                <option value="0">Selecione uma raça</option>
                <option value="1">Raça 1</option>
                <option value="2">Raça 2</option>
                <option value="3">Raça 3</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Select
                placeholder="Cor"
                onChange={(e) => handleChangeManualCat("color", e.target.value)}
                value={manualMale?.color}
              >
                <option value="0">Selecione uma cor</option>
                <option value="1">Cor 1</option>
                <option value="2">Cor 2</option>
                <option value="3">Cor 3</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Select
                placeholder="Ems"
                onChange={(e) => handleChangeManualCat("ems", e.target.value)}
                value={manualMale?.ems}
              >
                <option value="0">Selecione uma ems</option>
                <option value="1">Ems 1</option>
                <option value="2">Ems 2</option>
                <option value="3">Ems 3</option>
              </Select>
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName("manualMale.ffb")}>
              <Input
                placeholder="Registro FFB"
                type="text"
                onChange={(e) => handleChangeManualCat("ffb", e.target.value)}
                value={manualMale?.ffb}
                error={!!getErrorMessageByFieldName("manualMale.ffb")}
              />
            </FormGroup>
          </div>

          <div>
            <p>Dados do proprietário</p>

            <FormGroup
              error={getErrorMessageByFieldName("manualMale.ownerName")}
            >
              <Input
                placeholder="Nome"
                type="text"
                onChange={(e) =>
                  handleChangeManualCat("ownerName", e.target.value)
                }
                value={manualMale?.ownerName}
                error={!!getErrorMessageByFieldName("manualMale.ownerName")}
              />
            </FormGroup>

            <FormGroup
              error={getErrorMessageByFieldName("manualMale.ownerEmail")}
            >
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) =>
                  handleChangeManualCat("ownerEmail", e.target.value)
                }
                value={manualMale?.ownerEmail}
                error={!!getErrorMessageByFieldName("manualMale.ownerEmail")}
              />
            </FormGroup>

            <FormGroup
              error={getErrorMessageByFieldName("manualMale.ownerGatil")}
            >
              <Input
                placeholder="Gatil"
                type="text"
                onChange={(e) =>
                  handleChangeManualCat("ownerGatil", e.target.value)
                }
                value={manualMale?.ownerGatil}
                error={!!getErrorMessageByFieldName("manualMale.ownerGatil")}
              />
            </FormGroup>

            <FormGroup
              error={getErrorMessageByFieldName("manualMale.ownerCpf")}
            >
              <Input
                placeholder="CPF"
                type="text"
                onChange={(e) =>
                  handleChangeManualCat("ownerCpf", e.target.value)
                }
                value={manualMale?.ownerCpf}
                error={!!getErrorMessageByFieldName("manualMale.ownerCpf")}
              />
            </FormGroup>

            <FormGroup
              error={getErrorMessageByFieldName("manualMale.ownerPhone")}
            >
              <Input
                placeholder="Telefone"
                type="text"
                onChange={(e) =>
                  handleChangeManualCat("ownerPhone", e.target.value)
                }
                value={manualMale?.ownerPhone}
                error={!!getErrorMessageByFieldName("manualMale.ownerPhone")}
              />
            </FormGroup>
          </div>
        </Manual>
      )}

      {(typeOwnerMale === "owner" || typeOwnerMale === "not-owner") && male && (
        <CatInfo cat={male} />
      )}
    </>
  );
}
