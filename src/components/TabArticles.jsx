import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

const articleDummy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. \nConsequuntur similique, beatae ab nihil nobis sed eaque deleniti esse unde eveniet veniam omnis quam ipsam pariatur debitis voluptas nisi voluptate facere!
`;

function TabArticles() {
  return (
    <Tabs isFitted variant={'enclosed-colored'}>
      <TabPanels>
        <TabPanel>1.{articleDummy}</TabPanel>
        <TabPanel>2.{articleDummy}</TabPanel>
        <TabPanel>3.{articleDummy}</TabPanel>
      </TabPanels>
      <TabList pos={"fixed"} bottom={0} w={"full"}>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
    </Tabs>
  );
}

export default TabArticles;
