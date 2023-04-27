import { MovieContext } from "@/context/MovieContext";
import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import { useContext } from "react";
const AlertNotice = () => {
  const { alert } = useContext(MovieContext);

  if (!alert) {
    return null;
  }

  return (
    <Stack>
      <Alert status="error">
        <AlertIcon />
        This movie has already been bookmarked!
      </Alert>
    </Stack>
  );
};

export default AlertNotice;
