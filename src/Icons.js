import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChurch,
  faCoffee,
  faHome,
  faHospital,
  faRestroom,
  faSchool,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export default function Icons() {
  return (
    <>
      <FontAwesomeIcon className="icon" icon={faBuilding} size="2x" />
      <FontAwesomeIcon className="icon" icon={faHome} size="2x" />
      <FontAwesomeIcon className="icon" icon={faHospital} size="2x" />
      <FontAwesomeIcon className="icon" icon={faSchool} size="2x" />
      <FontAwesomeIcon className="icon" icon={faChurch} size="2x" />
      <FontAwesomeIcon className="icon" icon={faRestroom} size="2x" />
      <FontAwesomeIcon className="icon" icon={faUtensils} size="2x" />
      <FontAwesomeIcon className="icon" icon={faCoffee} size="2x" />
    </>
  );
}
