import React from "react";
import { useNavigate, useParams } from "react-router";
import { COUNTRY_ROW_ROUTE } from "../../constant/routes";

const CardComponent = ({ info }) => {
  // const data = useSelector((state) => state.countriesList);
  // const dispatch = useDispatch()
  // console.log(dispatch);
  const navigate = useNavigate();
  const params = useParams()
  console.log(params.cca3);
  
  
  return (
    <div className="flex flex-row justify-between items-center gap-4 border-2 p-4">
      <img src={info.flags.png} alt={info.name.common} className="w-[100px] h-[60px]" />
      <h1
        className="text-blue-400 hover:underline cursor-pointer"
        onClick={(e) => navigate(`${COUNTRY_ROW_ROUTE}/${info.cca3}`)}>
        {info.name.common}
      </h1>
    </div>
  );
};

export default CardComponent;
