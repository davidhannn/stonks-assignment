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

const MovieCard: React.FC<MovieType> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
}: MovieType) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={Poster}
          alt="Green double couch with wooden legs"
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
          <Button variant="solid" colorScheme="blue">
            Bookmark
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Watched
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
