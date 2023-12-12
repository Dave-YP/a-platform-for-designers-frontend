import { Avatar, Box, StyledEngineProvider, Typography } from "@mui/material";
import "./DesignersCard.scss";
import MyButton from "@/shared/UI/MyButton/MyButton";
import MySwiper from "@/shared/UI/MySwiper/MySwiper";
import { IUserWithLastCases } from "@/types";
import { useNavigate } from "react-router-dom";

interface IProps {
  user: IUserWithLastCases;
}

const DesignersCard: React.FC<IProps> = ({ user }) => {
  const navigate = useNavigate();

  function setSpecializations(): string[] {
    const name: string = "name";
    const arr = user.specialization?.map(
      (obj) => obj[name as keyof typeof obj]
    );
    if (arr) {
      return arr.filter((item) => item !== "Менторство");
    }
    return arr;
  }

  console.log(user.photo);

  return (
    <StyledEngineProvider injectFirst>
      <Box className="designersCard">
        <div className="designersCard__info">
          <div
            className="designersCard__infoData"
            onClick={() => {
              navigate(`/profile/${user.id}/`);
            }}
          >
            <Avatar
              className="designersCard__avatar"
              src={user.photo}
              sx={{ backgroundColor: "#4F378B", color: "#EADDFF" }}
            >{`${user?.first_name[0]}${user?.last_name[0]}`}</Avatar>
            <Typography component="h2" className="designersCard__name">
              {user.first_name} {user.last_name}
            </Typography>
            <Typography paragraph className="designersCard__job">
              {setSpecializations() && setSpecializations().join(", ")}
            </Typography>
            <Typography paragraph className="designersCard__country">
              {user?.country}
            </Typography>
          </div>
          <div>
            <MyButton variant="outlined" onClick={() => {}}>
              Написать
            </MyButton>
          </div>
        </div>
        {user.last_cases.map((item) => (
          <MySwiper key={item.id} item={item} />
        ))}
      </Box>
    </StyledEngineProvider>
  );
};

export default DesignersCard;
