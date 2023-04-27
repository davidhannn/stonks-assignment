import { STATUS } from "@/constants";
import { MovieContext } from "@/context/MovieContext";
import { MovieType } from "@/types";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";

const MovieCard: React.FC<MovieType> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
  status = STATUS.NONE,
}: MovieType) => {
  const { handleBookmark, handleWatched, removeBookmark } =
    useContext(MovieContext);
  return (
    <Card maxW="sm" maxH="sm">
      <CardBody>
        <Image
          src={Poster}
          objectFit="contain"
          maxH="100px"
          maxW="sm"
          alt={Title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{Title}</Heading>
          <Text>Year: {Year}</Text>
          {/* <Text color="blue.600" fontSize="2xl">
            $450
          </Text> */}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => {
              if (status === STATUS.NONE) {
                handleBookmark({ Title, Year, imdbID, Type, Poster });
              } else if (status === STATUS.BOOKMARKED) {
                removeBookmark(imdbID);
              }
            }}
          >
            {status === STATUS.NONE ? "Bookmark" : "Remove"}
          </Button>
          {status === STATUS.BOOKMARKED && (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() =>
                handleWatched({ Title, Year, imdbID, Type, Poster })
              }
            >
              Watched
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
