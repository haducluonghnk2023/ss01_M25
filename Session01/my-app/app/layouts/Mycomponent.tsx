import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAppleAlt, faEye } from "@fortawesome/free-solid-svg-icons";

function MyComponent() {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faAppleAlt} />
      <FontAwesomeIcon icon={faEye} />
    </div>
  );
}

export default MyComponent;
