import TabPanel from '../../features/ui/tab-panel';

export const getTabPanels = ({ ingredients, healthLabels, digest, value }) => {
  return (
    <>
      <TabPanel items={ingredients} index={0} value={value} />
      <TabPanel items={digest} index={1} value={value} />
      <TabPanel items={healthLabels} index={2} value={value} />
    </>
  );
};
