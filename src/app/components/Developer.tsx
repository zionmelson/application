import { FaEdit, FaTrash } from "react-icons/fa";

export default function Developer(props: any) {
  return (
    <div className="developer">
      <div className="vertical-content">
        <div className="horizontal-content" style={{ width: "100%" }}>
          <div className="vertical-content">
            <div
              className="vertical-content"
              style={{
                border: "1px solid red",
                padding: "1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div className="vertical-content" style={{ alignItems: "start" }}>
                <h1 className="h1-sub">Developer {props.dev.number}</h1>
                <h3 className="h3">from learnmutiny</h3>
              </div>
              <div
                className="vertical-content"
                style={{ border: "1px solid red" }}
              >
                <h3 className="h3">{props.dev.location}</h3>
                <h3 className="h3">{props.dev.workType}</h3>
                <h3 className="h3">{props.dev.employmentType}</h3>
              </div>
            </div>
            <div className="vertical-content"></div>
          </div>
          <div className="vertical-content">
            <h1>Hello</h1>
          </div>
        </div>
        {/* <h1>{props.dev.number}</h1>
      <h1>{props.dev.location}</h1>
      <h1>{props.dev.workType}</h1>
      <h1>{props.dev.employmentType}</h1>
      <h1>{props.dev.salary}</h1>
      <h1>{props.dev.equity}</h1> */}
        {/* {props.dev.skills.map((skill: any, index: any) => {
        return (
          <div key={index}>
            <h1>{skill}</h1>
          </div>
        );
      })}
      {props.dev.experiences.map((experience: any, index: any) => {
        return (
          <div key={index}>
            <h1>{experience.role}</h1>
            <h1> {experience.duration}</h1>
            <h1> {experience.description}</h1>
          </div>
        );
      })} */}
        <div className="edit">
          <FaEdit className="edit-icon" id="edit" />
          <FaTrash className="edit-icon" id="trash" />
        </div>
      </div>
    </div>
  );
}
