import { Avatar, Box, Typography } from "@mui/material";
import "./DesignersCard.scss";
import MySwiper from "../UI/MySwiper/MySwiper";
import MyButton from "../UI/MyButton/MyButton";

interface IProps {}

const DesignersCard: React.FC<IProps> = () => {
  return (
    <Box className="designersCard">
      <div className="designersCard__info">
        <div>
          <Avatar
            className="designersCard__avatar"
            src="https://avatars.dzeninfra.ru/get-zen_doc/5270289/pub_63775d7de0d51c65cdb7c0c4_637dd41e96aba95cd2b2e0df/scale_1200"
          />
          <Typography component="h2" className="designersCard__name">
            Елизавета Шарикоподшипникова
          </Typography>
          <Typography paragraph className="designersCard__job">
            Графический дизайнер
          </Typography>
          <Typography paragraph className="designersCard__country">
            Россия
          </Typography>
        </div>
        <div>
          <MyButton
            variant="outlined"
            label="Написать"
            onClick={() => {}}
          ></MyButton>
        </div>
      </div>
      <MySwiper key={"asdasd11"} />
      <MySwiper key={"asdasd123"} />
    </Box>
  );
};

export default DesignersCard;
