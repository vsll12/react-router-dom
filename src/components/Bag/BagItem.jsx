import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function BagItem(props) {
  let navigate = useNavigate();
  return (
    <ServicesLi>
      <ServicesName>{props.obj.servicesName}</ServicesName>
      <ServicesDescription color="red">
        {props.obj.servicesDescription}
      </ServicesDescription>
      <button
        onClick={() => {
          props.setId(props.obj.id);
          navigate("/service-page");
        }}
      >
        SHOW
      </button>
    </ServicesLi>
  );
}

export default BagItem;

const ServicesLi = styled.li`
  border: 2px solid black;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
  text-align: left;
`;

const ServicesName = styled.h3``;

const ServicesDescription = styled.p`
  color: ${(props) => props.color};
`;
