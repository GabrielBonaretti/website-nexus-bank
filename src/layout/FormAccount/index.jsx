// Importing styled components for the FormAccount component
import { DivForm, Subtitle, SeparatorInput } from "../ContentProfile/style";

// Importing the InputProfile component
import InputProfile from "../../components/InputProfile";

// Importing React's useState and useEffect hooks
import { useState, useEffect } from "react";

// Importing Zustand hook for managing authentication state
import { useAuthStore } from "../../stores/authStore/authStore";

// Importing Axios for making API requests
import { api } from "../../services/api";

// Functional component for displaying account information in the user's profile form
const FormAccount = () => {
  // State variables for storing account data
  const [agency, setAgency] = useState("");
  const [balance, setBalance] = useState("");
  const [numberAccount, setNumberAccount] = useState("");

  // Zustand hook to access authentication information
  const auth = useAuthStore((state) => state.accessToken);

  // Fetching account data from the API on component mount
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

  // Rendering a styled div container for the account information form
  return (
    <DivForm>
      {/* Displaying a subtitle for the account information section */}
      <Subtitle>Profile account: </Subtitle>

      {/* Creating a styled separator div for input elements */}
      <SeparatorInput>
        {/* Displaying an InputProfile component for the Agency field */}
        <InputProfile text="Agency" enable={false} value={agency} />

        {/* Displaying an InputProfile component for the Number Account field */}
        <InputProfile
          text="Number Account"
          enable={false}
          value={numberAccount}
        />

        {/* Displaying an InputProfile component for the Balance field */}
        <InputProfile text="Balance" enable={false} value={`R$ ${balance}`} />
      </SeparatorInput>
    </DivForm>
  );
};

// Exporting the FormAccount component for use in other parts of the application
export default FormAccount;
