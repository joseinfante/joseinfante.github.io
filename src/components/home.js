import React from "react";
import FadeInSection from "../components/FadeInSection";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          expanded: true,
          activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
      }
      handleSelect(eventKey) {
        this.setState({
          activeKey: eventKey
        });
      }

      render() {
        return (
            <FadeInSection>
            <h1 id="home">JOSE A. INFANTE</h1>
            </FadeInSection>
        );
    }
}
export default Home;