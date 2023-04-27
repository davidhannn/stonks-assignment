import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { useContext } from "react";
import MovieList from "./movie-list";
import { STATUS } from "@/constants";

const MovieTabs: React.FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Search</Tab>
        <Tab>Bookmarks</Tab>
        <Tab>Watched</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <MovieList status={STATUS.NONE} />
        </TabPanel>
        <TabPanel>
          <MovieList status={STATUS.BOOKMARKED} />
        </TabPanel>
        <TabPanel>
          <MovieList status={STATUS.WATCHED} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MovieTabs;
