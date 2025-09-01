import React, { Component, useRef, useEffect, useState } from "react";

function Polaroid({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`polaroid${visible ? " visible" : ""}`} ref={ref}>
      {children}
    </div>
  );
}

class Certificates extends Component {
  render() {
    let sectionName = "";
    let certificates = null;

    if (this.props.certificates && this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.certificates;
      certificates = this.props.certificates.map((certificate, i) => (
        <Polaroid key={i}>
          <img
            className="certificate-img"
            src={process.env.PUBLIC_URL + "/images/" + certificate.path}
            alt="award"
          />
        </Polaroid>
      ));
    }

    return (
      <section id="certificates">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto"></div>
          {certificates}
        </div>
      </section>
    );
  }
}

export default Certificates;
