import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { useContext } from "react";
import MovieList from "./movie-list";

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
          <MovieList />
        </TabPanel>
        <TabPanel>
          <MovieList bookmarkList={true} />
        </TabPanel>
        <TabPanel>
          <MovieList bookmarkList={true} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MovieTabs;
