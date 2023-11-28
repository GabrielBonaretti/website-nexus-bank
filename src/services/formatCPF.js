// Function to format CPF (Brazilian Tax ID) with dots and hyphen
export const formatCPF = (inputElement) => {
  // Removing existing dots and hyphen
  const cleanedValue = inputElement
    .replace(".", "")
    .replace(".", "")
    .replace("-", "");

  // Format the CPF with dots and hyphen
  let formattedCPF = "";
  for (let i = 0; i < cleanedValue.length; i++) {
    if (i === 3) {
      formattedCPF += ".";
    } else if (i === 6) {
      formattedCPF += ".";
    } else if (i === 9) {
      formattedCPF += "-";
    }
    formattedCPF += cleanedValue.charAt(i);
  }

  return formattedCPF;
};
