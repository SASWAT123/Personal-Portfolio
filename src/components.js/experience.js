import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="timeline">
      <VerticalTimeline className="verticalTimeline">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="JULY 2018 - PRESENT"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<i className="fa fa-laptop"></i>}
        >
          <h4 className="vertical-timeline-element-title">SOFTWARE ENGINEER</h4>
          <h5 className="vertical-timeline-element-subtitle">Verizon, India</h5>
          <p>
            Developing highly scalable, efficient and robust applications that
            can handle millions of users simultaneously.
          </p>
          <p>
            1. Designing and implementing the engineering architecture for
            enable 5G connectivity across the USA.
          </p>
          <p>
            2. Solved the discrepancies between physical and logical layer
            mapping for network equipments.
          </p>
          <p>
            3. Initiated a shift towards Material Design in the User interface
            for the internal projects.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="JANUARY 2018 - MAY 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<i className="fa fa-laptop"></i>}
        >
          <h4 className="vertical-timeline-element-title">
            SYSTEMS ENGINEER TRAINEE
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Mysuru, Karnataka
          </h5>
          <p>
            Developed automated educator allotment system to automate the
            educator allotment process which was done manually earlier.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="JULY 2014 - MAY 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<i className="fa fa-graduation-cap" aria-hidden="true"></i>}
        >
          <h4 className="vertical-timeline-element-title">
            SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Chennai, Tamil Nadu
          </h5>
          <p>Bachelor of Technology - Information Technology</p>
          <p>CGPA - 9.261</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
