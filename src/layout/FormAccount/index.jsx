// styled components
import { DivForm, Subtitle, SeparatorInput } from "../ContentProfile/style";

// components
import InputProfile from "../../components/InputProfile";

// react
import { useState, useEffect } from "react";

// zustend
import { useAuthStore } from "../../stores/authStore/authStore";

// axios
import { api } from "../../services/api";

const FormAccount = () => {
  // content account data
  const [agency, setAgency] = useState("");
  const [balance, setBalance] = useState("");
  const [numberAccount, setNumberAccount] = useState("");

  const auth = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (auth) {
      const header = {
        Authorization: "Bearer " + auth,
      };

      api
        .get("/api/account/me/", { headers: header })
        .then((response) => {
          setAgency(response.data.agency);
          setBalance(response.data.balance);
          setNumberAccount(response.data.number_account);
        })
        .catch((error) => console.log(error));
    }
  }, [auth]);

  return (
    <DivForm>
      <Subtitle>Profile account: </Subtitle>

      <SeparatorInput>
        <InputProfile text="Agency" enable={false} value={agency} />
        <InputProfile
          text="Number Account"
          enable={false}
          value={numberAccount}
        />
        <InputProfile text="Balance" enable={false} value={`R$ ${balance}`} />
      </SeparatorInput>
    </DivForm>
  );
};

export default FormAccount;
