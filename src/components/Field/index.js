import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, onChange  }) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          id= {name}
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          data-testid="field-testid"
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = <textarea name={name} onChange={onChange} data-testid="field-testid" />;
      break;
    default:
      component = (
        // add id name to match label
        <input
          id= {name}
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          data-testid="field-testid"
        />
      );
  }
  return (
    // use label to remplace the span
    <div className="inputField">
      <label htmlFor={name}>{label}</label>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
 Field.defaultProps = {
   label: "",
   placeholder: "",
   type: FIELD_TYPES.INPUT_TEXT,
   name: "field-name",
   onChange: () => {},
 }

export default Field;
