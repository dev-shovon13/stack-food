import * as Muicon from "@mui/icons-material";

const GenerateIcon = (variation, props = {}) => {
  const IconName = Muicon[variation];
  return <IconName {...props} />;
};

export { GenerateIcon };
